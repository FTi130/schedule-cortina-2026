import React from 'react';

import DiscreteColorLegend from './discrete-color-legend';
import GradientDefs from './gradient-defs';

const ITEMS = [
    {title: 'H2', color: "yellow"},
    {title: 'Parking', color: "blue"},
    {title: 'Arrivals', color: '#5aa7de'},
    {title: 'Bus', color: "#45aeb1"},
];

    export default function DiscreteColorExample() {
    return (
        <div>
            <svg height={0} width={0}>
                <GradientDefs>
                    <pattern id="stripes" width="4" height="4" patternUnits="userSpaceOnUse">
                        <path d="M 0, 0 l 5, 5" stroke="#45aeb1" strokeLinecap="square" />
                    </pattern>
                    <pattern id="circles" width="3" height="3" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="0.8" fill="magenta" />
                    </pattern>

                </GradientDefs>
            </svg>
            <DiscreteColorLegend orientation="horizontal" width={500} items={ITEMS} />
        </div>
    );
}