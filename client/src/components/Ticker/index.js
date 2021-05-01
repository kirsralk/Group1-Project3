import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function Ticker() {
    const [market, setMarket] = useState([]);

    useEffect(() => {
        API.getMarket().then((res) => {
            //otherwise useeffect gets called infinitely for some reason
            if (market.length === 0) setMarket(res.data.data);
            console.log(res.data.data);
        });
    },[]);


    
    return (
        <>
            {market.map((value, index) => {
                var lowerName = value.n.replace(/\s+/g, '-').toLowerCase();
                var lowerIcon = value.s.toLowerCase();
                var coinURL = "https://cryptologos.cc/logos/" + lowerName + "-" + lowerIcon + "-logo.png?v=010";
                var USD = value.p.toFixed(2);
                
                return (
                <Table responsive size="sm">
                    <tr>
                        <td>
                            <img class="coin" src= {coinURL} /> &nbsp;
                            {value.n}
                        </td>
                        <td>
                            {value.s}
                        </td>
                        <td>
                            ${USD} USD
                        </td>
                        <td>
                            % Change 24h: {value.pc}
                        </td>
                        {/* <td>
                            Market Cap: {value.mc}
                        </td>
                        <td>
                            24h Volume: {value.v}
                        </td> */}
                    </tr>
                </Table>

                );
            })}
        </>
    );
}

export default Ticker;
