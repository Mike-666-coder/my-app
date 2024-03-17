import React, { useState } from "react";

const NewsLetter = () =>{
  const [email,setEmail] = useState("");
  const submit = () => {
    if (email == "") {
      alert("請輸入您的Email!");
    }else {
      alert("感謝您的回覆");
    }
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  }
  return (
    <div>
     <section className="newsletter">
       <p>歡迎訂閱Mike烘焙電子報，可不定期收到限定優惠喔！</p>
       <form>
         <input onChange={inputEmail} type="email" placeholder="請輸入您的 Email" />
         <button type="button" onClick={submit}>送出</button>
       </form>
     </section>
    </div> 
  )
}

export default NewsLetter;