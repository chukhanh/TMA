import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import { getAccount } from '../../services/api';
import style from './productScreen.module.scss';

export default class ProductScreen extends Component {
    render() {
        return (
            <div className={style.ProductScreen}>
                <Header account={getAccount}/>
            </div>
        )
    }
}
