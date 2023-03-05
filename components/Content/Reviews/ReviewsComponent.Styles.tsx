import styled from 'styled-components';

export const ReviewsComponent:any = styled('section')`
  &.reviews {
    margin-bottom: 2.7rem;
  }
  
  & .reviews {

    &-title {
      margin-bottom: 1.5rem;
    }
    
    &-carousel {
      margin-left: auto;
      margin-right: auto;
      position: relative;
      list-style: none;
      padding: 0;
      z-index: 1;
      display: block;
      width: 100%;
      height: 100%;
      touch-action: pan-y;
      
      &__container {
        
      }
      
      .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transform: translate3d(0px,0,0);
      }
      
      &__wrap {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;
        display: block;
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background: #EBFCEA;
        border-radius: 12px;
        padding: 24px 24px 32px;
        
        &.-green {
          background: #EBFCEA;
        }

        &.-purple {
          background: #EFE7FD;
        }
        
        &.-blue {
          background: #DDF3F9;
        }
        
        &.-pink {
          background: #FCE4F4;
        }
      }
      
      &__header {
        display: flex;
        margin-bottom: 2rem;
      }
      
      &__photo {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 10px;
        overflow: hidden;
        
        .img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      &__info {
        &_name {
          margin-top: 6px;
          
          .name {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #060931;
          }
        }
        &_date {
          .date {
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #414C78;
          }
        }
      }
      
      &__body {
        display: block;
        position: relative;
      }
      
      &__title {
        margin-bottom: 0.5rem;
        
        .title {
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #060931;
        }
      }
      
      &__rating {
        margin-bottom: 1rem;
      }
      
      &__text {
        .text {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #414C78;
        }
      }
    }
    
    &-btn {
      padding: 16px 24px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      
      &__wrap {
        margin-top: 1.5rem;
        text-align: center;
      }
    }
  }

  @media only screen and (min-width: 74.9375em) {
    &.reviews {
      margin-bottom: 4rem;
    }
    
    .reviews {
      &-title {
        margin-bottom: 2rem;
      }
      
      &-btn__wrap {
        margin-top: 2rem;
      }
    }
  }
`;
