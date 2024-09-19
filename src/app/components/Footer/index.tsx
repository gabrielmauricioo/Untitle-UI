import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemNav } from "./ItemNav";

export function Footer(){
  return(
    <footer className="pt-16 pb-12">
      <GridContainer>
        <div className="flex items-start justify-between pb-16 ">
          <ItemNav
            title="Products"
            itemsMenu={[
            {
              name: "Overview",
              url: "/overview"
            },
            {
              name: "Features",
              url: "/features"
            },
            {
              name: "Solutions",
              url: "/solutions"
            },
            {
              name: "Tutorials",
              url: "/tutorials"
            },
            {
              name: "Pricing",
              url: "/pricing"
            },
            {
              name: "Releases",
              url: "/releases"
            },

            ]}
          />
          <ItemNav
            title="Company"
            itemsMenu={[
            {
              name: "About us",
              url: "/overview"
            },
            {
              name: "Careers",
              url: "/features"
            },
            {
              name: "Press",
              url: "/solutions"
            },
            {
              name: "News",
              url: "/tutorials"
            },
            {
              name: "Media kit",
              url: "/pricing"
            },
            {
              name: "Contact",
              url: "/releases"
            },

            ]}
          />
          <ItemNav
            title="Resources"
            itemsMenu={[
              {
                name: "Blog",
                url: "/overview"
              },
              {
                name: "Newsletter",
                url: "/features"
              },
              {
                name: "Events",
                url: "/solutions"
              },
              {
                name: "Help centre",
                url: "/tutorials"
              },
              {
                name: "Tutorials",
                url: "/pricing"
              },
              {
                name: "Support",
                url: "/releases"
              },

              ]}
          />
          <ItemNav
            title="Use cases"
            itemsMenu={[
              {
                name: "Startups",
                url: "/overview"
              },
              {
                name: "Enterprise",
                url: "/features"
              },
              {
                name: "Government",
                url: "/solutions"
              },
              {
                name: "SaaS",
                url: "/tutorials"
              },
              {
                name: "Marketplaces",
                url: "/pricing"
              },
              {
                name: "Ecommerce",
                url: "/releases"
              },

              ]} 
          
          />
          <ItemNav
            title="Social"
            itemsMenu={[
              {
                name: "Twitter",
                url: "/overview"
              },
              {
                name: "LinkedIn",
                url: "/features"
              },
              {
                name: "Facebook",
                url: "/solutions"
              },
              {
                name: "GitHub",
                url: "/tutorials"
              },
              {
                name: "AngelList",
                url: "/pricing"
              },
              {
                name: "Dribbble",
                url: "/releases"
              },

              ]}
          />
          <ItemNav
            title="Legal"
            itemsMenu={[
              {
                name: "Terms",
                url: "/overview"
              },
              {
                name: "Privacy",
                url: "/features"
              },
              {
                name: "Cookies",
                url: "/solutions"
              },
              {
                name: "Licenses",
                url: "/tutorials"
              },
              {
                name: "Settings",
                url: "/pricing"
              },
              {
                name: "Contact",
                url: "/releases"
              },

              ]}
          />

        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
          <Image
            src="/logo2.svg"
            width={142}
            height={32}
            alt="Logo Untitled UI"
          />

          <p className="text-gray-500">© 2077 Untitled UI. All rights reserved.</p>

        </div>

      </GridContainer>
    </footer>
  )
}