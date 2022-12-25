import React from 'react';
import Navbar from '../../Components/Navbar';
import styles from '../../styles/skills.module.css'

const Skills = () => {
    return (
        <>
        <Navbar />
        <div>
          <div className={styles.Skills}>
              <div className={styles.center}>
                  <img src='/css.png' alt="HTML and CSS" height="200" width="200" />
                  <h1 className="">HTML and CSS</h1>
              </div>
              <div className={styles.center}>
                  <img src='/Js.png' alt="Javascript" height="200" width="200" />
                  <h1 className="">JavaScript</h1>
              </div>
              <div className={styles.center}>
                  <img src='/next.jpeg' alt="React.JS" height="200" width="200" />
                  <h1 className="">React Js and Next Js</h1>
              </div>
              <div className={styles.center}>
                  <img src='/tailwind.png' alt="Tailwind CSS" height="200" width="200" />
                  <h1 className="">Tailwind CSS</h1>
              </div> 
              <div className={styles.center}>
                  <img src='/Typescript.png' alt="Typescript" height="200" width="200" />
                  <h1 className="">Typescript</h1>
              </div>
              <div className={styles.center}>
                  <img src='/material-ui.png' alt="material" height="200" width="200" />
                  <h1 className="">Material UI</h1>
              </div>              
          </div>
        </div>
        </>
    )
}

export default Skills