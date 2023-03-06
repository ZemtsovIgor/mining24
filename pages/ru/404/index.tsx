import React, {Component} from "react";
import MainLayout from "../../../components/Layouts/MainLayout/MainLayout";
import Head from "next/head";
import {GridStyle} from "../../../styles/grid";
import {GlobalStyle} from "../../../styles/global";
import Header from "../../../components/Header/Header";

const data:any = {
  settings: {
    title: '',
    description: 'Page not found',
    keywords: null,
    bgImage: '',
    name: 'Page not found',
  }
}

export default class Services extends Component {
  render() {
    return (
      <MainLayout>
        <Head>
          <title>{data.settings.title}</title>
          {data.settings.description && <meta name="description" content={data.settings.description} />}
          {data.settings.keywords && <meta name="keywords" content={data.settings.keywords} />}
        </Head>
        <GridStyle/>
        <GlobalStyle/>
        <Header/>
      </MainLayout>
    );
  }
};
