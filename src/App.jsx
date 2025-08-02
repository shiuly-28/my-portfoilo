import Nabver from "./shared/Nabver"
import Banner from "./Pages/banner"
import AboutUs from "./Pages/AboutUs";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Background from "./Pages/Background";
import Footer from "./Pages/Footer";

import Contact from "./Pages/Contact";
import ProjectCards from "./Pages/ProjectCard";
import SmoothFollower from "./Pages/SmoothFollower";


function App() {


  return (
    <>

      <div className='w-11/12 mx-w-xl mx-auto'>

        <SmoothFollower></SmoothFollower>
        <Background></Background>
        <Nabver></Nabver>

        <Banner></Banner>

        <AboutUs></AboutUs>
        <Skills></Skills>
        <Education></Education>
        <ProjectCards></ProjectCards>
        <Contact></Contact>
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
