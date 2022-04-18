import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faReact,
   faCss3Alt,
   faHtml5,
   faSass,
   faJs,
   faBootstrap,
   faGitAlt,
   faGithub,
   faPython,
   faNode,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
   const ListaSkills = [
      {
         id: "1",
         value: "React",
         icon: faReact,
         link: "https://es.reactjs.org/",
      },
      {
         id: "2",
         value: "Css",
         icon: faCss3Alt,
         link: "https://developer.mozilla.org/es/docs/Learn/CSS",
      },
      {
         id: "3",
         value: "Html",
         icon: faHtml5,
         link: "https://developer.mozilla.org/es/docs/Web/HTML",
      },
      { id: "4", value: "Sass", icon: faSass, link: "https://sass-lang.com/" },
      {
         id: "5",
         value: "JavaScript",
         icon: faJs,
         link: "https://www.javascript.com/",
      },
      {
         id: "6",
         value: "Bootstrap",
         icon: faBootstrap,
         link: "https://getbootstrap.com/",
      },
      { id: "7", value: "Git", icon: faGitAlt, link: "https://git-scm.com/" },
      { id: "8", value: "Github", icon: faGithub, link: "https://github.com/" },
      {
         id: "9",
         value: "Python",
         icon: faPython,
         link: "https://www.python.org/",
      },
      {
         id: "10",
         value: "Express",
         icon: faNode,
         link: "https://expressjs.com/es/",
      },
   ];

   return (
      <div className="about pageSection" id="about">
         <div className="pageContainer">
            <h2 className="aboutTitle pageTitle">About</h2>
            <span className="PageLine"></span>

            <div className="aboutContain">
               <div className="aboutRight">
                  <div className="aboutRightContain">
                     <span className="aboutRightQuestion">Quien soy?</span>
                     <h3 className="aboutRightFirst">
                        Yo soy Jeison Imbaña Ingeniero electrónico,apasionado a
                        la tecnología, desarrollo web e inteligencia Artificial{" "}
                     </h3>
                     <p className="aboutRightText">
                        Poseo conocimiento en reparación y mantenimiento de
                        equipos electrónicos, diseño y construcción de paginas
                        web principalmente con la librería React, ademas cuentos
                        con habilidades en programación de python orientado a
                        procesamiento de datos y redes neuronales. Capacidad de
                        adaptabilidad, mejoramiento continuo y abierto a
                        adquirir nuevos conocimientos en diferentes áreas de la
                        ingeniería.
                     </p>
                     <a
                        className="download"
                        href="assents/hojaCv.pdf"
                        download="Reporte2Mayo2010"
                     >
                        <span>Descargar CV</span>
                     </a>
                  </div>
               </div>
               <div className="aboutLeft">
                  <h2 className="aboutLeftTitle">Skills</h2>
                  <div className="aboutTargets">
                     {ListaSkills.map((item) => (
                        <a
                           href={item.link}
                           key={item.id}
                           className="aboutLeftTarget"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon
                              className="aboutLeftTargetIcon"
                              icon={item.icon}
                           />
                           <h3 className="aboutLeftSubtitle">{item.value}</h3>
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
