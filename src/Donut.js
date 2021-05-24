import React, {Component} from 'react';

import {RadialChart, Hint} from 'react-vis';

export default class Donut extends Component {

    render() {
        return (
            <RadialChart
                className={'donut-chart-example'}
                innerRadius={110}
                radius={140}
                getAngle={d => d.theta}

                getLabel={d => d.country}

                data={[
                    {theta: 1, country: 'EU'},
                    {theta: 5, country: 'Far Away'},
                    {theta: 2, country: 'Italy'},
                    {theta: 3, country: 'Neighbors'}
                ]}
                // onValueMouseOver={v => this.setState({value: v})}
                // onSeriesMouseOut={v => this.setState({value: false})}
                width={300}
                height={300}
                padAngle={0.04}

                labelsRadiusMultiplier={0.75}
                labelsStyle={{fontSize: 14, fill: '#333',font: 'Neue Helvetica'}}
                showLabels
            >

            </RadialChart>
        );
    }
}