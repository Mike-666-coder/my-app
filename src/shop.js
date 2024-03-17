import React from "react";
import myImage from './image/images (1).jpeg';

const Shop = () => {
    return (
        <div>
             <section className="shop">
    <img src={myImage}/>
    <div className="info">
    <h2>新開幕！</h2>
    <p>美好午後時光，從一口麵包開始，
       即日起來店消費加 LINE 好友可獲折價卷！</p>
       </div>
    </section>
        </div>
    )
}

export default Shop;