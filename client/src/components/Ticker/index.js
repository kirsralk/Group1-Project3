import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                var percent = value.pc.toFixed(2);

                return (
                    
                <Table hover variant="dark" responsive size="sm" key={index}>
                    <tr>
                        <td class="mini">
                            <p class="center"><img className="coin" src= {coinURL} alt="" /> &nbsp;</p>
                        </td>
                        <td class="quarter">
                            {value.n}
                        </td>
                        <td class="fifth">
                            {value.s}
                        </td>
                        <td class="quarter">
                            ${USD} 
                            <br />USD
                        </td>
                        <td class="mini small-pad-right" style={{color: value.pc < 0 ? "red" : "green"}}>
                            <FontAwesomeIcon icon="angle-double-up" style={{visibility: value.pc < 0 ? "hidden" : "visible"}}/> &nbsp;                         
                        </td>
                        <td class="small-pad-right" style={{color: value.pc < 0 ? "red" : "green"}}>
                            {percent}% 
                        </td>
                        <td class="mini small-pad-left"style={{color: value.pc < 0 ? "red" : "green"}}>
                            &nbsp;<FontAwesomeIcon icon="angle-double-down" style={{visibility: value.pc < 0 ? "visible" : "hidden"}}/>
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
