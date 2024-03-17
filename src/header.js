import React, { useEffect, useState } from "react";
import NavBar from "./navBar";

const Header = () => {
  const [aaa, setAaa] = useState(false);
  const bbb = () => {
    setAaa(!aaa);
  };
  const event = () => {
    if(window.innerWidth > 768){
      setAaa(false);
    }
  }
  useEffect(() => {
    window.addEventListener('resize',event)
    return () => {window.removeEventListener('resize',event)}
  },[]);
  return (
    <header>
      <button onClick={bbb} className="menu">
        ☰
      </button>
      <h1>Mike烘焙</h1>
      <NavBar />
      { aaa && (
        <div style={{position:"absolute",top:"80px",width:"100%",backgroundColor:"white",textAlign:"center"}}>
          <div>
            <a style={{color:"black"}} href="#">最新消息</a>
          </div>
          <div>
            <a style={{color:"black"}} href="#">關於我們</a>
          </div>
          <div>
            <a style={{color:"black"}} href="#">門市據點</a>
          </div>
          <div>
            <a style={{color:"black"}} href="#">會員專區</a>
          </div>
        </div>
      )}
      
    </header>
  );
};

export default Header;
