import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas
} from 'react-vis';

import DiscreteColorExample from "./legends/legendBar";


export default class VerticalBar extends React.Component {
    state = {
        useCanvas: false
    };
    render() {
        const {useCanvas} = this.state;
        const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
        return (
            <div style={{fontSize: 14,textAlign: 'center', fontStyle: 'italic' }}>
                <DiscreteColorExample
                    style={{position: 'absolute', left: '50px', top: '5px'}}
                    orientation="horizontal"
                />
                <XYPlot width={400} height={300} stackBy="y" margin={{left: 120, right: 0, top: 10, bottom: 40}}>

                    <VerticalGridLines />
                    <HorizontalGridLines />

                    <BarSeries data={[{x: 1, y: 25}, {x: 2, y: 25}, {x: 3, y: 25},{x: 4, y: 29}, {x: 5, y: 63}]} />
                    <BarSeries data={[{x: 1, y: 55}, {x: 2, y: 66}, {x: 3, y: 60},{x: 4, y: 59}, {x: 5, y: 1}]} />
                    <BarSeries data={[{x: 1, y: 19}, {x: 2, y: 7}, {x: 3, y: 14},{x: 4, y: 11}, {x: 5, y: 35}]} />
                    <BarSeries data={[{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 1},{x: 4, y: 1}, {x: 5, y: 1}]} />
                    <YAxis title="%"/>
                    <XAxis title="Scenarios"/>
                </XYPlot>
            </div>
        );
    }
}