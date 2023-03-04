import React from 'react';
import Head from 'next/head';

import { GridStyle } from '../styles/grid'
import { GlobalStyle } from '../styles/global'
import { HomeComponent } from '../styles/homeComponent.Styles';

import MainLayout from '../components/Layouts/MainLayout/MainLayout';
import Header from '../components/Header/Header';
import ChooseYourContract from "../components/Content/ChooseYourContract/ChooseYourContract";
import Calculator from "../components/Content/Calculator/Calculator";

const static_data:any = {
  settings: {
    title: 'EN TEST TITLE',
    description: 'EN TEST DESCRIPTION',
    keywords: null,
    bgImage: '/staticfiles/images/logo.svg',
    name: 'EN TEST NAME',
  },
  chooseYourContract: {
    className: 'choose-your-contract',
    title: 'Choose your contract',
    items: [
      {
        color: 'purple',
        title: 'Simple',
        list: [
          '3.6 Th Power',
          '24 mo',
          '50% Estimated ROI'
        ],
        price: '$100'
      },
      {
        color: 'green',
        title: 'Medium',
        list: [
          '18 Th Power',
          '24 mo',
          '75% Estimated ROI'
        ],
        price: '$500'
      },
      {
        color: 'pink',
        title: 'Profi',
        list: [
          '33 Th Power',
          '24 mo',
          '100% Estimated ROI'
        ],
        price: '$1000'
      },
      {
        color: 'blue',
        title: 'Expert',
        list: [
          '110 Th Power',
          '24 mo',
          '200% Estimated ROI'
        ],
        price: '$5000'
      }
    ]
  },
  calculator: {
    className: 'calculator',
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
        <section className="main-slide">
          <div className="grid-container">
            <div className="cell grid-x align-middle">
              <div className="cell small-12 medium-6 left-side">
                <h1 className="h1">Fast and easy <span className="text-green">Crypto mining</span> contracts for everyone</h1>
                <div className="btns">
                  <div className="btn-wrap">
                    <a className="btn btn-green" href="#" target="_blank" onClick={() => console.log("wow")}>Buy contract</a>
                  </div>
                </div>
                <div className="text-wrap">
                  <p className="text">Start from $100</p>
                </div>
                <div className="show-for-small social">
                  <div className="social-item">
                    <a className="social-item__link" href="#">
                      <i className="social-item__icon -inst" />
                    </a>
                  </div>
                  <div className="social-item">
                    <a className="social-item__link" href="#">
                      <i className="social-item__icon -telegram" />
                    </a>
                  </div>
                  <div className="social-item">
                    <a className="social-item__link" href="#">
                      <i className="social-item__icon -twitter" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="cell small-12 medium-5 medium-offset-1 right-side">
                <div className="animation-wrap">
                  <img className="animation" src="/staticfiles/images/phone.png" />
                </div>
                <div className="social hide-for-small -vertical">
                  <div className="social-item">
                    <a className="social-item__link" href="#">
                      <i className="social-item__icon -inst" />
                    </a>
                  </div>
                  <div className="social-item">
                    <a className="social-item__link" href="#">
                      <i className="social-item__icon -telegram" />
                    </a>
                  </div>
                  <div className="social-item">
                    <a className="social-item__link" href="#">
                      <i className="social-item__icon -twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Choose Your Contract */}
        <ChooseYourContract data={static_data.chooseYourContract} />

        {/* Calculator */}
        <Calculator data={static_data.calculator} />
      </HomeComponent>
    </MainLayout>
  );
};
