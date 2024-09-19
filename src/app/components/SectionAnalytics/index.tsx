import Image from "next/image";
import { GridContainer } from "../GridContainer";
import {FiMail, FiZap, FiBarChart2 } from 'react-icons/fi';
import { ItemFeature } from "../SectionFeatures/ItemFeature";

export function SectionAnalytics(){
  return(
    <section className="pt-24">
      <GridContainer>
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-brand-50 rounded-2xl text-sm/snug font-medium text-brand-700">Features</span>
          <h2 className="text-4xl font-semibold text-gray-900 mt-4 mb-6">Cutting-edge features for advanced analytics</h2>
          <p className="text-xl/normal text-gray-600 max-w-3xl mx-auto">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
          <Image
            src="/dashboard.png"
            width={768}
            height={512}
            alt="Mockup macbook"
            className="absolute -top-[15px] -right-[18px]"
          />
           <Image
            src="/iphone.png"
            width={244}
            height={497}
            alt="Mockup macbook"
            className="absolute bottom-0 left-0"
          />

        </div>
        <div className="flex items-start justify-between">
        <ItemFeature  
            icon={<FiMail size={24} className='text-brand-600'/>}
            title="Share team inboxes"
            text="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
            isBtn
          />

          <ItemFeature
            icon={<FiZap size={24} className='text-brand-600'/>}
            title="Deliver instant answers"
            text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
            isBtn
          />

          <ItemFeature
            icon={<FiBarChart2  size={24} className='text-brand-600'/>}
            title="Manage your team with reports"
            text="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
            isBtn
          />
        </div>
        <hr className="border-gray-200 mt-24"/>
      </GridContainer>
    </section>
  )
}