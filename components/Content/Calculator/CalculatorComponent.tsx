import styled from 'styled-components';

export const CalculatorComponent:any = styled('section')`

  & .calculator {
    padding-bottom: 2.3em;
    margin-bottom: 0;
    
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
    }

    .sliding .rs-pointer,
    .sliding .rs-selected {
      transition: none;
    }

    .rs-scale {
      display: none;
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
    padding: 32px 16px;
    
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
          font-size: 20px;
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
        margin-bottom: 2.7rem;
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
        }
      }

      &-body {
        height: auto;
        overflow: hidden;
        font-size: initial;
        padding-left: 1rem;
        margin-bottom: 1rem;
        transition: all 0.5s ease-in-out;

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
            transform: rotate(180deg);
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
    }
  }

  @media only screen and (min-width: 64.0625em) { //1024px
  }
`;
