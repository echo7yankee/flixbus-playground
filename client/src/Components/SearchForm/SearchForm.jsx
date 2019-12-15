import React, { useState } from 'react';

//style
import style from './searchForm.module.css';
import { IoMdPin, IoMdCalendar, IoMdRepeat, IoIosArrowForward } from 'react-icons/io';

//Components
import { SearchInput } from '../SearchInput/SearchInput'
import { Dropdown } from '../Dropdown/Dropdown';
//Constants
import { GO, GOBACK } from '../../Constants/constants';

export const SearchForm = () => {

    const initState = {
        radio: '',
        to: '',
        from: '',
        whenGo: '',
        whenBack: '',
        place: {
            adults: 1,
            children: 0,
            bicycle: 0
        }
    }

    const [reservation, setReservation] = useState(initState);
    const [isReverse, setIsReverse] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    //destructuring
    const { radio, to, from, whenGo, place, whenBack } = reservation;

    const handleChange = e => {
        setReservation({
            ...reservation,
            [e.target.name]: e.target.value
        })
    }

    const toggleReverse = () => {
        setIsReverse(prevState => !prevState);

        if (isReverse) {
            setReservation({
                ...reservation,
                from: reservation.to,
                to: reservation.from
            })
        } else if (!isReverse) {
            setReservation({
                ...reservation,
                to: reservation.from,
                from: reservation.to
            })
        }
    }

    const openDropdown = () => {
        setIsDropdown(true);
    }

    const closeDropdown = () => {
        setIsDropdown(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(reservation);
    }

    const handleCount = (type, isIncrease) => {
        //INCREASES THE COUNT
        if (type === 'Adults' && isIncrease === true) {
            setReservation({
                ...reservation,
                place: {
                    ...reservation.place,
                    adults: place.adults + 1
                }
            })
        } else if (type === 'Children' && isIncrease === true) {
            setReservation({
                ...reservation,
                place: {
                    ...reservation.place,
                    children: place.children + 1
                }
            })
        } else if (type === 'Bicycles' && isIncrease === true) {
            setReservation({
                ...reservation,
                place: {
                    ...reservation.place,
                    bicycle: place.bicycle + 1
                }
            })
        }

        //DEACREASES THE COUNT
        if (type === 'Adults' && isIncrease === false) {
            setReservation({
                ...reservation,
                place: {
                    ...reservation.place,
                    adults: place.adults - 1,
                }
            })
        } else if (type === 'Children' && isIncrease === false) {
            setReservation({
                ...reservation,
                place: {
                    ...reservation.place,
                    children: place.children - 1
                }
            })
        } else if (type === 'Bicycles' && isIncrease === false) {
            setReservation({
                ...reservation,
                place: {
                    ...reservation.place,
                    bicycle: place.bicycle - 1
                }
            })
        }
    }


    //customize date 
    const rawDate = new Date().toDateString();
    const date = rawDate.split(" ")[2];
    const day = rawDate.split(" ")[0];
    const month = rawDate.split(" ")[1];
    const customizedDate = `${day} ${date} ${month}.`;

    //customize place
    const customizedPlace = `${place.adults} ${place.adults > 1 ? 'adults' : 'adult'}, ${place.children}  ${place.children > 1 ? 'children' : 'child'},  ${place.bicycle} ${place.bicycle > 1 ? 'bicycles' : 'bicycle'}`

    console.log(reservation)

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className='dflex'>
                <div className={style.inputRadioControl}>
                    <SearchInput check={GO} name='radio' type='radio' value={radio} onChange={handleChange} placeholder='' />
                    <span className={style.checkmark}></span>
                    <label htmlFor={GO}>Go</label>
                </div>
                <div className={style.inputRadioControl}>
                    <SearchInput check={GOBACK} name='radio' type='radio' value={radio} onChange={handleChange} placeholder='' />
                    <span className={style.checkmark}></span>
                    <label htmlFor={GOBACK}>Go-Back</label>
                </div>
            </div>
            <div className='dflex space-between mt-2'>
                <div className={`dflex ${style.inputControlContainer}`}>
                    <div className={style.inputControl}>
                        <label className={style.formLabel} htmlFor='from'>From</label>
                        <div>
                            <IoMdPin className={style.formIcons} />
                            <SearchInput name='from' type='text' value={from} onChange={handleChange} placeholder='City from...' />
                        </div>
                    </div>
                    <IoMdRepeat className={isReverse ? 'rotate-180' : 'rotate--180'} onClick={toggleReverse} />
                    <div className={style.inputControl}>
                        <label className={style.formLabel} htmlFor='to'>To</label>
                        <div>
                            <IoMdPin className={style.formIcons} />
                            <SearchInput name='to' type='text' value={to} onChange={handleChange} placeholder='City to...' />
                        </div>
                    </div>
                </div>
                <div className={`${style.inputControl} ml-1`}>
                    <label className={style.formLabel} htmlFor='whenGo'>Go</label>
                    <div>
                        <IoMdCalendar className={style.formIcons} />
                        <SearchInput name='whenGo' type='text' value={whenGo} onChange={handleChange} placeholder={customizedDate} />
                    </div>
                </div>
                <div className={`${style.inputControl} pos-relative ml-1`}>
                    <label className={style.formLabel} htmlFor="">Passangers/Bicycles</label>
                    <div className={style.formPlace} onClick={openDropdown}>
                        {customizedPlace}
                        <IoIosArrowForward className={isDropdown ? 'rotate-90' : 'rotate-0'} />
                    </div>
                    {isDropdown && <Dropdown
                        place={reservation.place}
                        handleCount={handleCount}
                        closeDropdown={closeDropdown} />}
                </div>
                <div className={`${style.inputControl} ml-1`}>
                    <button>Look</button>
                </div>
            </div>
        </form>
    )
}
