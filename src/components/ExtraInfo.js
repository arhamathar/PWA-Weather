import React from 'react';

function ExtraInfo(props) {
    return (
        <div className="extra-info__heading">
            <span className="extra-info__name">{props.title}</span>
            <span className="extra-info__value">{props.value} {props.unit}</span>
        </div>
    )
}

export default ExtraInfo;
