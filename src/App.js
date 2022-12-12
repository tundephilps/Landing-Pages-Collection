import React from 'react'
import "./App.css"
import Welcome from './components/Welcome';
import {useState, useEffect} from "react"

//import aos (animate on scroll)
import Aos from 'aos';
import 'aos/dist/aos.css';



function App () {



  useEffect(() => {
    Aos.init({
      duration: 10000,
      delay: 1000,
    }
    
    );
  });

  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },5000)
  },[])

  return (
  <>    
  {
    loading ?
<section className='section'>
<Welcome />
</section>
  : 

  <section>
            <div>
            <div class="flex-slider">
  <div 
  data-aos='fade-left'
  data-aos-delay='300' class="box box-1"><a className='neon2' href="https://black-golf-tundephilps.vercel.app/" style={{textDecoration: "none", color: "Green", fontFamily: "Iceland"}} >Page 1</a></div>
  <div
  data-aos='fade-left'
  data-aos-delay='600' class="box box-2"><a href="https://single-page-app2-three.vercel.app/" style={{textDecoration: "none", color: "Green", fontFamily: "Iceland"}}>Page 2</a></div>
  <div
  data-aos='fade-left'
  data-aos-delay='800' class="box box-3"><a href="https://web3-khaki.vercel.app" style={{textDecoration: "none", color: "Green", fontFamily: "Iceland"}}>Page 3</a></div>
  <div
  data-aos='fade-left'
  data-aos-delay='1000' class="box box-4"><a href="/https://nft-page-phi.vercel.app/" style={{textDecoration: "none", color: "Green", fontFamily: "Iceland"}}>Page 4</a></div>
  
  <div
  data-aos='fade-left'
  data-aos-delay='1200' class="box box-5"><a href="https://single-page-app1-three.vercel.app" style={{textDecoration: "none", color: "Green", fontFamily: "Iceland"}}>Page 5</a></div>
  
  <div 
  data-aos='fade-left'
  data-aos-delay='1400' class="box box-6"><a href="https://tailwind-vr.vercel.app/" style={{textDecoration: "none", color: "Green", fontFamily: "Iceland"}}>Page 6</a></div>
  
  <div
  data-aos='fade-left'
  data-aos-delay='1600' class="box box-7"><a href="https://single-page-app3-psi.vercel.app/" style={{textDecoration: "none", color: "Green", fontFamily: "Iceland"}}>Page 7</a></div>
  <div
  data-aos='fade-left'
  data-aos-delay='1800' class="box box-8"><a href="https://mi-store-clone-nine.vercel.app/" style={{textDecoration: "none", color: "Green", fontFamily: "Iceland"}}>Page 8</a></div>
 
            </div>
            </div>
            </section>

  }
            </>  
    );
}


export default App;