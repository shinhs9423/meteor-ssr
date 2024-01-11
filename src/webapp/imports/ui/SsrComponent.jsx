/**
 * 제작 : HanSeungHyeon
 * 날짜 : 1/11/24
 * 내용 :
 */

import React from 'react';
import PropTypes from 'prop-types';

function SsrComponent({ssrData}) {
    console.log("ssrData: ", ssrData);
    return (
        <div>{ssrData}</div>
    );
}

SsrComponent.propTypes = {};
SsrComponent.defaultProps = {};

export default SsrComponent;