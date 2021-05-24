import React, {Component} from 'react';

import {RadialChart, Hint} from 'react-vis';

export default class FleetSplit extends Component {

    render() {
        // const {value} = this.state;
        return (
            <RadialChart
                className={'donut-chart-example'}
                innerRadius={110}
                radius={140}
                getAngle={d => d.theta}
                // margin={{left: 500}}

                getLabel={d => d.country}

                data={[
                    {theta: 56, country: 'South 56%'},
                    {theta: 44, country: '44% North'}
                ]}
                // onValueMouseOver={v => this.setState({value: v})}
                // onSeriesMouseOut={v => this.setState({value: false})}
                width={300}
                height={300}
                padAngle={0.04}

                labelsRadiusMultiplier={0.75}
                labelsStyle={{fontSize: 14, fill: 'white',font: 'Neue Helvetica'}}
                showLabels
            >

            </RadialChart>
        );
    }
}