import styled from 'styled-components';

export const CalculatorComponent:any = styled('section')`
  &.calculator {
    margin-bottom: 2.7em;
  }
  
  & .calculator {
    padding-bottom: 2.3em;
    
    &-wrap {
      background: conic-gradient(from 237.34deg at 30.26% -12.73%, rgba(0, 250, 70, 0.13) -66.95deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 142.5deg, rgba(0, 10, 250, 0.13) 217.5deg, rgba(0, 250, 70, 0.13) 293.05deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 255.73deg at 102.25% 28.97%, rgba(0, 250, 70, 0.13) -136.87deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 250, 70, 0.13) 223.13deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 248.53deg at 103.05% -6.34%, rgba(250, 225, 0, 0.13) -67.77deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 130, 250, 0.13) 244.86deg, rgba(250, 225, 0, 0.13) 292.23deg, rgba(255, 255, 255, 0) 365.23deg), #F5F9FF;
      border-radius: 12px;
    }
  }
  
  .titles {
    padding: 1.5rem 1rem;
    
    .h2 {
      margin-bottom: 0.5rem;
    }
  }
  
  .sliders {
    padding: 0 1rem;
    margin-bottom: 2.5rem;
    
    &__item {
      margin-bottom: 1.25rem;
      
      &-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #414C78;
        
        &_wrap {
          margin-bottom: 1px;
        }
      }
      
      &-slider {
        display: none;
      }
    }
  }

  .rs-container * {
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .rs-container {
    height: 32px;
    position: relative;

    .rs-bg, .rs-selected {
      background-color: #ffffff;
      height: 4px;
      left: 0;
      position: absolute;
      top: 14px;
      width: 100%;
      border-radius: 4px;
    }

    .rs-selected {
      transition: all 0.1s linear;
      background-color: #1BE046;
    }

    .rs-pointer {
      background-color: #1BE046;
      border: 8px solid #ffffff;
      border-radius: 50%;
      cursor: pointer;
      height: 32px;
      margin-left: -8px;
      position: absolute;
      top: 0;
      transition: all 0.1s linear;
      width: 32px;

      .rs-tooltip {
        text-transform: none;
        font-size: .9em;
        line-height: 1;
        user-select: none;
        pointer-events: none;
        position: absolute;
        display: none;
        opacity: 0;

        text-align: center;
        font-weight: 500;
        color: #ffffff;
        min-width: 3em;
        max-width: 21em;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 1ch 1.5ch;
        border-radius: .3ch;
        box-shadow: 0 1em 2em -.5em rgba(0, 0, 0, 0.35);
        background: #333;
        z-index: 1000;

        bottom: calc(100% + 14px);
        left: 50%;
        transform: translate(-50%, -.5em);

        &:before {
          content: '';
          border: 5px solid transparent;
          z-index: 1001;
          text-transform: none;
          font-size: .9em;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          position: absolute;
          display: none;
          opacity: 0;
          bottom: -5px;
          border-bottom-width: 0;
          border-top-color: #333;
          left: 50%;
          transform: translate(-50%, -.5em);
        }
      }

      &:hover {
        .rs-tooltip {
          display: block;
          animation: tooltips-vert 300ms ease-out forwards;

          &:before {
            display: block;
            animation: tooltips-vert 300ms ease-out forwards;
          }
        }
      }
    }

    .sliding .rs-pointer,
    .sliding .rs-selected {
      transition: none;
    }

    .rs-scale {
      display: none;
    }
  }

  @keyframes tooltips-vert {
    to {
      opacity: .9;
      transform: translate(-50%, 0);
    }
  }

  .compare {
    padding: 0 1rem;
    
    &__title {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #060931;

      &-wrap {
        margin-bottom: 1.25rem;
      }
    }
    
    &__wrap {
      display: flex;
      flex-direction: column;
    }
    
    &__item {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #060931;
      margin-right: 6px;
      
      &-line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      &-wrap {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      }
      
      &-balloon {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 26px;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #060931;
        
        &.-purple {
          background: #D5C3FA;
        }

        &.-green {
          background: #1BE046;
          color: #ffffff;
        }
      }
      
      &.-bright {
        font-weight: 700;
        color: #414C78;
      }
    }
  }
  
  .total {
    background: rgba(255, 255, 255, 0.72);
    border-radius: 12px;
    padding: 32px 16px 30px 16px;
    
    &__title {
      display: block;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #060931;
      margin-bottom: 0.25rem;
      
      &-under {
        display: block;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #060931;
      }
      
      &-wrap {
        margin-bottom: 1rem;
      }
    }
    
    &__bonus {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #060931;
      margin-right: 8px;

      &-balloon {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 26px;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #060931;

        &.-purple {
          background: #D5C3FA;
        }

        &.-green {
          background: #1BE046;
          color: #ffffff;
        }
      }

      &-wrap {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }
    }
    
    &__profit {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #060931;
      
      &-wrap {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
      }

      &-items {
        padding-top: 0.5rem;
      }
      
      &-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0.75rem;
      }
      
      &-circle {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-right: 10px;
        
        &.-green {
          background: #1BE046;
        }

        &.-purple {
          background: #6629EF;
        }
      }
      
      &-rating {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border: 8px solid #1BE046;
        border-radius: 50%;
        
        &_percent {
          font-weight: 600;
          font-size: 14px;
          line-height: 28px;
          color: #060931;
        }
      }
    }

    &__text {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #060931;
      
      &-wrap {
        margin-bottom: 0.5rem;
      }
    }

    &__details {
      width: 100%;
      border: 0;
      cursor: pointer;
      list-style: none;
      
      &-wrap {
        margin-bottom: 1.3rem;
        margin-top: 1.8rem;
      }

      &-head {
        display: flex;
        padding-right: 0;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;

        &_text {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #060931;
        }

        &_icon {
          position: relative;
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          width: 12px;
          height: 8px;
          background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC45OTk3IDEuMTdDMTAuODEyMyAwLjk4Mzc1MyAxMC41NTg5IDAuODc5MjExIDEwLjI5NDcgMC44NzkyMTFDMTAuMDMwNSAwLjg3OTIxMSA5Ljc3NzA3IDAuOTgzNzUzIDkuNTg5NyAxLjE3TDUuOTk5NyA0LjcxTDIuNDU5NyAxLjE3QzIuMjcyMzQgMC45ODM3NTMgMi4wMTg4OSAwLjg3OTIxMSAxLjc1NDcgMC44NzkyMTFDMS40OTA1MiAwLjg3OTIxMSAxLjIzNzA3IDAuOTgzNzUzIDEuMDQ5NyAxLjE3QzAuOTU1OTc2IDEuMjYyOTcgMC44ODE1ODIgMS4zNzM1NyAwLjgzMDgxMyAxLjQ5NTQzQzAuNzgwMDQ0IDEuNjE3MjkgMC43NTM5MDYgMS43NDc5OSAwLjc1MzkwNiAxLjg4QzAuNzUzOTA2IDIuMDEyMDIgMC43ODAwNDQgMi4xNDI3MiAwLjgzMDgxMyAyLjI2NDU4QzAuODgxNTgyIDIuMzg2NDQgMC45NTU5NzYgMi40OTcwNCAxLjA0OTcgMi41OUw1LjI4OTcgNi44M0M1LjM4MjY3IDYuOTIzNzMgNS40OTMyNyA2Ljk5ODEzIDUuNjE1MTMgNy4wNDg4OUM1LjczNjk5IDcuMDk5NjYgNS44Njc2OSA3LjEyNTggNS45OTk3IDcuMTI1OEM2LjEzMTcyIDcuMTI1OCA2LjI2MjQyIDcuMDk5NjYgNi4zODQyOCA3LjA0ODg5QzYuNTA2MTQgNi45OTgxMyA2LjYxNjc0IDYuOTIzNzMgNi43MDk3IDYuODNMMTAuOTk5NyAyLjU5QzExLjA5MzQgMi40OTcwNCAxMS4xNjc4IDIuMzg2NDQgMTEuMjE4NiAyLjI2NDU4QzExLjI2OTQgMi4xNDI3MiAxMS4yOTU1IDIuMDEyMDIgMTEuMjk1NSAxLjg4QzExLjI5NTUgMS43NDc5OSAxMS4yNjk0IDEuNjE3MjkgMTEuMjE4NiAxLjQ5NTQzQzExLjE2NzggMS4zNzM1NyAxMS4wOTM0IDEuMjYyOTcgMTAuOTk5NyAxLjE3WiIgZmlsbD0iIzQxNEM3OCIvPgo8L3N2Zz4K);
          background-repeat: no-repeat;
          transition: 0.5s;
          transform: rotate(180deg);
          margin-right: 5px;
        }
      }

      &-body {
        height: auto;
        overflow: hidden;
        font-size: initial;
        margin-top: 0.7rem;
        margin-bottom: 1rem;
        transition: all 0.5s ease-in-out;
        
        &__line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        &__text {
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #414C78;
        }

        &__value {
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          color: #414C78;
        }

        p {
          margin-bottom: 1rem;
          font-size: inherit;
          line-height: 1.6;
          text-rendering: optimizeLegibility;
        }
      }
      
      &-col {
        &.-hidden {
          .total__details-head_icon {
            transform: rotate(0deg);
          }

          .total__details-body {
            height: 0;
            margin-bottom: 0;
          }
        }
      }
    }

    &__btn {
      padding: 16px 24px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      
      &-wrap {
        display: flex;
        margin-top: 2.2rem;
      }
    }
  }

  @media only screen and (min-width: 48em) {
    .total {
      padding: 32px 16px 46px 16px;
      &__details-wrap {
        margin-bottom: 2.7rem;
      }
    }
  }

  @media only screen and (min-width: 74.9375em) {
    
    &.calculator {
      margin-bottom: 4em;
    }
    
    .titles {
      padding: 2.5rem 3rem;
    }

    .sliders {
      padding: 0 0.5rem 0 3rem;
      margin-top: 2.2rem;
      margin-bottom: 4rem;
    }

    .sliders__item-title_wrap {
      margin-bottom: 3px;
    }

    .sliders__item {
      margin-bottom: 1.8rem;
    }

    .compare {
      padding: 0 0 0 3rem;
      
      &__title {
        font-size: 24px;
        line-height: 32px;
        
        &-wrap {
          margin-bottom: 2rem;
        }
      }
      
      &__wrap {
        //flex-direction: row;
        //justify-content: space-between;
        //align-items: center;
      }
      
      &__item {
        &.-bright {
          font-size: 24px;
          line-height: 32px;
        }
      }
    }

    .total {
      margin: 0 3rem 0 2rem;
      padding: 32px 39px 46px 39px;
      margin-bottom: 2.5rem;
      
      &__title {
        margin-bottom: 0.5rem;
        
        &-under {
          font-size: 24px;
          line-height: 32px;
        }
        
        &-wrap {
          margin-bottom: 1.5rem;
        }
      }
      
      &__bonus {
        font-size: 24px;
        line-height: 32px;
        margin-right: 13px;
        
        &-wrap {
          margin-bottom: 1.4rem;
        }
        
        &-balloon {
          font-size: 14px;
          line-height: 24px;
          padding: 4px 12px;
        }
      }
      
      &__profit {
        font-size: 18px;
        line-height: 24px;
        
        &-rating {
          width: 88px;
          height: 88px;
        }
        
        &-items {
          padding-top: 0.9rem;
        }
        
        &-circle {
          margin-right: 12px;
        }
        
        &-wrap {
          margin-bottom: 1.5rem;
        }
      }
      
      &__details-wrap {
        margin-bottom: 3.3rem;
        margin-top: 2.2rem;
      }
    }
  }
`;
