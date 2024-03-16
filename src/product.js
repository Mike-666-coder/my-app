import React from "react";
import IMG_1506 from './image/IMG_1506.PNG';
import IMG_1507 from './image/IMG_1507.PNG';
import IMG_1509 from './image/IMG_1509.PNG';

const product = () => {
    return(
        <div>
        <section className="product">
          <img src={IMG_1506} alt="頂級焦糖可頌" />
          <img src={IMG_1507} alt="鮮奶吐司" />
          <img src={IMG_1509} alt="皇家法式長棍麵包" />
            <h3>頂級焦糖可頌</h3>
            <p>外皮金黃酥脆，內質鬆軟{'\n'}頂級焦糖勾勒味覺享受</p>
            <h3>鮮奶吐司</h3>
            <p>口感蓬鬆，奶香四溢{'\n'}品嘗簡單而純粹的美味</p>
            <h3>皇家法式長棍麵包</h3>
            <p>道地法式手感{'\n'}完美呈現異國風味</p>
        </section>
        </div>
    )
}

export default product;