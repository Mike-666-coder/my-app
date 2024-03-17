import React, {useState} from "react";
import NavBar from "./navBar";

const Header = () => {
    const [aaa,setAaa] = useState(true);
    const bbb = () => {setAaa(!aaa)};
    return(
        <header>
            <button onClick={bbb} class = "menu">☰</button>
            {aaa && (<h1>Mike烘焙</h1>) }
            <NavBar/>
        </header>
    )
}

export default Header;