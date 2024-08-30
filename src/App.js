
import './App.css';
import "@fontsource/poppins";
import About from './components/about.js';

import Home from './components/home.js'
import Experience from './components/experience.js'
import Pdf from './BLResume.pdf'
import $ from 'jquery';



const navStyle ={

  display: "block",
  background: "white",

  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  margin: "auto",
  top: "0",
  position: "fixed",
  boxShadow: "0px 3px 3px 0px rgba(20,20,20,0.45)",


}

const ul = {
  float: "right",
  paddingRight: "50px",

}


function App() {

  
  const handleClickScroll = (event) => {
    const section_id = event.currentTarget.getAttribute("section");
    const element = document.getElementById(section_id);
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    $(function() {

      $('li[id^=home]').addClass("activeNav");
  
      //Home
      $('#Home').click(function() {
          $('li[id^=home]').addClass("activeNav");
          $('li[id^=experience]').removeClass("activeNav");
          $('li[id^=aboutme]').removeClass("activeNav");
      });
      $('#aboutme').click(function() {
        $('li[id^=home]').removeClass("activeNav");
        $('li[id^=experience]').removeClass("activeNav");
        $('li[id^=aboutme]').addClass("activeNav");
      });
      $('#experience').click(function() {
        $('li[id^=home]').removeClass("activeNav");
        $('li[id^=experience]').addClass("activeNav");
        $('li[id^=aboutme]').removeClass("activeNav");
      });
  
      
  
  
  })
    }
  };

  return (
    <div className="App">
      <section id="top">
        <div style={navStyle}>
          <ul style={ul}>
              <li onClick={handleClickScroll} section="top" className="listStyle">Home</li>
              <li className="listStyle" onClick={handleClickScroll} section="experience" >Experience</li>
              <li className="listStyle" onClick={handleClickScroll} section="about">About Me</li>
              <a className="listStyle resume" href={Pdf} without="true" rel="noopener noreferrer" target="_blank">Resume</a>
          </ul>
        </div>
        </section>
       
      <section className="homeSection" id="home">
       <Home />

      </section>


      <section className="expereinceSection" id="experience">
        <Experience />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
