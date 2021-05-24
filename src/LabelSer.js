import React from 'react';

import {XYPlot, XAxis, YAxis, MarkSeries, LabelSeries} from 'react-vis';

export default class LabelSer extends React.Component {


    render() {
        const data = [
            {
                x: 3,
                y: 7,
                label: 'Milano',
                size: 30,
                style: {fontSize: 20},
                rotation: 45
            },
            {x: 2, y: 4, label: 'Venice', size: 10},
            {x: 1, y: 20, label: 'Bolzano', size: 1},
            {x: 4, y: 12, label: 'Verona', size: 12, rotation: 45},
            {x: 1, y: 14, label: 'Bergamo', size: 4}
        ];

        return (
            <div>

                <XYPlot yDomain={[-1, 22]} xDomain={[-1, 5]} width={300} height={300}>
                    <XAxis />
                    <YAxis />
                    <MarkSeries
                        className="mark-series-example"
                        strokeWidth={5}
                        sizeRange={[5, 15]}
                        data={data}
                    />
                    <LabelSeries animation allowOffsetToBeReversed data={data} />
                </XYPlot>
            </div>
        );
    }
}