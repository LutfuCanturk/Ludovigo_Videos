  import logo from "../assets/LudovigoVideosLogo.png"
  import { FaInstagram, FaGithub } from "react-icons/fa";
function Navbar()
{


  
    return (
<div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10 40px",
  background: "#2FA4AB",
  borderRadius: "30px",
  height: "60px", 
  width: "1210px",
  margin: "0 auto",
  marginTop: "40px",
  marginLeft: "50px"
  
}}>

  {/* SOL - LOGO */}
  <div>
    
   <img src={logo} style={{ width:"100px", marginTop:"10px" }} />  </div>

  {/* ORTA - MENÜ */}
  <div style={{
  display: "flex",
  gap: "100px",
  marginLeft: "-150px",
  justifyContent: "center",
  alignItems: "flex-start",
  marginBottom: "4px",
  flex: 1
  
}}>
  <a className="pixel-btn">Home</a>
  <a className="pixel-btn">Youtube</a>
  <a className="pixel-btn">100 Days 100 Movie</a>
  <a className="pixel-btn">Contact</a>
</div>
  <div style={{
  display: "flex",
  gap: "5px"
}}>
  <a style={{marginLeft: "-150px"}} className="pixel-btn"><FaInstagram /></a>
  <a style={{marginLeft: "0px"}} className="pixel-btn"><FaGithub /></a>
</div>

</div>

    )
}
export default Navbar