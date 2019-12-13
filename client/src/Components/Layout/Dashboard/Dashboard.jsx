import React from 'react'

//style
import style from './dashboard.module.css';

//Components
import { SearchForm } from '../../SearchForm/SearchForm'

export const Dashboard = () => {
    return (
        <div>
            <div className={style.formContainer}>
                <SearchForm />
            </div>
        </div>
    )
}
