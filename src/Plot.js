import React, { Component } from 'react';
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines} from 'react-vis';
// import './node_modules/react-vis/dist/style.css'; // careful with the path


class Plot extends Component {
    render() {
        const data = [
            {x: 0, y: 200},
            {x: 5, y: 230},
            {x: 10, y: 210},
            {x: 15, y: 235},
            {x: 20, y: 300},
            {x: 22, y: 330},
            {x: 25, y: 380},
            {x: 30, y: 450},
            {x: 35, y: 500}
        ];
        return (
            <div className="App">
                <XYPlot height={150} width={450}

                >
                    <XAxis  title="kilometers" />
                    <YAxis  title="meters"/>
                    <LineSeries
                        data={data}
                        style={{strokeLinejoin: "round"}}
                        color={"orange"}
                        strokeStyle={"dashed"}
                    />
                </XYPlot>
            </div>
        );
    }
}

export default Plot;