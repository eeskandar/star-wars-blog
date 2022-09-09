import React from "react"
import PropTypes from "prop-types"

export const AdditionalInfo = (props)=> {
    return (
        <div>
            <h4 className="text-danger">{props.name}</h4>
            <div className="text-center text-danger">{props.data}</div>
        </div>
    )
    
    AdditionalInfo.propTypes = {
        name: PropTypes.text,
        data: PropTypes.text
    }
};