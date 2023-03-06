import React from 'react';
import Head from 'next/head';

import { GridStyle } from '../styles/grid'
import { GlobalStyle } from '../styles/global'
import { HomeComponent } from '../styles/homeComponent.Styles';

import MainLayout from '../components/Layouts/MainLayout/MainLayout';
import Header from '../components/Header/Header';
import ChooseYourContract from "../components/Content/ChooseYourContract/ChooseYourContract";
import Calculator from "../components/Content/Calculator/Calculator";
import ImageCarousel from "../components/Content/ImageCarousel/ImageCarousel";
import MiningList from "../components/Content/MiningList/MiningList";
import Partners from "../components/Content/Partners/Partners";
import Monitoring from "../components/Content/Monitoring/Monitoring";
import Reviews from "../components/Content/Reviews/Reviews";
import Faq from "../components/Content/Faq/Faq";
import Footer from "../components/Footer/Footer";
import MobileMenu from "../components/MobileMenu/MobileMenu";

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
  },
  whyPeopleChooseUs: {
    carousel: {
      items: [
        {
          image: {
            src: '/staticfiles/images/slider/1.jpg',
            alt: 'alt text'
          }
        },
        {
          image: {
            src: '/staticfiles/images/slider/2.jpg',
            alt: 'alt text'
          }
        },
        {
          image: {
            src: '/staticfiles/images/slider/3.jpg',
            alt: 'alt text'
          }
        },
        {
          image: {
            src: '/staticfiles/images/slider/4.jpg',
            alt: 'alt text'
          }
        },
        {
          image: {
            src: '/staticfiles/images/slider/5.jpg',
            alt: 'alt text'
          }
        }
      ]
    },
    list: [
      'Fast START - 5 minutes to START MINING',
      'No need to buy your own equipment',
      'We care of maintenance and operation of the quipment',
      'Transparency at all stages of interaction with the platform',
      'Mining starts immediately after payment'
    ]
  },
  partners: {
    list:[
      {
        image: {
          src: '/staticfiles/images/partners/antminer.svg',
          alt: 'alt text'
        }
      },
      {
        image: {
          src: '/staticfiles/images/partners/bitmain.svg',
          alt: 'alt text'
        }
      },
      {
        image: {
          src: '/staticfiles/images/partners/binance.svg',
          alt: 'alt text'
        }
      },
      {
        image: {
          src: '/staticfiles/images/partners/emd.svg',
          alt: 'alt text'
        }
      },
      {
        image: {
          src: '/staticfiles/images/partners/f2pool.svg',
          alt: 'alt text'
        }
      }
    ]
  },
  monitoring: {
    className: 'monitoring',
    title: 'Real-time mining monitoring',
    sub_title: 'Clear and transparent statistics',
    list: [
      'Watch your income',
      'Request withdrawals',
      'Buy new contracts using your income'
    ]
  },
  reviews: {
    className: '',
    title: 'What our customers say',
    items: [
      {
        color: 'green',
        avatar: {
          src: '/staticfiles/images/authors/1.png',
          alt: 'alt text'
        },
        name: 'Pan Ksistof',
        date: '9/29/2022',
        title: 'CS is very helpful',
        rating: 80,
        text: 'CS is very helpful when there are difficulties when transferring, problems can be resolved immediately'
      },
      {
        color: 'purple',
        avatar: {
          src: '/staticfiles/images/authors/2.png',
          alt: 'alt text'
        },
        name: 'Pan Ksistof',
        date: '9/29/2022',
        title: 'CS is very helpful',
        rating: 80,
        text: 'CS is very helpful when there are difficulties when transferring, problems can be resolved immediately'
      },
      {
        color: 'blue',
        avatar: {
          src: '/staticfiles/images/authors/3.png',
          alt: 'alt text'
        },
        name: 'Pan Ksistof',
        date: '9/29/2022',
        title: 'CS is very helpful',
        rating: 80,
        text: 'CS is very helpful when there are difficulties when transferring, problems can be resolved immediately'
      },
      {
        color: 'pink',
        avatar: {
          src: '/staticfiles/images/authors/3.png',
          alt: 'alt text'
        },
        name: 'Pan Ksistof',
        date: '9/29/2022',
        title: 'CS is very helpful',
        rating: 80,
        text: 'CS is very helpful when there are difficulties when transferring, problems can be resolved immediately'
      }
    ]
  },
  faq: {
    className: '',
    title: 'Have any questions?',
    items: [
      {
        title: 'What is bitcoin mining?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'Why do you need to mine btc?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'Is Bitcoin mining profitable?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'How to start mining bitcoins?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'What is a crypto mining platform?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ]
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

      <MobileMenu />

      <HomeComponent>
        <section className="main-slide">
          <div className="grid-container">
            <div className="cell grid-x align-middle">
              <div className="cell small-12 large-6 left-side">
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
              <div className="cell small-12 large-5 xlarge-6 large-offset-1 xlarge-offset-0 right-side">
                <div className="animation-wrap">
                  <img className="animation" src="/staticfiles/images/phone.png" alt="phone" />
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

        {/* Why people choose us */}
        <section className="why-people-choose-us" id="about_us">
          <div className="grid-container">
            <div className="cell small-12 medium-12">
              <h2 className="h2">Why people choose us?</h2>
            </div>
            <div className="grid-x">
              <div className="cell small-12 medium-12 xlarge-7">
                <ImageCarousel data={static_data.whyPeopleChooseUs.carousel} />
              </div>
              <div className="cell small-12 medium-12 xlarge-5">
                <MiningList data={static_data.whyPeopleChooseUs.list} />
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <Partners data={static_data.partners} />

        {/* Monitoring */}
        <Monitoring data={static_data.monitoring} />

        {/* Reviews */}
        <Reviews data={static_data.reviews} />

        {/* Faq */}
        <Faq data={static_data.faq} />
      </HomeComponent>
      <Footer />
    </MainLayout>
  );
};
