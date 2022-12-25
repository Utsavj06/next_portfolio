import React from 'react'
import Navbar from '../../Components/Navbar';
import styles from '../../styles/pi.module.css'
import Link from 'next/link'

const Pi = () => {
    return (
        <>
        <Navbar />
        {/* <div className={styles.Parent}> */}
        <div className='Parent'>
            {/* <div className={styles.itemFlex} style={{display:'flex', justifyContent:'center'}}>
                <h1 className={styles.titleName}>Father's Name :</h1>
                <h3 className={styles.itemMargin}>Adesh Kumar</h3>
            </div> */}
            <div className='itemFlex' style={{display:'flex', justifyContent:'center'}}>
                <h1 className='titleName'>Father's Name :</h1>
                <h3 className='itemMargin'>Adesh Kumar</h3>
            </div>
            {/* <div className={styles.itemFlex} style={{display:'flex', justifyContent:'center'}}>
                <h1 className={styles.titleName}>Date of Birth :</h1>
                <h3 className={styles.itemMargin}>06th of July, 1996</h3>
            </div> */}
            <div className='itemFlex' style={{display:'flex', justifyContent:'center'}}>
                <h1 className='titleName'>Date of Birth :</h1>
                <h3 className='itemMargin'>06th of July, 1996</h3>
            </div>
            {/* <div className={styles.itemFlex} style={{display:'flex', justifyContent:'center'}}>
                <h1 className={styles.titleName}>Address :</h1>
                <h3 className={styles.itemMargin}>Hno. 386/A, Hanumanpur,<br></br> Pt. Deen Dayal Upadhaya Nagar</h3>
            </div> */}
            <div className='itemFlex' style={{display:'flex', justifyContent:'center'}}>
                <h1 className='titleName'>Address :</h1>
                <h3 className='itemMargin'>Hno. 386/A, Hanumanpur,<br></br> Pt. Deen Dayal Upadhaya Nagar</h3>
            </div>
        </div>
        <style jsx>{`
            .Parent{
                border:3px solid black;
                height:450px;
                margin-top:20px;
                display:flex;
                flex-direction:column;
                align-items:center;
                width:99%;
                margin-left:3px;
            }
            
            .titleName{
                font-size:40px;
            }
            
            .itemFlex{
                display:grid;
                grid-template-columns:350px 360px;
                gap:20px;
            }
            
            .itemMargin{
                font-size:24px;
                margin-top:45px;
            }
                    
        `}</style>
        </>
    )
}

export default Pi