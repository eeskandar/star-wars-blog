import React from "react"
import PropTypes from "prop-types"

export const AdditionalInfo = (props)=> {
    return (
        <div>
            <h4 className="text-danger">{props.name}</h4>
            <div className="text-center text-danger fs-5">{props.data}</div>
        </div>
    )
    
};
AdditionalInfo.propTypes = {
    name: PropTypes.string,
    data: PropTypes.string
}