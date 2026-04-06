import { motion } from "framer-motion"
import myPhoto from "../assets/homepageme.png"
import { div } from "framer-motion/client"


function Hero({ children }) {
  return (
    <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    background: "#F2D51C",
    color: "white",
    width: "100vw",   // BUNU DEĞİŞTİR
    margin: 0
    }}>

      

      {/*INTERVIEW AREA */}
      <div>
        <h1>LUDOVIGO</h1>
        <p>Video içerikleri üretiyorum</p>
      </div>

      {/*PHOTO DIV*/}
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "absolute",
        right: "0"
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

    </div>
    
  )
}

export default Hero