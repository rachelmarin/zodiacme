const Navbar = () => {
    return ( 
      <nav className="navbar">
        <h1>Zodiac Me</h1>
        <div className="links">
            <a href="/" style={{
                color: "white",
                backgroundColor: '#4435c4',
                borderRadius: '10px'
            }}>Home </a>
            <a href="/create" style={{
                color: "white",
                backgroundColor: '#4435c4',
                borderRadius: '10px'
            }}> New</a>

        </div>
      </nav>  
     );
}
 
export default Navbar;