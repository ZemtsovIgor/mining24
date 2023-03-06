import styled from 'styled-components';

export const PartnersComponent:any = styled('section')`
  &.partners {
    margin-bottom: 3rem;
  }
  
  & .partners {
    &-container {
      
    }
    
    &-wrap {
      display: flex;
      flex-flow: row wrap;
      align-content: space-between;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      column-gap: 3rem;
    }
    
    &-item {
      display: contents;
    }
    
    &-image {
      width: 9rem;
    }
  }

  @media only screen and (min-width: 48em) {
    &.partners {
      margin-bottom: 2.1rem;
    }
  }

  @media only screen and (min-width: 74.9375em) {
    &.partners {
      margin-bottom: 5rem;
    }
    
    .partners {
      
      &-wrap {
        column-gap: 2rem;
      }
      &-image {
        width: 12rem;
      }
    }
  }
`;
