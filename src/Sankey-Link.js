import React from 'react';

import {Sankey} from 'react-vis';
import Hint from './plot/hint';

const BLURRED_LINK_OPACITY = 0.3;
const FOCUSED_LINK_OPACITY = 0.6;

const nodes = [{name: 'Milan'}, {name: 'Verona'}, {name: 'Venice'},{name: 'Val di Fiemme'},{name:'Valtellina'}, {name: "Cortina d'Ampezzo"}];
const links = [
    {source: 0, target: 1, value: 25},
    {source: 0, target: 2, value: 20},
    {source: 1, target: 2, value: 20},
    {source: 0, target: 4, value: 10},
    {source: 1, target: 3, value: 5},
    {source: 3, target: 5, value: 15},
    {source: 2, target: 5, value: 40},
    {source: 4, target: 3, value: 10},
];

export default class LinkHintSankeyExample extends React.Component {
    state = {
        activeLink: null
    };

    _renderHint() {
        const {activeLink} = this.state;

        // calculate center x,y position of link for positioning of hint
        const x =
            activeLink.source.x1 + (activeLink.target.x0 - activeLink.source.x1) / 2;
        const y = activeLink.y0 - (activeLink.y0 - activeLink.y1) / 2;

        const hintValue = {
            [`${activeLink.source.name} ➞ ${
                activeLink.target.name
            }`]: activeLink.value
        };

        return <Hint x={x} y={y} value={hintValue} />;
    }

    render() {
        const {activeLink} = this.state;

        // Note: d3.sankey currently mutates the `nodes` and `links` arrays, which doesn't play nice
        // with React's single-direction data flow. We create a copy of each before we pass to the sankey
        // component, just to be sure.
        return (
            <div>
                <Sankey
                    nodes={nodes.map(d => ({...d}))}
                    links={links.map((d, i) => ({
                        ...d,
                        opacity:
                            activeLink && i === activeLink.index
                                ? FOCUSED_LINK_OPACITY
                                : BLURRED_LINK_OPACITY
                    }))}
                    width={400}
                    height={500}
                    // do not use voronoi in combination with link mouse over
                    hasVoronoi={false}
                    onLinkMouseOver={node => this.setState({activeLink: node})}
                    onLinkMouseOut={() => this.setState({activeLink: null})}
                >
                    {activeLink && this._renderHint()}
                </Sankey>
            </div>
        );
    }
}