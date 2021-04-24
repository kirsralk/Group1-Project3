import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";

function ApiTestComponent() {
    const [market, setMarket] = useState([]);

    useEffect(() => {
        API.getMarket().then((res) => {
            //otherwise useeffect gets called infinitly for some reason
            if (market.length === 0) setMarket(res.data.data);
        });
    });

    return (
        <>
            {market.map((value, index) => {
                return (
                    <p>
                        {value.n} || {value.s} || ${value.p} USD || % Change 24h : {value.pc} || Market Cap : {value.mc} || 24h Volume : {value.v}
                    </p>
                );
            })}
        </>
    );
}

export default ApiTestComponent;
