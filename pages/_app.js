import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import rootReducer from '../src/reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: rootReducer,
});

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {};
		return {
			pageProps,
		};
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default MyApp;
