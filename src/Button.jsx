import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) => {
    return (
        <button className='bg-blue-200'>{children}</button>
    )
}
Button.propTypes = {
    checkVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger,
    }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)
        if(count > 1) {
            return new Error('Only one variation can be used at a time')
        }
    }
}
