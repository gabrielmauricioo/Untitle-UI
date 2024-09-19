import Image from "next/image"
import { GridContainer } from "../GridContainer";
import { AreaCtas } from "./AreaCtas";
import { Tagfeature } from "./Tag-feature";


export function SectionHero(){
  return(
    <section className="py-16 xl:pb-0 pt-24">
      <GridContainer>
        <div className="text-center">
          <Tagfeature/>
          <h1 className="text-4xl xl:text-6xl font-semibold text-gray-900 mt-4 mb-6">Beautiful analytics to grow smarter</h1>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto mb-12">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
          <AreaCtas/>
        </div>
        <Image
          src="/macbook.svg"
          width={1216}
          height={480}
          alt="Foto do macbook"
          className="hidden xl:block mx-auto"
        />
        <Image
          src="/macbook-mobile.png"
          width={343}
          height={200}
          alt="Foto do macbook mobile"
          className="block mx-auto xl:hidden"
        />
        <hr className=" hidden xl:block border-gray-200" />
      </GridContainer>
    </section>
  )
}