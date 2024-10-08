import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionTesttimonials } from "./components/SectionTestimonials";
import { SectionAnalytics } from "./components/SectionAnalytics";
import { SectionQuestions } from "./components/SectionQuestions";
import { SectionLauch } from "./components/SectionLauch";
import { SectionTrial } from "./components/SectionTrial";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <SectionHero/>
      <SectionCompanies/>
      <SectionFeatures/>
      <SectionTesttimonials/>
      <SectionQuestions/>
      <SectionLauch/>
      <SectionTrial/>
      <Footer/> 
      
    </>
    
  );
}
