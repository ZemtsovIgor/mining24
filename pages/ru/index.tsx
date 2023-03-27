import {CONTENT} from "../../constants/content.constants";
import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import Head from "next/head";
import {GridStyle} from "../../styles/grid";
import {GlobalStyle} from "../../styles/global";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import {HomeComponent} from "../../styles/homeComponent.Styles";
import MainSlide from "../../components/Content/MainSlide/MainSlide";
import ChooseYourContract from "../../components/Content/ChooseYourContract/ChooseYourContract";
import Calculator from "../../components/Content/Calculator/Calculator";
import ImageCarousel from "../../components/Content/ImageCarousel/ImageCarousel";
import MiningList from "../../components/Content/MiningList/MiningList";
import Partners from "../../components/Content/Partners/Partners";
import Monitoring from "../../components/Content/Monitoring/Monitoring";
import Reviews from "../../components/Content/Reviews/Reviews";
import Faq from "../../components/Content/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import React from "react";

export default function Home() {
  const loc: string = 'ru'
  const static_data:any = CONTENT[loc];

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
      <Header locale={loc}/>

      <MobileMenu locale={loc} />

      <HomeComponent>
        {/* MainSlide */}
        <MainSlide data={static_data.mainSlide} />

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
