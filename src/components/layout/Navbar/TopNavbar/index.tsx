import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import Link from "next/link"
import React from "react"
import type { NavMenu } from "../navbar.types"
import { MenuList } from "./MenuList"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { MenuItem } from "./MenuItem"
import Image from "next/image"
import InputGroup from "@/components/ui/input-group"
import ResTopNavbar from "./ResTopNavbar"
import CartBtn from "./CartBtn"

const data: NavMenu = [
  {
    id: 1,
    label: "Tienda",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Redes Sociales",
        url: "/shop#redes-sociales",
        description: "Servicios para Instagram, Facebook, Twitter y más",
      },
      {
        id: 12,
        label: "Paquetes",
        url: "/shop#paquetes",
        description: "Combos especiales para potenciar tu presencia digital",
      },
      {
        id: 13,
        label: "Servicios Premium",
        url: "/shop#premium",
        description: "Soluciones personalizadas para influencers y marcas",
      },
      {
        id: 14,
        label: "Ofertas",
        url: "/shop#ofertas",
        description: "Promociones especiales por tiempo limitado",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Ofertas",
    url: "/shop#ofertas",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "Novedades",
    url: "/shop#novedades",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Servicios",
    url: "/shop#servicios",
    children: [],
  },
]

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className={cn([integralCF.className, "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10 flex items-center"])}
          >
            <span className="mr-2">TT</span>
            <span className="text-sm font-normal">CERETTI MGTM</span>
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && <MenuItem label={item.label} url={item.url} />}
                {item.type === "MenuList" && <MenuList data={item.children} label={item.label} />}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image priority src="/icons/search.svg" height={20} width={20} alt="buscar" className="min-w-5 min-h-5" />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Buscar servicios..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="buscar"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          <Link href="/#signin" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="usuario"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

