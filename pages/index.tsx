import React from 'react';
import Head from 'next/head';

import { GridStyle } from '../styles/grid'
import { GlobalStyle } from '../styles/global'
import { HomeComponent } from '../styles/homeComponent.Styles';

import MainLayout from '../components/Layouts/MainLayout/MainLayout';
import Header from '../components/Header/Header';

const static_data:any = {
  settings: {
    title: 'EN TEST TITLE',
    description: 'EN TEST DESCRIPTION',
    keywords: null,
    bgImage: '/staticfiles/images/logo.svg',
    name: 'EN TEST NAME',
  }
};

export default function Home() {

  return (
    <MainLayout>
      <Head>
        <title>{static_data.settings.title}</title>
        {static_data.settings.description && <meta name="description" content={static_data.settings.description} />}
        {static_data.settings.keywords && <meta name="keywords" content={static_data.settings.keywords} />}
        {static_data.settings.bgImage && <meta name="image" content={static_data.settings.bgImage} />}
      </Head>
      <GridStyle/>
      <GlobalStyle/>
      <Header/>

      <HomeComponent>
        <span>Home</span>
      </HomeComponent>
    </MainLayout>
  );
};
