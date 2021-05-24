import React from 'react';
import PropTypes from 'prop-types';

import DiscreteColorLegendItem from './discrete-color-legend-item';

import {getCombinedClassName} from '../utils/styling-utils';

function DiscreteColorLegend({
                                 className,
                                 colors,
                                 height,
                                 items,
                                 onItemClick,
                                 onItemMouseEnter,
                                 onItemMouseLeave,
                                 orientation,
                                 style,
                                 width
                             }) {
    return (
        <div
            className={getCombinedClassName("rv-discrete-color-legend", orientation, className)}
            style={{width, height, ...style}}
        >
            {items.map((item, i) => (
                <DiscreteColorLegendItem
                    title={item.title ? item.title : item}
                    color={item.color ? item.color : colors[i % colors.length]}
                    strokeDasharray={item.strokeDasharray}
                    strokeStyle={item.strokeStyle}
                    strokeWidth={item.strokeWidth}
                    disabled={Boolean(item.disabled)}
                    orientation={orientation}
                    key={i}
                    onClick={onItemClick ? e => onItemClick(item, i, e) : null}
                    onMouseEnter={
                        onItemMouseEnter ? e => onItemMouseEnter(item, i, e) : null
                    }
                    onMouseLeave={
                        onItemMouseEnter ? e => onItemMouseLeave(item, i, e) : null
                    }
                />
            ))}
        </div>
    );
}

DiscreteColorLegend.displayName = 'DiscreteColorLegendItem';
DiscreteColorLegend.propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
                color: PropTypes.string,
                disabled: PropTypes.bool
            }),
            PropTypes.string.isRequired,
            PropTypes.element
        ])
    ).isRequired,
    onItemClick: PropTypes.func,
    onItemMouseEnter: PropTypes.func,
    onItemMouseLeave: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number,
    orientation: PropTypes.oneOf(['vertical', 'horizontal'])
};

DiscreteColorLegend.defaultProps = {
    className: '',

    orientation: 'vertical'
};

export default DiscreteColorLegend;