import React from 'react';

import PropTypes from 'prop-types';

const STROKE_STYLES = {
    dashed: '6, 2',
    solid: null
};

function DiscreteColorLegendItem({
                                     color,
                                     strokeDasharray,
                                     strokeStyle,
                                     strokeWidth,
                                     disabled,
                                     onClick,
                                     orientation,
                                     onMouseEnter,
                                     onMouseLeave,
                                     title
                                 }) {
    let className = `rv-discrete-color-legend-item ${orientation}`;
    if (disabled) {
        className += ' disabled';
    }
    if (onClick) {
        className += ' clickable';
    }
    const strokeDasharrayStyle = STROKE_STYLES[strokeStyle] || strokeDasharray;
    return (
        <div {...{className, onClick, onMouseEnter, onMouseLeave}}>
            <svg className="rv-discrete-color-legend-item__color" height={2} width={14}>
                <path
                    className="rv-discrete-color-legend-item__color__path"
                    d="M 0, 1 L 14, 1"
                    style={{
                        ...(strokeWidth ? {strokeWidth} : {}),
                        ...(strokeDasharrayStyle ? {strokeDasharray: strokeDasharrayStyle} : {}),
                        stroke: disabled ? null : color
                    }}

                />
            </svg>
            <span className="rv-discrete-color-legend-item__title">{title}</span>
        </div>
    );
}

DiscreteColorLegendItem.propTypes = {
    color: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
    strokeDasharray: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeStyle: PropTypes.oneOf(Object.keys(STROKE_STYLES))
};
DiscreteColorLegendItem.defaultProps = {
    disabled: false,
    strokeStyle: 'solid'
};
DiscreteColorLegendItem.displayName = 'DiscreteColorLegendItem';

export default DiscreteColorLegendItem;