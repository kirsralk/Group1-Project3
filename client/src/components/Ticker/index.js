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
        });
    },[]);

    return (
        <>
            {market.map((value, index) => {
                return (

                <Table responsive size="sm">
                    <tr>
                        <td>
                            {value.n}
                        </td>
                        <td>
                            {value.s}
                        </td>
                        <td>
                            ${value.p} USD
                        </td>
                        <td>
                            % Change 24h: {value.pc}
                        </td>
                        <td>
                            Market Cap: {value.mc}
                        </td>
                        <td>
                            24h Volume: {value.v}
                        </td>
                    </tr>
                </Table>

                );
            })}
        </>
    );
}

export default Ticker;
