// Este script es para ejecutar localmente para limpiar rutas conflictivas
const fs = require("fs")
const path = require("path")

// Directorios a revisar
const APP_DIR = path.join(__dirname, "src", "app")

// Función para buscar archivos de rutas dinámicas
function findDynamicRoutes(dir, routes = []) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Si el nombre del directorio contiene corchetes, es una ruta dinámica
      if (file.includes("[") && file.includes("]")) {
        routes.push({
          path: filePath,
          name: file,
        })
      }

      // Buscar recursivamente en subdirectorios
      findDynamicRoutes(filePath, routes)
    }
  }

  return routes
}

// Función para verificar conflictos de rutas
function checkRouteConflicts(routes) {
  const routeMap = new Map()
  const conflicts = []

  for (const route of routes) {
    const dirPath = path.dirname(route.path)
    const paramName = route.name.replace(/[[\]]/g, "")

    if (!routeMap.has(dirPath)) {
      routeMap.set(dirPath, [])
    }

    routeMap.get(dirPath).push({
      paramName,
      fullPath: route.path,
    })
  }

  // Buscar conflictos (múltiples parámetros diferentes en el mismo nivel)
  for (const [dirPath, params] of routeMap.entries()) {
    if (params.length > 1) {
      const paramNames = new Set(params.map((p) => p.paramName))
      if (paramNames.size > 1) {
        conflicts.push({
          directory: dirPath,
          parameters: Array.from(paramNames),
          routes: params.map((p) => p.fullPath),
        })
      }
    }
  }

  return conflicts
}

// Función principal
function main() {
  console.log("Buscando rutas dinámicas...")
  const routes = findDynamicRoutes(APP_DIR)
  console.log(`Se encontraron ${routes.length} rutas dinámicas.`)

  console.log("\nVerificando conflictos...")
  const conflicts = checkRouteConflicts(routes)

  if (conflicts.length === 0) {
    console.log("No se encontraron conflictos de rutas.")
    return
  }

  console.log(`Se encontraron ${conflicts.length} conflictos:`)
  conflicts.forEach((conflict, index) => {
    console.log(`\nConflicto #${index + 1}:`)
    console.log(`Directorio: ${conflict.directory}`)
    console.log(`Parámetros en conflicto: ${conflict.parameters.join(", ")}`)
    console.log("Rutas afectadas:")
    conflict.routes.forEach((route) => console.log(`  - ${route}`))
  })
}

main()

