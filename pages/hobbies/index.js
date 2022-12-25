import React from 'react'
import Navbar from '../../Components/Navbar';
import styles from '../../styles/strenght.module.css'
// import Link from 'next/link'
// import "./Strengths.css" ;

const Hobbies = () => {
    return (
        <>
          <Navbar /> 
          <dl className={styles.strengthsCenter} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                  <dt>Writing Stories and Poems</dt>      
                  <dt>______________________</dt>
                  <dt className={styles.setcenter}>Riding Bikes</dt>
          </dl>
        </>
    )
}

export default Hobbies