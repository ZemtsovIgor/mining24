import React, { ReactElement } from 'react';

import { ReviewsComponent } from './ReviewsComponent.Styles';
import RatingStars from "../RatingStars/RatingStars";

export default function Reviews({ data }:any) {
  return (
    <ReviewsComponent className={`row reviews ${data.className}`}>
      <div className="grid-container">
        <div className="cell small-12 medium-12">
          <div className="swiper reviews-title">
            <h2 className="h2">{data.title}</h2>
          </div>
        </div>
      </div>
      <div className="reviews-carousel__container">
        <div className="grid-container">
          <div className="swiper reviews-carousel">
            <div className="swiper-wrapper">
              {
                data.items.map((item:any): ReactElement => (
                  <div
                    className={`reviews-carousel__wrap swiper-slide -${item.color}`}
                    key={Buffer.from(Math.random().toString()).toString('base64')}
                  >
                    <div className="reviews-carousel__header">
                      <div className="reviews-carousel__photo">
                        <img
                          src={item.avatar.src}
                          className="img"
                          alt={item.avatar.alt}
                        />
                      </div>
                      <div className="reviews-carousel__info">
                        <div className="reviews-carousel__info_name">
                          <p className="name">{item.name}</p>
                        </div>
                        <div className="reviews-carousel__info_date">
                          <p className="date">{item.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="reviews-carousel__body">
                      <div className="reviews-carousel__title">
                        <p className="title">{item.title}</p>
                      </div>
                      <div className="reviews-carousel__rating">
                        <RatingStars data={{rating: item.rating}} />
                      </div>
                      <div className="reviews-carousel__text">
                        <p className="text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="cell small-12 medium-12">
          <div className="btn-wrap reviews-btn__wrap">
            <button className="btn btn-green reviews-btn" onClick={() => console.log("Start mining")}>Send us your feedback</button>
          </div>
        </div>
      </div>
    </ReviewsComponent>
  );
};
