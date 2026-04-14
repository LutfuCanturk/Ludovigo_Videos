import { motion } from "framer-motion"
import myPhoto from "../assets/homepageme.png"
import { div } from "framer-motion/client"


function Hero({ children }) {
  return (
   <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#F2D51C",
  color: "white",
  width: "100%",
  margin: 0,
  minHeight: "100vh",
  position: "relative",
  paddingBottom: "100px" // alttan biraz boşluk
}}>

      

      {/*INTERVIEW AREA */}
      
      <div 
  className="arcade-flame-wrapper" /* CSS sınıfını ekledik */
  style={{
    marginTop: "-280px",
    width: "800px",
    marginLeft: "170px",
    /* Aşağıdaki stiller çerçeve için şart: */
    position: "relative", 
    padding: "15px", /* Çerçevenin kalınlığı */
    background: "#5900ff", /* Kabin rengi */
    borderRadius: "25px", /* Dış köşeler videodan biraz daha oval */
    boxSizing: "border-box" /* Padding'in genişliği etkilememesi için */
  }}
>
  <video 
    src="/Fiver_Video_artıkson_1.mp4"
    autoPlay 
    loop 
    muted 
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "15px", /* İçerideki videonun köşeleri */
      display: "block", /* Alt boşluğu alır */
      position: "relative",
      zIndex: 2 /* Videonun alevin üzerinde kalmasını sağlar */
    }}
    />
</div>
      {/*PHOTO DIV*/}
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "absolute",
        right: "0",
        marginLeft:"40px"
      }}>
        <motion.img 
          src={myPhoto}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "500%",
            maxWidth: "6000px"
          }}
        />

      </div>

     <div
  style={{
    position: "absolute",
    top: "85%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    color: "black"
  }}
>
  <h2 className="hero-title">It's Ludvig you can call me Ludovigo</h2>

  <p className="hero-text">
    I started video editing about 4 years ago with a freelance project. At first, my work wasn’t liked, but instead of giving up, I kept going and improved myself a lot.

Later, I worked at an advertising agency where I was creating content, improving my skills, and helping the business generate strong results and sales.

I can help your business on the social media side by creating infographics, animations, and smooth, engaging edits. I also work on gaming content and storytelling-style videos.
  </p>
</div>


  </div>



    
    
    
  )
}

export default Hero