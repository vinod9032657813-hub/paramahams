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
          
        </div></div>      <div className={bgColor}> <img src='bio.jpg'></img>  
            
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


<div className='bor'><p className='coct'>

Cotton Production in India
Cotton is a vital cash crop in India, contributing
 significantly to the economy and agriculture, with
  diverse cultivation across various states and climatic conditions.
Importance of Cotton
Cotton is often referred to as "White Gold" due to its
 economic significance. It accounts for about 25% of 
 the total global cotton production and is a major 
 source of income and employment for millions of 
 farmers in India. The crop is essential for the 
 textile industry, providing the primary fiber 
 used in clothing and other products. Additionally,
 cottonseed is used for cooking oil and livestock feed, 
 making it a versatile crop.
 Major Cotton-Producing States
India is the only country that cultivates all four species of cotton, 
including Gossypium hirsutum (American Upland cotton) and Gossypium 
arboreum (Asian cotton). The major cotton-producing states include:
Gujarat: The largest producer, known for long-staple cotton varieties.
Maharashtra: The second-largest producer with significant cultivation areas.
Telangana and Andhra Pradesh: Known for high-quality cotton production.
Punjab and Haryana: Benefit from well-developed irrigation systems.
Madhya Pradesh, Rajasthan, Karnataka, and Tamil Nadu: Emerging and 
significant contributors to cotton production. 
2


2 Sources
Climatic and Soil Requirements
Cotton thrives in hot, sunny climates with temperatures ranging 
from 21°C to 30°C and requires a frost-free period of at least 
180 days. It can be grown in various soil types, including well-drained
 alluvial soils and black clayey soils. Cotton is primarily a Kharif crop,
  requiring 500-1500 mm of rainfall annually, and it can be cultivated 
  under both rain-fed and irrigated conditions. 
Next IAS
+1
Challenges in Cotton Production
Despite its importance, cotton production in India faces several challenges:
Pest Issues: The Pink Bollworm pest has significantly reduced yields 
in key states.
Unpredictable Yields: Factors such as erratic weather, declining soil
 fertility, and limited irrigation contribute to yield unpredictability.
Market Access: Many farmers struggle to access markets, often selling 
their cotton at lower prices to intermediaries.
Low Average Yield: India's average yield is around 480 kg/hectare, 
which is below the global average of 800 kg/hectare. 
2


2 Sources Apart from extending the 11% import duty waiver on cotton,
 the Union government has raised the MSP for cotton for the 2025–26
  season and expanded procurement efforts to support farmers facing
   price pressures and stabilize the textile industry.

The move addresses both the challenges of rising imports and the need
 to safeguard farmer welfare amid a 15-year low in domestic cotton production.
What is the State of Cotton Cultivation in India?
About: Cotton, popularly called “White Gold”, is India’s most important
 commercial crop, contributing about one-fourth of global output. 
Nearly two-thirds (67%) of the area is rain-fed, making cultivation highly 
dependent on monsoons, while only a third (33%) is irrigated.
Cotton cultivation in India dates back to the Indus Valley Civilization,
 with textiles famed worldwide for their quality and craftsmanship, but 
 under colonial rule India was reduced to a raw cotton supplier for British mills.
Growing Conditions: It is a subtropical crop that requires a warm, sunny,
 frost-free climate with adequate humidity.
It grows well in deep alluvial soils (north India), black clayey soils 
(central India), and red-black mixed soils (southern India).
While it can withstand some salinity, the crop is extremely vulnerable
 to waterlogging, making proper drainage crucial. 
Cotton is primarily a Kharif crop, with its sowing season starting in
 early April-May in northern India and during the monsoon season 
 in the southern zone.
Hybrid and Bt Cotton: Hybrid Cotton is produced by crossing two parent 
varieties with different traits, often occurring naturally
 through cross-pollination.
Bt Cotton is a genetically modified variety that resists common pests,
 especially bollworms.
India’s Scenario: India is the second-largest producer and consumer 
of cotton in the world, after China

What are the Key Challenges to the Cotton Sector in India?
Weather Variability & Climate Risks: Cotton is highly climate-sensitive,
 with yields impacted by erratic rainfall, droughts, floods, declining 
 soil fertility, and limited irrigation. 
Rising temperatures and shifting rainfall patterns add long-term risks
 to sustainable cotton production.
Low Yield & Outdated Practices: Many farmers still rely on traditional 
methods, leading to low productivity (480 kg/ha in India vs world avg. 800 kg/ha)
 and inferior fibre quality. 
Lack of access to modern techniques, certified seeds, and weed management further
 widens the gap, especially for small and new farmers in rural areas.
Pest & Disease Infestations: The Pink Bollworm (PBW) and other pests, along with 
fungal infections, are reducing cotton output.
India's cotton production has dropped to a 15-year low of 25 million bales due
 to these issues and declining GM cotton effectiveness.
High Cost of Cultivation: Rising input costs for seeds, fertilizers, pesticides,
 and cheaper imports make cotton farming economically 
unsustainable, particularly for small and marginal farmers.
Market-Related Challenges: Farmers face restricted market access and are often 
forced to sell at below-MSP rates,

</p> <p className='coc'><img src='cotton1.jpg'></img> 
<p className='india'><img src='cotton5.jpg'></img></p>
</p>

</div> 


         <hr className='lll'></hr>
         <div className='peacetop'>
         <div className='peace'>  
        <ul> <div className='first'><Link to='/bioenergy'>
            <li>Bioenergy</li>
            </Link>
            <p className='small'>bioenergy is energy which is made by biomass <br></br>
            biomass means the waste of trees,human,vegitable<br></br>,waste of bio ,to  know more click the  above link</p></div> 
        <div className='first'> <Link to='/material'>
            <li>Material</li>
            </Link> <p className='small'>we collect the cotton trees from<br></br> farmers at low costs
              so  we can get row<br></br> material at low Cost to <br></br>know more click on above link</p></div>
        <div className='first'> <Link to='/bsr'>
            <li>B2B</li>
            </Link> <p> we provide energy to Business <br></br>,government,or to ev stations 
              so if you want<br></br> to know more click on above link</p></div> 
          
           <div className='first'><Link to='/about'>
            <li>About</li>
            </Link> <p>our company is for making energy<br></br> by bio mass waste
              it is a step by<br></br> step processto mack energy <br></br>to know 
              more click on above link</p></div>  
            <div className='second'>  <Link to='/Business'>
            <li>Business</li>
            </Link><p> this Business is about bio mass energy,<br></br>bioenergy is
             a energy which is made by biomass <br></br>
            biomass means the waste of trees,human,vegitable<br></br>,waste of bio
             ,to  know more click the  above link</p></div> </ul></div>
           <div className='peace'> <ul>  <div className='first'> <Link to='/sus'>
            <li>Sustainability</li>
            </Link><p>by produsing power in this way <br></br>we can reduce the pollution 
              so it is good<br></br> for environment thats why itis <br></br>
              callled sustainable energy production way</p></div>
            <div className='first'><Link to='/contact'>
            <li>cantact us</li>
            </Link><p> if you want to know more about <br></br>our
             company then cantact the above<br></br> 
            addresse by clicking on link </p></div>
            <div className='first'><Link to='/investers'>
            <li>investers</li>
            </Link><p>presently we didt get money from <br></br>
            investers it is loan based factory
              if you<br></br> willing to know click the above link</p></div>
             <div className='third'><Link to='/buyers'>
            <li>buyers</li>
            </Link><p>the buyers are government,big<br></br> factories 
            which depends on power,and<br></br> ev stations
              if you want to know about unit <br></br>price then click on above link </p></div>
             <div className='four'><Link to='/place'>
            <li>place</li>
            </Link><p>the factory is located in yemmiganur <br></br>which has sarounding villages
             it isva main center<br></br> for some villages so
             it helps to collect raw material<br></br> if you want to 
             know more then <br></br>click  on above link </p></div>        

                 </ul>
             </div>
          
        
</div>


         </div>
  )
}

export default Mainpage