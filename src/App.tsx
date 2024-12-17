import Expat from "./components/Expat";
import Expatglobalgirls from "./components/Expatglobalgirls";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonialcard from "./components/Testimonialcard";
import Traveler from "./components/Traveler";

function App() {
  return (
    <div className="bg-[#F6F6F6]">

      <Hero />
      <div>
      <Expatglobalgirls/>


      </div>
      
      <Traveler />
      <Expat/>
       <HowItWorks />
       <Testimonialcard/>
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
