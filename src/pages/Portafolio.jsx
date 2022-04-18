
import { useState } from "react";
import "./portafolio.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


  const listTitleProjects = [
    {
      id: 1,
      value: "All",
      state: true,
      project: [
        {
          id: 9,
          title: "Portafolio Personal",
          img: "assents/portafolioPersonal.PNG",
          text: "Este es mi portafolio creado con react y desplegado en Vercel, se utiliza variables en Css para logar dar diferentes colores para el diseño. ",
          linkWeb: "https://jeisonimbana.com",
          linkGit: "https://github.com/Imbana/portafolioJeisonimbana",
        },
        {
          id: 1,
          title: "Breaking dab ",
          img: "assents/breakingBad.PNG",
          text: "En este sitio se hace uso de una api de Breaking Bad para obtener frases celebres de la seria y el actor autor",
          linkWeb: "https://react-breakig-dab-api-81x84snrv-imbana.vercel.app/",
          linkGit: "https://github.com/Imbana/reactBreakigDabApi",
        },

        {
          id: 2,
          title: "Portafolio Web",
          img: "assents/reactPortafolio1.PNG",
          text: "Se muestra un portafolio básico creado con React ",
          linkWeb: "https://react-portafolio-theta.vercel.app/#works",
          linkGit: "https://github.com/Imbana/ReactPortafolio1",
        },
        {
          id: 3,
          title: "Api Dog",
          img: "assents/reactApiDog.PNG",
          text: "En este sitio se uso una api de perros para elegir diferentes fotografiás ya sea cambiando la raza o eligiendo una foto diferente",
          linkWeb: "https://api-dog-react.vercel.app/",
          linkGit: "https://github.com/Imbana/appiDogReact",
        },
        {
          id: 4,
          title: "Pagina en JavaScript",
          img: "assents/paginaColor.PNG",
          text: "Pagina personal en javaScript, html y Css, tema dark y  responsive ",
          linkWeb: "https://imbana.github.io/portafolioJsTheme/",
          linkGit: "https://github.com/Imbana/portafolioJsTheme",
        },
        {
          id: 5,
          title: "Maquinación con HTML y CSS  responsive",
          img: "assents/primerPortafolio.PNG",
          text: "Este proyecto es una maquinación de un portafolio utilizando solo Css y HTML",
          linkWeb: "https://imbana.github.io/",
          linkGit: "https://github.com/Imbana/Imbana.github.io",
        },
        {
          id: 6,
          title: "Portafolio  básico",
          img: "assents/maquetacionImg1.PNG",
          text: "Maquinación con Html y Css para un portafolio Web básico utilizando grid y flex con un diseño responsive",
          linkWeb: "https://imbana.github.io/maquetacion-grid-flexbox",
          linkGit: "https://github.com/Imbana/maquetacion-grid-flexbox",
        },
        {
          id: 7,
          title: "Maquinación de sitio Web",
          img: "assents/maquetacionImg2.PNG",
          text: "Maquinación con Html y Css para un sitio Web básico utilizando grid y flex con un diseño responsive",
          linkWeb: "https://imbana.github.io/maquetacion-responsive2/",
          linkGit: "https://github.com/Imbana/maquetacion-responsive2",
        },
        {
          id: 8,
          title: "Inteligencia artificial",
          img: "assents/pythonTesis.PNG",
          text: "Inteligencia artificial implementada en microcontrolador y utilizadas en detectar la calidad de una fruta para clasificarla si es tipo exportación",
          linkWeb: "https://github.com/Imbana/ClasificacionLimonesCNN",
          linkGit: "https://github.com/Imbana/ClasificacionLimonesCNN",
        },
      ],
    },
    {
      id: 2,
      value: "React",
      state: false,
      project: [
        {
          id: 9,
          title: "Portafolio Personal",
          img: "assents/portafolioPersonal.PNG",
          text: "Este es mi portafolio creado con react y desplegado en Vercel, se utiliza variables en Css para logar dar diferentes colores para el diseño. ",
          linkWeb: "https://jeisonimbana.com",
          linkGit: "https://github.com/Imbana/portafolioJeisonimbana",
        },
        {
          id: 1,
          title: "Breaking dab ",
          img: "assents/breakingBad.PNG",
          text: "En este sitio se hace uso de una api de Breaking Bad para obtener frases celebres de la seria y el actor autor",
          linkWeb: "https://react-breakig-dab-api-81x84snrv-imbana.vercel.app/",
          linkGit: "https://github.com/Imbana/reactBreakigDabApi",
        },
        {
          id: 2,
          title: "Portafolio Web",
          img: "assents/reactPortafolio1.PNG",
          text: "Se muestra un portafolio básico creado con React ",
          linkWeb: "https://react-portafolio-theta.vercel.app/#works",
          linkGit: "https://github.com/Imbana/ReactPortafolio1",
        },
        {
          id: 3,
          title: "Api Dog",
          img: "assents/reactApiDog.PNG",
          text: "En este sitio se uso una api de perros para elegir diferentes fotografiás ya sea cambiando la raza o eligiendo una foto diferente",
          linkWeb: "https://api-dog-react.vercel.app/",
          linkGit: "https://github.com/Imbana/appiDogReact",
        },
      ],
    },
    {
      id: "3",
      value: "Maquinación Web",
      state: false,
      project: [
        {
          id: 1,
          title: "Pagina en javaScript",
          img: "assents/paginaColor.PNG",
          text: "Pagina personal en javaScript, html, css, tema dark y  responsive ",
          linkWeb: "https://imbana.github.io/portafolioJsTheme/",
          linkGit: "https://github.com/Imbana/portafolioJsTheme",
        },
        {
          id: 2,
          title: "Maquinación con HTML y CSS  responsive",
          img: "assents/primerPortafolio.PNG",
          text: "Este proyecto es una maquinación de un portafolio utilizando solo Css y HTML",
          linkWeb: "https://imbana.github.io/",
          linkGit: "https://github.com/Imbana/Imbana.github.io",
        },

        {
          id: 3,
          title: "Portafolio básico",
          img: "assents/maquetacionImg1.PNG",
          text: "Maquinación con Html y Css para un portafolio Web básico utilizando grid y flex con un diseño responsive",
          linkWeb: "https://imbana.github.io/maquetacion-grid-flexbox",
          linkGit: "https://github.com/Imbana/maquetacion-grid-flexbox",
        },
        {
          id: 4,
          title: "Maquinación de sitio Web",
          img: "assents/maquetacionImg2.PNG",
          text: "Maquinación con Html y Css para un sitio Web básico utilizando grid y flex con un diseño responsive",
          linkWeb: "https://imbana.github.io/maquetacion-responsive2/",
          linkGit: "https://github.com/Imbana/maquetacion-responsive2",
        },
      ],
    },
    {
      id: "4",
      value: "Python",
      state: false,
      project: [
        {
          id: 1,
          title: "Inteligencia artificial",
          img: "assents/pythonTesis.PNG",
          text: "Inteligencia artificial implementada en microcontrolador y utilizadas en detectar la calidad de una fruta para clasificarla si es tipo exportación",
          linkWeb: "https://github.com/Imbana/ClasificacionLimonesCNN",
          linkGit: "https://github.com/Imbana/ClasificacionLimonesCNN",
        },
      ],
    },
  ];


const Portafolio = () => {

  const [stateActive, setStateActive] = useState("All")
  const [project, setProject] = useState(listTitleProjects[0].project);

const handledTitleTop = (event) => {
    setStateActive(event.value)
    setProject(event.project);
};

    return (
      <div className="portafolio pageSection">
        <div className="pageContainer">
          <h2 className="portafolioTitle pageTitle">Portafolio</h2>
          <span className="PageLine"></span>
          <div className="portafolioContain">
            <div className="portafolioTop">
              {listTitleProjects.map((item) => (
                <span
                  onClick={() => handledTitleTop(item)}
                  key={item.id}
                  className={
                    item.value === stateActive
                      ? "portafolioTitleText active"
                      : "portafolioTitleText"
                  }
                >
                  {item.value}
                </span>
              ))}
            </div>
            <div className="portafolioProjects">
              {project.map((item) => (
                <span className="portafolioCardProject" key={item.id}>
                  <img src={item.img} alt="foto" />
                  <div className="portafolioCardText">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="portafolioCardLink">
                      <a
                        href={item.linkWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className="portafolioCardIcon"
                          icon={faGlobe}
                        ></FontAwesomeIcon>
                        Sitio web
                      </a>
                      <a
                        href={item.linkGit}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className="portafolioCardIcon"
                          icon={faGithub}
                        ></FontAwesomeIcon>
                        Github
                      </a>
                    </div>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Portafolio
