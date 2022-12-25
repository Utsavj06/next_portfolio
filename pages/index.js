import Navbar from '../Components/Navbar';
import styles from '../styles/index.module.css'
import Image from 'next/image'

const index = () => {

    return (
        <>
        <Navbar />
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <div className={styles.homeImg}  >
                <div>
                    <h1 className={styles.first}>
                          Utsav Jaiswal
                    </h1>
                    <div className={styles.second}> 
                        <a href="https://www.linkedin.com/in/utsav-jaiswal-a2200ab8/">
                            <img src='li.png' alt="LinkedIN" height="30px" width="30px" />
                        </a>
                        <a href="https://www.github.com/utsavj06">
                            <img src='github.png' alt="Github" height="30px" width="30px" style={{}} />                            
                        </a>
                        <h3>1413210176</h3>
                    </div>
                </div>
                <div className={styles.below}>
                    <h1 className={styles.third}>Always be Happy</h1>
                </div>
            </div>                
        </div>
        </>
    )
}

export default index;