import styled from 'styled-components';

export const HomeComponent:any = styled('main')`
  position: relative;
  top: -4.375rem;

  section {
    margin-bottom: 2.1rem;
    overflow: hidden;

    &.section-empty {
      margin: 0;
      padding: 0;
    }
  }

  .main-slide {
    margin-bottom: 3.4rem;
    padding-bottom: 0;
    background: conic-gradient(from 237.34deg at 30.26% -12.73%, rgba(0, 250, 70, 0.13) -66.95deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 142.5deg, rgba(0, 10, 250, 0.13) 217.5deg, rgba(0, 250, 70, 0.13) 293.05deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 255.73deg at 102.25% 28.97%, rgba(0, 250, 70, 0.13) -136.87deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 250, 70, 0.13) 223.13deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 248.53deg at 103.05% -6.34%, rgba(250, 225, 0, 0.13) -67.77deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 130, 250, 0.13) 244.86deg, rgba(250, 225, 0, 0.13) 292.23deg, rgba(255, 255, 255, 0) 365.23deg), #F5F9FF;

    & .left-side {
      margin-top: 6rem;
      
      .h1 {
        margin-bottom: 1.5rem;
        
        & .text-green {
          font-weight: 700;
        }
      }

      & .btns {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;
        
        & .btn {
          display: block;
          position: relative;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
          padding: 16px 24px;
        }
      }
      
      & .text {
        &-wrap {
          margin-bottom: 1.5rem;
        }
      }
    }

    & .right-side {
      margin-top: 6rem;

      & .animation {
        display: block;
        position: relative;
        width: 100%;
        height: auto;

        &-wrap {
          display: flex;
          width: 100%;
          justify-content: flex-end;
        }
      }
    }
  }

  @media only screen and (min-width: 23.4375em) { //375px
  }

  @media only screen and (min-width: 33.75em) { //540px
  }

  @media only screen and (min-width: 40.0625em) { //640px
  }

  @media only screen and (min-width: 48.0625em) { //768px
  }

  @media only screen and (min-width: 64em) { //1025px
  }

  @media only screen and (min-width: 80em) { //1280px
  }

  @media only screen and (min-width: 85.3125em) { //1365px
  }
`;
