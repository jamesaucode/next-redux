import React from "react";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";

const defaultState = {
    todos: ["lmao"]
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {...state, todos: state.todos.concat(action.payload)};
        default:
            return state;
    }
}

const makeStore = (initialState = defaultState, options) => {
    return createStore(reducer, initialState);
}

class MyApp extends App {
    static async getInitialProps({ Component, ctx}) {
        ctx.store.dispatch({ type: "ADD_ITEM", payload: "LOLLL"});
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const { Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component { ...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withRedux(makeStore)(MyApp);