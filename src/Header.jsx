const Header = (props) => {
    return(
        <header>
            <h1>{props.name}</h1>
            <div className="navbar">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ANIMALS</a></li>
                    <li><a href="#">BIRDS</a></li>
                    
                    
                </ul>

            </div >
            <div className="search-bar">
       
      
      </div>

        </header>
    )
}
export default Header; 