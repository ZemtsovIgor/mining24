import styled from 'styled-components';

export const ImageCarouselComponent:any = styled('div')`
  display: block;
  position: relative;
  max-width: 100%;
  width: 100%;
  margin-top: 1.5em;
  margin-bottom: 2em;
  
  .carousel {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    
    &-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slides-list {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    border-radius: 8px;
    height: 53vh;
  }

  .slides-track {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;

    & > div {
      position: relative;
    }
  }

  .slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: flex;
  }

  .carousel-thumbs {
    height: 6em;
    box-sizing: border-box;
    padding-top: 12px;
    overflow: hidden;

    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      transition-timing-function: var(--swiper-wrapper-transition-timing-function,initial);
      box-sizing: content-box;
    }

    .swiper-slide {
      cursor: pointer;
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      width: 20%;
      height: 100%;
      border-radius: 4px;
      overflow: hidden;
      flex-shrink: 0;
      position: relative;
      transition-property: transform;
      
      &-thumb-active {
        border: 2px solid #1BE046;
      }
      
      & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media only screen and (min-width: 64em) { //1025px
    .slides-list {
      height: 71vh;
    }

    .carousel-thumbs {
      height: 8em;
    }
  }

  @media only screen and (min-width: 74.9375em) {
    margin-top: 2.5em;

    .slides {
      &-list {
        height: 23em;
      }
    }

    .carousel {
      &-thumbs {
        height: 5.5em;
      }
    }
  }
`;
