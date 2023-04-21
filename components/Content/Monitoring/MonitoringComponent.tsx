import styled from 'styled-components';

export const MonitoringComponent:any = styled('section')`
  &.monitoring {
    margin-bottom: 2.5em;
  }

  & .monitoring {
    padding-bottom: 2.3em;

    &-wrap {
      background: conic-gradient(from 237.34deg at 30.26% -12.73%, rgba(0, 250, 70, 0.13) -66.95deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 142.5deg, rgba(0, 10, 250, 0.13) 217.5deg, rgba(0, 250, 70, 0.13) 293.05deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 255.73deg at 102.25% 28.97%, rgba(0, 250, 70, 0.13) -136.87deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 250, 70, 0.13) 223.13deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 248.53deg at 103.05% -6.34%, rgba(250, 225, 0, 0.13) -67.77deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 130, 250, 0.13) 244.86deg, rgba(250, 225, 0, 0.13) 292.23deg, rgba(255, 255, 255, 0) 365.23deg), #F5F9FF;
      border-radius: 12px;
    }

    &-titles {
      padding: 1.5rem 1rem;
      margin-bottom: 0.5rem;

      .h2 {
        margin-bottom: 0.5rem;
      }
    }
    
    &-list {
      list-style: none;
      display: block;
      position: relative;
      margin-bottom: 2rem;
      
      &__wrap {
        padding: 0 1rem;
      }
      
      &__item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }
      
      &__icon {
        display: block;
        position: relative;
        width: 20px;
        height: 2px;
        background: #060931;
        margin-right: 14px;
      }
      
      &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #060931;
      }
    }

    &-btn {
      padding: 16px 24px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      
      &__wrap {
        padding: 0 1rem;
        margin-bottom: 2rem;
      }
    }
    
    &-iframe {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      background: #F0F6FF;
      border-radius: 8px;
      background-image: url("/staticfiles/images/chart.png");
      background-size: contain;
      background-repeat: no-repeat;


      &__wrap {
        display: block;
        position: relative;
        padding: 0 1rem;
        height: 246px;
        margin-bottom: 1.5rem;
      }
    }
  }

  @media only screen and (min-width: 48em) {
    .monitoring {
      &-list {
        margin-bottom: 3rem;
      }
      
      &-btn {
        &__wrap {
          padding: 0 1rem;
          margin-bottom: 3rem;
        }
      }

      &-iframe {

        &__wrap {
          height: 468px;
        }
      }
    }
  }

  @media only screen and (min-width: 64em) {
    .monitoring {
      &-iframe {

        &__wrap {
          height: 641px;
        }
      }
    }
  }

  @media only screen and (min-width: 74.9375em) {
    &.monitoring {
      margin-bottom: 5em;
    }
    
    .monitoring {
      &-titles {
        padding: 3rem 3rem;
        margin-bottom: 0;
      }
      
      &-list {
        &__icon {
          margin-right: 16px;
        }
        &__wrap {
          padding: 0 3rem;
        }
      }
      
      &-btn__wrap {
        padding: 0 3rem;
        margin-bottom: 4rem;
      }

      &-iframe {
        &__wrap {
          height: 344px;
          padding: 0;
          padding-right: 3rem;
          margin-top: 4.5rem;
        }
      }
    }
  }
`;
