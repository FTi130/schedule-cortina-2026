import React from 'react';

import {RadialChart} from 'react-vis';

export default function RadialChartS(props) {
    return (
        <RadialChart
            colorType={'literal'}
            colorDomain={[0, 100]}
            colorRange={[0, 10]}
            margin={{top: 500}}
            getLabel={d => d.name}
            data={[
                {angle: 5, color: '#89DAC1', name: 'Hydrogen', opacity: 0.1},
                {angle: 2, color: '#F6D18A', name: 'is'},
                {angle: 5, color: '#1E96BE', name: 'usually'},
                {angle: 3, color: '#DA70BF', name: 'nice'},
                {angle: 5, color: '#F6D18A', name: '?'}
            ]}
            labelsRadiusMultiplier={0.9}
            labelsStyle={{fontSize: 16, fill: '#333',font: 'Neue Helvetica', fontWeight: 'bold'}}
            showLabels
            style={{stroke: '#fff', strokeWidth: 7}}
            width={400}
            height={300}
        />
    );
}