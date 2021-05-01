import React, { useEffect, useState } from "react";
// import "./style.css";
import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from "react-fast-marquee";

function ScrollMarquee() {
    const [market, setMarket] = useState([]);

    useEffect(() => {
        API.getMarket().then((res) => {
            //otherwise useeffect gets called infinitely for some reason
            if (market.length === 0) setMarket(res.data.data);
        });
    },[]);

    return (
        <>
            <Marquee pauseOnHover>
            {market.map((value, index) => {
                    
                            {/* {forEach({value.s} ${value.p})} */} 
                
            })}
            </Marquee>
        </>
    );
}

export default ScrollMarquee;
