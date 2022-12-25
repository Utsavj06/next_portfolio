import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
    <div className={styles.hambugger}>
      <MenuIcon />
    </div>
    <nav>
    <ul className={styles.mymenu} style={{display:'flex', justifyContent:'center'}}>
        <Link href="/">
          <h3>Home ||</h3>
        </Link>
        <Link href="/qualifications">
          <h3>Qualification ||</h3>
        </Link>
        <Link href="/skills">
          <h3>Skills ||</h3>
        </Link>
        <Link href="/training">
          <h3>Training/Certification ||</h3>
        </Link>
        <Link href="/strengths">
          <h3>Strengths ||</h3>
        </Link>
        <Link href="hobbies/">
          <h3>Hobbies ||</h3>
        </Link>
        <Link href="/pi">
          <h3>Personal Information</h3>
        </Link>
    </ul> 
    </nav> 
    </>
  )
}

export default Navbar