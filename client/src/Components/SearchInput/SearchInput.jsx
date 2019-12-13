import React from 'react'

export const SearchInput = ({ type, name, value, onChange, check, placeholder }) => {
    return (
        <input
            name={name}
            id={type === 'radio' ? check : name}
            type={type}
            value={type === 'radio' ? check : value}
            onChange={onChange}
            placeholder={placeholder}
            checked={type === 'radio' ? value === check : null} />
    )
}
