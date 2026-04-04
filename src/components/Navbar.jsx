function Navbar()
{
    return (

<div style={{
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "black",
    color: "white"
}}>

 <h2> Ludovigo </h2>

 <div>
    <a href="#">Home</a>
    <a href="#" style={{marginLeft: "20px"}}>Youtube</a>
    <a href="#" style={{marginLeft: "20px"}}>Contact</a>
 </div>
</div>

    )
}
export default Navbar