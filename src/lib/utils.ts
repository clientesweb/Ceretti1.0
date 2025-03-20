import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function compareArrays(a: any[], b: any[]) {
  return a.length === b.length && a.every((element, index) => element === b[index])
}

// Función para buscar todos los archivos de rutas dinámicas
export function findDynamicRoutes() {
  // Esta función es solo para depuración y no se usa en producción
  return "Función para depuración"
}

