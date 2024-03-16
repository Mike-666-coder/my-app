import { useState } from "react";

const AAA = () => {
    const [aa, setAa] = useState("fuck");
    const bbb = () => {
        setAa("ggg");
    }
    var gg = 5;
    gg = 7;
    var gg = "dfdf";
    return (
        <div>
            <p>{gg}</p>
            <button onClick={bbb}>bbb</button>
        </div>
    );
}

export default AAA;

import { navBar } from "react";

const tittle = () => {
    const [aaa,setAaa] = useState("");
    return (
        <div>
            <p>{Mike烘焙}</p>
        </div>
    )
}