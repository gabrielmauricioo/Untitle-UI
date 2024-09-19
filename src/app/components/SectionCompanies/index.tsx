import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionCompanies(){
  return(
    <section className="pt-0 xl:pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 font-medium mb-8">Join 4,000+ companies already growing</p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-10 xl:flex items-center justify-between xl:gap-y-0 xl:sgap-x-0">
          <Image
            src="/layers.svg"
            width={146}
            height={48}
            alt="Logo da layers"
            className=" mx-auto w-[102px] h-[34px] xl:w-[187px] xl:h-[48px]"
          />
           <Image
            src="/sisyphus.svg"
            width={169}
            height={48}
            alt="Logo da sisyphus"
            className="mx-auto w-[118px] h-[34px] xl:w-[169px] xl:h-[48px]"

          />
          <Image
            src="/circooles.svg"
            width={183}
            height={48}
            alt="Logo da circooles"
            className="mx-auto w-[128px] h-[34px] xl:w-[183px] xl:h-[48px]"
          />
           <Image
            src="/catalog.svg"
            width={160}
            height={48}
            alt="Logo da catalog"
            className="mx-auto w-[112px] h-[34px] xl:w-[160px] xl:h-[48px]"
          />
          <Image
            src="/quotient.svg"
            width={187}
            height={48}
            alt="Logo da quotient"
            className="mx-auto w-[131px] h-[34px] xl:w-[187px] xl:h-[48px]"
          />
          <Image
            src="/hourglass.svg"
            width={187}
            height={48}
            alt="Logo da quotient"
            className="mx-auto w-[131px] h-[34px] xl:hidden xl:w-[187px] xl:h-[48px]"
          />
        </div>
        <hr className=" mt-16 xl:mt-24 border-gray-200" />
      </GridContainer>
    </section>
  )
}