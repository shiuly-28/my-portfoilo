import Nabver from "./shared/Nabver"
import Banner from "./Pages/banner"
import AboutUs from "./Pages/AboutUs";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Background from "./Pages/Background";
import Footer from "./Pages/Footer";
import ProjectCard from "./assets/ProjectCard";
import Contact from "./Pages/Contact";

function App() {
  

  return (
    <>
    
      <div className='w-11/12 mx-w-xl mx-auto'>
        <Background></Background>
          <Nabver></Nabver>
       
        <Banner></Banner>
        
          <AboutUs></AboutUs>
          <Skills></Skills>
        <Education></Education>
        <ProjectCard></ProjectCard>
        <Contact></Contact>
        <Footer></Footer>
        
      </div>
     
    </>
  )
}

export default App
