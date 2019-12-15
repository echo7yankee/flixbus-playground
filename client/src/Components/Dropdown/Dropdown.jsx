import React from 'react';

//style
import style from './dropdown.module.css';
import { DropdownItem } from './DropdownItem';

export const Dropdown = ({ handleCount, place }) => {

    //dropdown data
    const adultTitle = 'Adults';
    const adultInfo = '15 years +';
    const childrenTitle = 'Children';
    const childrenInfo = '0 - 14 years';
    const bicycleTitle = 'Bicycles';
    const bicycleInfo = 'Electronic bicycles are not allowed in the bus';

    return (
        <div className={style.dropdown}>
            <DropdownItem
                count={place.adults}
                increaseCount={() => handleCount(adultTitle, true)}
                decreaseCount={() => handleCount(adultTitle, false)}
                title={adultTitle}
                info={adultInfo} />
            <DropdownItem
                count={place.children}
                increaseCount={() => handleCount(childrenTitle, true)}
                decreaseCount={() => handleCount(childrenTitle, false)}
                title={childrenTitle}
                info={childrenInfo} />
            <DropdownItem
                count={place.bicycle}
                increaseCount={() => handleCount(bicycleTitle, true)}
                decreaseCount={() => handleCount(bicycleTitle, false)}
                title={bicycleTitle}
                info={bicycleInfo} />
        </div>
    )
}
