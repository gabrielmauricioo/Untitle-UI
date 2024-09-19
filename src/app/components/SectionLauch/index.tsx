import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemLauch } from "./ItemLauch";

export function SectionLauch(){
  return(
    <section className="py-24">
      <GridContainer>
        <div className="w-full max-w-3xl mb-16">
          <span className="block font-semibold text-brand-600 mb-3">Launch faster</span>
          <h2 className="text-4xl font-semibold text-gray-900 -tracking-[0.72px] mb-5">Build something great</h2>
          <p className="text-xl/6 text-gray-600">We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full max-w-xl grid grid-cols-2 gap-x-8 gap-y-16">
            <ItemLauch
              title="4,000+"
              title2="Global customers"
              text="We’ve helped over 4,000 amazing global companies."
            />
             <ItemLauch
              title="600%"
              title2="Return on investment"
              text="Our customers have reported an average of ~600% ROI."
            />
             <ItemLauch
              title="10k"
              title2="Global downloads"
              text="Our app has been downloaded over 10k times."
            />
             <ItemLauch
              title="200+"
              title2="5-star reviews"
              text="We’re proud of our 5-star rating with over 200 reviews."
  
            />
          </div>
          <div>
            <Image
              src="/build.jpg"
              width={560}
              height={560}
              alt="Lauch"
            />
          </div>
        </div>
        
      </GridContainer>
    </section>
  )
}