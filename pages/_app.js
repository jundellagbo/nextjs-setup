import React from 'react'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@assets/style.scss'
import 'font-awesome/css/font-awesome.min.css';

import {Provider} from "react-redux";
import { reduxStore } from '@redux/store'
import withRedux from "next-redux-wrapper";
import { persistStore } from "redux-persist";

class EasycityApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {pageProps}
    }
    render() {
        const { Component, pageProps, store } = this.props
        persistStore(store)
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withRedux(reduxStore)(EasycityApp)