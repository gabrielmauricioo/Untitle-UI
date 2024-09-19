import Image from "next/image"
import { GridContainer } from "../GridContainer";
import Link from "next/link";
import { FiChevronDown} from 'react-icons/fi'
import { ItemMenu } from "./ItemMenu";


export function Header() {
  return (
    <header className="sticky top-0 w-full h-[80px] z-50 bg-white border-b border-b-gray-100 flex items-center">
      <GridContainer className="flex items-center justify-between">
        <div className="w-full xl:w-auto flex items-center justify-between gap-10">
          <Image
            src="/./logo.svg"
            width={142}
            height={32}
            alt="Logo Untitled UI"
          />
          <nav className="hidden xl:flex items-center gap-8">
            <ItemMenu
              url="/"
              title="Home"
            />
             <ItemMenu
              url="/products"
              title="Products"
              hasDropdown
            />
             <ItemMenu
              url="/resources"
              title="Resource"
              hasDropdown
            />
             <ItemMenu
              url="/princing"
              title="Princing"
            />
          </nav>
          <button>
            <Image
              src="/menu.svg"
              width={40}
              height={40}
              alt="Menu Hamburg"

              className="block xl:hidden"
            
              
            
            />
          </button>
        </div>
        <div>
          <Image
            src="/perfil.svg"
            width={40}
            height={40}
            alt="Foto de perfil do usuário"
            className="hidden xl:block"
          />
        </div>
      </GridContainer>
    </header>
  )
}