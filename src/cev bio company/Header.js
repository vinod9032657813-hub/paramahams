

import React,{useState,useRef} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../App.css'
import About from '../About';

   
const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
  const [bgColor, setBgColor] = useState("image");
  const[state,setstate] =useState("mini")
   const audioRef = useRef(null);
   const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };


 const changeColor = () => {
    // Change to a random color
    
    setBgColor("chitti");
    setstate("jjj")
  };


  const handleImageClic = () => {
    setShowSearch(true);
  };





  return (


    <div className='npg'>
      
    <div className='vinod1'>

         
      
      <div className='chandra'> 
            <h1><img src='cev bio logo.png'></img></h1>
        </div>

        <div className='sai'>
            <ul>
              <li>About</li>
              
               <li>Business</li>
        <li> Sustainability</li>  
              <li> Cantact us</li>
              <li> investors</li>
              <li> buyers</li>
              <li> place</li>

                 </ul>
             </div>
       
 <div className='raghu'>
            
               <div className='mmm'> 
            <h1>
<img
        src="audiologo.png"
        alt="Play Song"
        onClick={handleImageClick}
        style={{ cursor: "pointer", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}
      />

      {/* Audio element */}
      <audio ref={audioRef} src="/song.mp3" preload="auto" />


            </h1>
        </div>
               <div className='ppp'> 
            <h1>
<img
        src="sunlogo.png"
        alt="Click Me"
        onClick={changeColor}
        style={{ cursor: "pointer", borderRadius: "10px" }}
      />
            
            </h1>
        </div>
               <div className='ooo'> 
            <h1>  <img
        src="search.png"
        alt="Click Me"
        onClick={handleImageClic}
        style={{ cursor: "pointer", borderRadius: "10px" }}
      /></h1>

            {showSearch && (
        <input
          type="text"
          placeholder="Search here..."
          style={{
        
            padding: "10px",
            width: "220px",
            borderRadius: "5px",
            border: "2px solid #ccd",
              marginBottom:"0px",
              height:"20px"
          }}
        />
      )}

           
        </div>
               
               
         </div>
      
         </div> 
         <hr className='lll'></hr>
         <div className='b2'>  
         <div className='b3'><li>BIO ENERGY</li></div> 
         <div className='b4'><li>MATERIAL</li></div> 
         <div className='b5'><li>B2B</li></div> 
          
        </div>

        
          
            <div className={bgColor}> <img src='bio.jpg'></img>  
            
         </div> 

<div className='tt'> <div className='par'> <p>
  Since its inception in 2026, cev Bioenergy has rapidly 
  emerged as India's smaller bioenergy <br></br> producer.

At the forefront of transforming waste into energy, we are 
pioneering a circular <br></br> economy approach to achieving net 
carbon zero at Reliance.

Our journey began with<br></br>  establishing two demo Compressed
 Biogas (CBG) units in Jamnagar.

Subsequently, we  <br></br> executed a record-breaking 10-month
 construction of our first commercial-scale CBG plant  <br></br>in Barabanki.</p></div>
 <div className='par2'>
  Building on this success, we are currently focused on establishing CBG 
  plants across India  in gujarath <br></br> we made this plant for bio energy and plan to expand with multiple plants, in line 
  with our commitment  <br></br> of Net Carbon Zero status by 2035.
  
energy solutions. Through our innovative technology, dedication to <br></br>
cev Bioenergy is committed to leading the way in  
environmental stewardship, and digital-first approach,<br></br> we are committed

 to providingreliable, sustainable energy solutions that benefit both   
 the environment<br></br> and the economy.
 </div>
</div>

        
        <div className='name'>  </div>
         <p className='para'>

Compressed Biogas (CBG) is a renewable and clean alternative to fossil fuels.
 It is produced from a variety of organic waste materials, including agricultural
residue, cattle dung, sugarcane press mud, and organic fraction of municipal solid waste.
Through a process called anaerobic digestion, organic waste is transformed into 
biogas, a mixture of methane and carbon dioxide. By purifying the biogas and removing 
impurities like hydrogen sulphide, we create Compressed Biogas (CBG).Our Compressed Biogas 
(CBG) exceeds industry standards, with methane content 
exceeding 96% (v/v). With properties and calorific value similar to Compressed 
Natural Gas (CNG), CBG can be seamlessly integrated into existing infrastructure.

As India boasts an abundance of biomass resources, CBG offers a promising solution
 to reduce our dependence on fossil fuels while addressing waste management challenges.

    </p>        

<div style={{ display: "flex", justifyContent: "flex-end",
   marginTop: "0px", marginRight:"100px" }}    className={state}>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nVl17JLn_u0"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

</div>


<div className='bor'><p className='coct'> no girrljjbwbjebfwjef fejweff falsefwjbw</p> <p className='coc'><img src='cotton1.jpg'></img> 



</p>

</div>




</div>

            
  )

};
export default Header