import styled from 'styled-components';

export const ChooseYourContractComponent:any = styled('section')`
  &.choose-your-contract {
    padding-bottom: 2.3em;
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
    margin-bottom: 1.5rem;

    li {
      display: block;
      position: relative;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #414C78;
    }
  }
  
  .price {
    display: block;
    position: relative;
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #060931;
  }
  
  .btn {
    &-wrap {
      margin-bottom: 0.5rem;
    }
  }
  

  .media-card {
    border-radius: 8px;
    margin-bottom: 1.5rem;
    
    &__content {
      padding: 24px;
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
