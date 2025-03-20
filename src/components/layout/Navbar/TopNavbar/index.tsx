import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import Link from "next/link"
import React from "react"
import type { NavMenu } from "../navbar.types"
import { MenuList } from "./MenuList"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { MenuItem } from "./MenuItem"
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
        url: "/paquetes",
        description: "Planes de gestión de redes sociales",
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
    label: "Portfolio",
    url: "/portfolio",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "Blog",
    url: "/blog",
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="min-w-5 min-h-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="max-w-[22px] max-h-[22px]"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
          <CartBtn />
          <Link href="/#signin" className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="max-w-[22px] max-h-[22px]"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

