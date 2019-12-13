import React from 'react';

//style
import style from './dropdown.module.css';
import { DropdownItem } from './DropdownItem';

export const Dropdown = ({ handleIncreaseCount, place }) => {

    //dropdown data
    const adultTitle = 'Adults';
    const adultInfo = '15 years +';
    const childrenTitle = 'Children';
    const childrenInfo = '0 - 14 years';
    const bicycleTitle = 'Bicycles';
    const bicycleInfo = 'Electronic bicycles are not allowed in the bus';

    return (
        <div className={style.dropdown}>
            <DropdownItem count={place.adults} onClick={() => handleIncreaseCount(adultTitle)} title={adultTitle} info={adultInfo} />
            <DropdownItem count={place.children} onClick={() => handleIncreaseCount(childrenTitle)} title={childrenTitle} info={childrenInfo} />
            <DropdownItem count={place.bicycle} onClick={() => handleIncreaseCount(bicycleTitle)} title={bicycleTitle} info={bicycleInfo} />
        </div>
    )
}
