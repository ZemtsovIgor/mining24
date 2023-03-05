import React, { ReactElement } from 'react';

import { ImageCarouselComponent } from './ImageCarouselComponent.Styles';

export default function ImageCarousel({ data }:any) {
  return (
    <ImageCarouselComponent>
      <div className="carousel">
        <div className="swiper slides-list imageCarousel">
          <div className="swiper-wrapper slides-track">
            {
              data.items.map((item:any): ReactElement => (
                <div className="slide swiper-slide" key={Buffer.from(Math.random().toString()).toString('base64')}>
                  <img className="carousel-image" src={item.image.src}  alt={item.image.alt}/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="swiper carousel-thumbs thumbsCarousel">
          <div className="swiper-wrapper">
            {
              data.items.map((item:any): ReactElement => (
                <div className="carousel-thumb__wrap swiper-slide" key={Buffer.from(Math.random().toString()).toString('base64')}>
                  <img className="carousel-thumb" src={item.image.src} alt={item.image.alt}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </ImageCarouselComponent>
  );
};
