import styled from 'styled-components';

export const FooterComponent:any = styled('footer')`
  margin-top: -1rem;
  
  .footer {
    &__logo {
      margin-bottom: 0.7rem;
    }
    
    &-menu {
      display: flex;
      justify-content: center;
      margin-bottom: 1.5rem;
      
      &__list {
        padding: 0;
        margin: 0;
        list-style: none;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        & .link {
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-decoration: none;
          display: block;
          padding: 0.7rem;
          transition: 0.5s;
        }
      }
    }
    
    &-social {
      justify-content: center;
      margin-bottom: 3rem;
    }
  }

  @media only screen and (min-width: 74.9375em) {
    margin-top: -2.7rem;
    .footer {
      &__logo {
        text-align: left;
      }
      
      &-menu {
        justify-content: flex-end;
        margin-right: 4.7rem;
        
        &__list {
          gap: 1.6rem;
        }
      }

      .social-item {
        margin-top: 0;
      }
    }
  }
`;
