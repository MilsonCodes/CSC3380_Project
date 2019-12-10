import React from "react";
import App from "next/app";
import Layout from "../components/Layout/index";
import { Provider } from "react-redux";
import store from "../store";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;
