import styled from 'styled-components';

export const ChooseYourContractComponent:any = styled('section')`
  &.choose-your-contract {
    padding-bottom: 2.6em;
    margin-bottom: 0;
  }
  
  .h2 {
    margin-bottom: 1.5rem;
  }

  .h3 {
    margin-bottom: 0.4rem;
  }

  ul {
    list-style: none;
    margin-bottom: 1rem;

    li {
      display: block;
      position: relative;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #414C78;
    }
  }
  
  .price {
    display: block;
    position: relative;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #060931;
  }
  
  .btn {
    display: inline;
    &-wrap {
      margin-bottom: 0.5rem;
      width: auto;
    }
  }
  

  .media-card {
    border-radius: 8px;
    margin-bottom: 1rem;
    
    &__content {
      padding: 16px;
    } 
    
    &.-purple {
      background: #EFE7FD;
    }

    &.-green {
      background: #1BE046;
    }

    &.-pink {
      background: #FCE4F4;
    }

    &.-blue {
      background: #DDF3F9;
    }
  }

  @media only screen and (min-width: 48em) {
    &.choose-your-contract {
      padding-bottom: 2.3em;
    }

    ul {
      margin-bottom: 1.5rem;

      li {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .price {
      margin-bottom: 1.5rem;
      font-weight: 500;
      font-size: 22px;
      line-height: 28px;
    }

    .media-card {
      margin-bottom: 1.5rem;
      
      &__content {
        padding: 24px;
      }
    }

    .btn {
      &-wrap {
        width: 100%;
      }
    }
  }


  @media only screen and (min-width: 74.9375em) {
    &.choose-your-contract {
      padding-bottom: 4.5em;
    }
    
    .h2 {
      margin-bottom: 2rem;
    }
    
    .btn {
      padding: 10px 16px;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
