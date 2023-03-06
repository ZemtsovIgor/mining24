import styled from 'styled-components';

export const HomeComponent:any = styled('main')`
  position: relative;
  top: -4rem;
  width: 100vw;

  section {
    margin-bottom: 2.1rem;
    overflow: hidden;

    &.section-empty {
      margin: 0;
      padding: 0;
    }
  }
  
  .why-people-choose-us {
    margin-bottom: 0.6rem;
  }

  @media only screen and (min-width: 23.4375em) { //375px
  }

  @media only screen and (min-width: 33.75em) { //540px
    
  }

  @media only screen and (min-width: 40.0625em) { //640px
  }

  @media only screen and (min-width: 48em) { //768px
    top: -4.375rem;

    .why-people-choose-us {
      margin-bottom: 1.6rem;
    }
  }

  @media only screen and (min-width: 64em) { //1025px
  }

  @media only screen and (min-width: 74.9375em) { //1200px
    top: -6.375rem;
  }

  @media only screen and (min-width: 85.3125em) { //1365px
  }
`;
