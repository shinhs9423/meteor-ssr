/**
 * 제작 : HanSeungHyeon
 * 날짜 : 1/9/24
 * 내용 :
 */

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {useLocation} from "react-router-dom";

const Clock = () => {
    const location = useLocation();
    const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h1>Current Time</h1>
            <h2>{location.pathname}</h2>
            <p>{currentTime}</p>
        </div>
    );
};

export default Clock;
