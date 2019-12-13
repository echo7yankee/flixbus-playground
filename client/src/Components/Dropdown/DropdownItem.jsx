import React from 'react';

//style
import style from './dropdown.module.css'

export const DropdownItem = ({ title, info, onClick, count }) => {
    return (
        <div className={style.dropdownItem}>
            <div>
                <h1>
                    {title}
                </h1>
                <span>{info}</span>
            </div>
            <div className='dflex'>
                <button>-</button>
                <span>{count}</span>
                <button onClick={onClick}>+</button>
            </div>
        </div>
    )
}
