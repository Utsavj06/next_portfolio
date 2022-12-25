import React from 'react';
import Navbar from '../../Components/Navbar';
import styles from '../../styles/trainings.module.css'
// import Link from 'next/link';
// import "./Training.css";

const Training = () => {
    return (
        <>
        <Navbar /> 
        <div className={styles.itemsCenter}>
            <dl className={styles.para} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <dt>Successfully completed bootcamp of <b>JavaScript</b> and <b>React.JS</b> orgainised by <b>ShapeAI</b> -(online Youtube Channel) with E-Certificate.</dt>
                <dt className="sp">______________________</dt> 
                <dt>Successfully completed of Training under <b>Arise by Aricent CSR</b> ON-Campus programme in year 2017</dt>
                <dt className="sp">______________________</dt>
                <dt>RoboKart- (Chief Student Coordinator at <b>Augmented Reality</b> Workshop under <b>GNIOT-TechClub</b> Official Technical Club of College.</dt>
                <dt className="sp">______________________</dt>
                <dt>Work as a Trainee in organization <b>(Essentia Softserv LLP.)</b></dt>
                <dt className="sp">______________________</dt>
                <dt>Participated in <b>20th National Child Science Congress (NCSC)</b> at School Time </dt> 
            </dl>
        </div>
        </>
    )
}

export default Training;