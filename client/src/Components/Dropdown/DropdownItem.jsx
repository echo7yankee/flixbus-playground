import React from 'react';

//style
import style from './dropdown.module.css'

export const DropdownItem = ({ title, info, increaseCount, decreaseCount, count, dropdownMessageLimitCount }) => {
    return (
        <div className={style.dropdownItemContainer}>
            <div className={style.dropdownItem}>
                <div>
                    <h1>
                        {title}
                    </h1>
                    <span>{info}</span>
                </div>
                <div className='dflex'>
                    {count === 0 ? null : <button onClick={decreaseCount}>-</button>}
                    <span>{count}</span>
                    <button onClick={count >= 9 ? null : increaseCount}>+</button>
                </div>
            </div>
            {count >= 9 && <div className='set-center'>
                <p className='warning mb-0'>{dropdownMessageLimitCount}</p>
            </div>}
        </div>
    )
}
