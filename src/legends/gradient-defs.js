import React from 'react';
import PropTypes from 'prop-types';

import {getCombinedClassName} from '../utils/styling-utils';

const predefinedClassName = 'rv-gradient-defs';

function GradientDefs(props) {
    const {className} = props;
    return (
        <defs className={getCombinedClassName(predefinedClassName, className)}>
            {props.children}
        </defs>
    );
}

GradientDefs.displayName = 'GradientDefs';
GradientDefs.requiresSVG = true;
GradientDefs.propTypes = {
    className: PropTypes.string
};
GradientDefs.defaultProps = {
    className: ''
};

export default GradientDefs;