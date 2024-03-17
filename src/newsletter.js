import React from "react";

const NewsLetter = () =>{
  
  return(
       <div>
        <section className="newsletter">
        <p>歡迎訂閱Mike烘焙電子報，可不定期收到限定優惠喔！</p>
        <form>
        <input type="email" placeholder="請輸入您的 Email" required=""/>
          <button type="submit">送出</button>
        </form>
    </section>
       </div> 
    )
}

export default NewsLetter;