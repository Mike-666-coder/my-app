import React from "react";
import myImage from './my-app/public/image/bread-eggs-and-wheat.jpg';

const news = () => {
        return(
            <div>
              <section class="news">
                <img src = {/my-app/public/myImage/bread-eggs-and-wheat.jpg}/>
                <h2>最實在的麵包！</h2>
                <p>用最單純的食材，做最好的味道</p>
                <p><a href="#">瞭解更多</a></p>
              </section>
            </div>
        )
    }

    export default news;