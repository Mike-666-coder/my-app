import React, {useState} from "react";
import NavBar from "./navBar";

const Header = () => {
    const [aaa,setAaa] = useState(true);
    const bbb = () => {setAaa(!aaa)};
    return(
        <header>
            <button onClick={bbb} class = "menu">☰</button>
            {aaa && (<div>
      <nav>
        <ul>
          <li>
            <a href="#">最新消息</a>
          </li>
          <li>
            <a href="#">關於我們</a>
          </li>
          <li>
            <a href="#">門市據點</a>
          </li>
          <li>
            <a href="#">會員專區</a>
          </li>
        </ul>
      </nav>
    </div>) }
            <h1>Mike烘焙</h1>
            <NavBar/>
        </header>
    )
}

export default Header;