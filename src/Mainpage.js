import React, {useState,useRef}from 'react'
import'./App.css'
import { Link } from 'react-router-dom';

const Mainpage = () => {

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
    <div>
    <div className='npg'>
      
    <div className='vinod1'>

         
      
      <div className='chandra'> 
            <h1><img src='cev bio logo.png'></img></h1>
        </div>

        <div className='sai'>
            <ul><Link to='/about'>
            <li>About</li>
            </Link>
                
                
              
              <Link to='/Business'>
            <li>Business</li>
            </Link>
            <Link to='/sus'>
            <li>Sustainability</li>
            </Link>
            <Link to='/contact'>
            <li>cantact us</li>
            </Link>
            <Link to='/investers'>
            <li>investers</li>
            </Link>
             <Link to='/buyers'>
            <li>buyers</li>
            </Link>
             <Link to='/place'>
            <li>place</li>
            </Link>        

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
         <div className='b3'><Link to='/bioenergy'>
            <li>Bioenergy</li>
            </Link></div> 
         <div className='b4'><Link to='/material'>
            <li>Material</li>
            </Link> </div> 
         <div className='b5'><Link to='/bsr'>
            <li>B2B</li>
            </Link> </div> 
          
        </div></div>           </div>
  )
}

export default Mainpage