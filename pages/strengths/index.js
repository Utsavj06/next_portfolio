import React from 'react';
import Navbar from '../../Components/Navbar';
import styles from '../../styles/strenght.module.css'
// import Link from 'next/link';
// import "./Strengths.css";

const Strengths = () => {
    return (
        <>
          <Navbar />
          <dl className={styles.strengthsCenter}>
              <dt>Quick Learner</dt>
              <dt>______________________</dt>
              <dt>Flexible</dt>
          </dl>
        </>
    )
}

export default Strengths