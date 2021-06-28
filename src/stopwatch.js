import React, {useState, useEffect} from 'react';
import DisplayComponent from './DisplayWatch';
import BtnComponent from './BtnComponent';

import './App.css';

let start;

function Stopwatch() {

    const [time, setTime] = useState({ms:0, s:5, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // Not started = 0
    // started = 1
    // stopped = 2


    const start = () => { // const
        run();
        setStatus(1);
        setInterv(setInterval(run, 810));
    };

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 22){
            updatedM++;
            updatedS = 5;
            reset()
        }
        if(updatedMs === 60){ // 100
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:5, m:0, h:0})
    };

    const resume = () => start();


    useEffect(() => start(),[]);

    return (
        <div className="main-section">
            <div className="clock-holder">
                <div className="stopwatch">
                    <DisplayComponent time={time} status={status} onLoad={() => start()}/>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;