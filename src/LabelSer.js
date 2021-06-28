import React from 'react';

import {XYPlot, XAxis, YAxis, MarkSeries, LabelSeries} from 'react-vis';

export default class LabelSer extends React.Component {


    render() {
        const data = [
            {
                x: 0,
                y: 7,
                label: 'Milano',
                size: 30,
                style: {fontSize: 20},
                rotation: 45
            },
            {x: 6, y: 4, label: 'Venice', size: 10},
            {x: 5, y: 20, label: 'Bolzano', size: 1},
            {x: 3.5, y: 7, label: 'Verona', size: 12, rotation: 45},
            {x: 1, y: 11, label: 'Bergamo', size: 4},
            {
                x: 6,
                y: 20,
                label: '',
                size: 1,
                style: {fontSize: 20},
                rotation: 45,
            }
        ];

        return (
            <div>

                <XYPlot yDomain={[-1, 22]} xDomain={[-1, 7]} width={450} height={300}>
                    {/*<XAxis />*/}
                    {/*<YAxis />*/}
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