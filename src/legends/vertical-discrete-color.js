import React from 'react';
import DiscreteColorLegend from 'discrete-color-legend';

const ITEMS = [
    'Options',
    'Buttons'
];

export default function DiscreteColorExample() {
    return <DiscreteColorLegend height={200} width={300} items={ITEMS} />;
}