import React from 'react'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Error = () => {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 2000)
    },[])
  return (
    <>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', 
                   height:'100vh', flexDirection:'column', gap:'20px'}}>
      404 Page Not Found
      <button style={{backgroundColor:'DodgerBlue', height:'50px', cursor:'pointer', 
                      width:'100px', borderRadius:'20px'}} onClick={()=> router.push('/')}>
        {/* <Link href='/'> */}
           <h3>Go Home</h3>
         {/* </Link> */}
      </button>
      </div>
    </>
  )
}

export default Error