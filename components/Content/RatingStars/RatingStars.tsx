import { RatingStarsComponent } from './RatingStarsComponent.Styles';
import React from "react";

export default function RatingStars({ data }:any) {
  const stars:any[] = [];

  let counter = 0;
  let rating = data.rating;
  while (counter < 5) {
    const item:number = rating < 20 ? (rating * 5) : 100;
    stars.push(item > 0 ? item : 0);
    counter = counter + 1;
    rating = rating - 20;
  }

  return (
    <RatingStarsComponent className="rating-stars">
      {
        stars.map((star:number) => (
          <div className="star" key={Buffer.from(Math.random().toString()).toString('base64')}>
            <i className="icon-o">
              <i className="icon" style={{width: `${star}%`}} />
            </i>
          </div>
        ))
      }
    </RatingStarsComponent>
  );
};
