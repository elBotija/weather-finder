import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = (props) => {
    return(
        <div className='content'>
            <img className="logo" src='https://www.edrans.com/themes/custom/edrans_theme/images/marca-negro.png' alt='Edrans'/>
            <h1 className="title">
                {props.title}
            </h1>
            <p className="description">
                {props.description}
            </p>
        </div>
    )
}

Sidebar.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Sidebar
