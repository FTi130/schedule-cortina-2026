import React, {useState, useEffect} from 'react';

import {XYPlot, ArcSeries} from 'react-vis';

// import {EXTENDED_DISCRETE_COLOR_RANGE} from 'react-vis/theme';

const PI = Math.PI;

function getSeconds() {
    return Math.floor(new Date().getTime() / 1000);
}

export default function ClockExample() {
    const [time, setTime] = useState(getSeconds());
    useEffect(() => {
        const handle = setInterval(() => setTime(getSeconds()), 100);
        return () => clearInterval(handle);
    }, []);
    // console.log(time);
    const seconds = time % 60;
    const minutes = (time / 60) % 60;
    // const hours = (time / (60 * 24)) % 24;


    return (
        <XYPlot
            xDomain={[-3, 3]}
            yDomain={[-3, 3]}
            width={1450}
            getAngle={d => d.time}
            getAngle0={() => 0}
            height={300}
        >
            <ArcSeries
                onSeriesMouseOver={(event)=>{
                    document.body.style.cursor = "pointer";
                }}
                onSeriesClick={(event)=>{
                    // does something on click
                    window.open('https://google.com');
                    // you can access the value of the event
                }}

                animation={{
                    damping: 9,
                    stiffness: 300
                }}
                radiusDomain={[0, 3]}
                data={[

                    {time: (seconds / 60) * 2 * PI, radius0: 1, radius: 1.5, color: 0},

                    {
                        time: (minutes / 60) * 2 * PI,
                        radius0: 1.6,
                        radius: 2.1,
                        color: 1
                    }
                    //,

                    //{time: (hours / 24) * 2 * PI, radius0: 2.2, radius: 2.7, color: 2}
                ]}
                // colorRange={EXTENDED_DISCRETE_COLOR_RANGE}
            />
        </XYPlot>
    );
}

