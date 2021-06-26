import React, { Component } from 'react'
import Header from '../../../components/Header/Header';

import style from './productScreen.module.scss';

export default class ProductScreen extends Component {
    render() {
        return (
            <div className={style.ProductScreen}>
                <Header history={this.props.history} useLocalStorage={this.props.useLocalStorage}/>
                
            </div>
        )
    }
}