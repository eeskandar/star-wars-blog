import React from "react"
import PropTypes from "prop-types"

export const AdditionalInfo = (props)=> {
    return (
        <div>
            <h4 className="text-danger">{props.name}</h4>
            <div className="text-center">{props.data}</div>
        </div>
    )
};