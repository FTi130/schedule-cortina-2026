import React from 'react';
import DiscreteColorExample from "./legends/horizontal-discrete-color"


import {
    XYPlot,
    XAxis,
    YAxis,
    ChartLabel,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    LineSeriesCanvas
} from 'react-vis';

let arrayArr = [];
const xarr =[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const yarr =[1599.8, 3178.98, 3723.3400000000006, 5117.8, 9522.640000000001, 14498.779999999999, 20121.2, 17661.54, 23786.720000000005, 19715.84, 17461.55, 20842.06, 10221.03, 15741.39, 23405.67, 11756.97, 13420.31, 14684.519999999999, 19798.46, 11617.1, 2570.3, 719.0, 719.0, 719.0, 719.0, 719.0, 719.0, 719.0];
for (let i = 0; i < xarr.length; i++) {
    let newXY = {x: xarr[i],
        y: yarr[i]};

    arrayArr.push(newXY);
}

let arrayDep = [];
const ydep = [1079.0, 1079.0, 1079.0, 1984.3962499999998, 3031.6031, 3897.7400500000003, 6045.876900000001, 9819.7908, 14548.25245, 17442.437299999998, 19644.23635, 20943.013550000003, 19699.821075000003, 18858.020875000002, 16565.405825, 14320.825800000002, 17242.600575, 17599.605025, 14634.158175, 14093.634275, 16029.50905, 15788.170250000001, 10544.27225, 4857.315275, 2054.20265, 1082.2094, 788.552, 726.35075]
for (let i = 0; i < xarr.length; i++) {
    let newXY = {
        x: xarr[i],
        y: ydep[i]
    };
    arrayDep.push(newXY);
}

export default class BaseBarDep extends React.Component {

    render() {
        const {useCanvas} = false;
        const Line = useCanvas ? LineSeriesCanvas : LineSeries;

        return (
            <div>

                <XYPlot
                    width={500}
                    height={500}
                    margin={70}

                >
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis  title="" />
                    <YAxis  title="Visitors"/>
                    <ChartLabel
                        text="Days"

                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.025}
                        yPercent={1.01}
                    />

                    <ChartLabel
                        text=""
                        className="alt-y-label"
                        includeMargin={false}
                        xPercent={0.06}
                        yPercent={0.06}
                        style={{
                            transform: 'rotate(-90)',
                            textAnchor: 'end',
                        }}
                    />
                    <Line
                        className="second-series"
                        curve={'curveMonotoneX'}
                        data={arrayDep}
                        strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
                    />
                </XYPlot>

            </div>
        );
    }
}