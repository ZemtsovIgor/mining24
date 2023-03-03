import styled from 'styled-components';

export const HeaderComponent:any = styled('header')`
  position: sticky;
  margin-top: 0.938rem;
  z-index: 999;
  top: 0;
  width: 100vw;
  
  section {
    padding-bottom: 0;
  }
  .title-bar {
    padding: 0.5rem 0;
    color: #ffffff;
    justify-content: flex-start;
    align-items: center;

    .menu-icon {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 27px;
      height: 12px;
      background: none;
      border: 0;
      cursor: pointer;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      outline: none;
      overflow: hidden;

      &:after {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        background: #FFFFFF;
        box-shadow: 8px 10px 0 #FFFFFF;
        content: '';
      }
    }
  }

  .top-bar {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 0;
    height: 4.375rem;

    &-title {
      flex: 0 0 auto;
      margin: 0.5rem 1rem 0.5rem 0;
    }

    .input-group-field {
      width: 100%;
      margin-right: 0;
    }

    .top-bar-left {
      display: flex;
      justify-content: center;
      min-height: 100%;
      margin-left: 3rem;
    }
    
    .top-bar-right {
      min-height: 100%;
    }

    .top-bar-left, .top-bar-right {
      flex: 0 0 auto;
      max-width: 100%;
    }

    &.stacked-for-xxlarge {
      flex-wrap: wrap;

      .top-bar-left, .top-bar-right {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }

    input {
      max-width: 200px;
      margin-right: 1rem;

      &.button {
        width: auto;
      }
    }
  }

  .navigation {

    &--collapsed {
      display: flex;
      justify-content: space-between;

      ul {
        background-color: #0a1b36;
      }
    }

    &--expanded {
      display: none;
    }

    &__logo {
      width: 6rem;
      height: 3.25rem;

      & .img {
        max-width: 100%;
        max-height: 100%;
        width: 6rem;
        height: 3.25rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
    }

    &-trade {
      & .menu-trade {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        padding: 12px 15px;
        background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);
        border-radius: 20px;
        padding-right: 15px!important;
        transition: all 0.1s ease-in-out;

        &:hover {
          background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 72.3%);
        }
      }
    }
  }

  .navigation {
    .navigation-lang {
      margin-right: 18px;

      &__btn {
        display: flex;
        align-items: center;
        background: none;
        border: 0;
        outline: none;
        cursor: pointer;
        padding: 10px 0;
      }

      &__value {
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        color: #FFFFFF;
        margin-right: 8px;
      }

      &__arr {
        display: inline-block;
        vertical-align: middle;
        width: 8px;
        height: 5px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgOCA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSAxTDQgNEw3IDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjYiLz4KPC9zdmc+Cg==);
        background-repeat: no-repeat;
        transition: 0.5s;
      }

      &__tooltip {
        width: 6rem;
        overflow-y: auto;
        overflow-x: hidden;
        opacity: 0;
        visibility: hidden;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
        position: absolute;
        background-color: #fff;
        z-index: 2;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 5px;
        transition: transform .4s ease;
        transform: translateY(-10px);

        &_list {
          background: #ffffff!important;

          li {
            text-align: center;
          }
        }

        &_item {
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          cursor: pointer;
          color: #2b405f;
        }
      }

      &:hover {
        .navigation-lang__arr {
          transform:rotate(180deg);
        }

        .navigation-lang__tooltip{
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
      }
    }
  }
  

  .menu {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    a, .button {
      line-height: 1;
      text-decoration: none;
      display: block;
      padding: 0.7rem 1rem;
      transition: 0.5s;
    }

    &.dropdown {
      height: 4.375rem;
      align-items: center;

      > li {
        margin-left: 8px;
        padding: 0.8125em 0;

        &:last-child {
          a {
            padding-right: 0;
          }
        }
        
        &.-active {
          .link {
            color: #129de5;
            transition: 0.5s;
          }
        }
      }
    }

    .services-panel {
      overflow-y: auto;
      overflow-x: hidden;
      opacity: 0;
      visibility: hidden;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      position: absolute;
      background-color: #fff;
      z-index: 2;
      padding-top: 28px;
      padding-bottom: 26px;
      transition: transform .4s ease;
      transform: translateY(-10px);

      &:hover {
        opacity: 1;
        visibility: visible;
      }

      .services-columns {
        -webkit-column-gap: 2em;
        column-gap: 2em;
        font-size: 14px;
        line-height: 2em;
        list-style: none;
        margin-left: 1.25rem;
        margin-right: 1.25rem;

        &.four-columns {
          columns: 4;
        }

        > li {
          -webkit-column-break-inside: avoid;
          break-inside: avoid-column;
          page-break-inside: avoid;
          padding-bottom: 2em;

          ul {
            list-style: none;
            margin-left: 0;
          }

          a {
            color: #667884;
            font-size: 14px;
            line-height: 2em;
            padding: 0;

            &:hover {
              color: #434343;
            }
          }

          .link-title {
            font-size: 14px;
            font-weight: bold;
            color: #036da1;
          }

          &:last-child {
            padding-bottom: 0;
          }
        }
      }

      .button-row {
        text-align: center;
        align-items: center;
        flex-direction: column;

        .button {
          padding: 0;
          width: 217px;
          height: 55px;
          margin-bottom: 0;
          line-height: 3em;
          font-size: 18px;
          background-color: #0BB8E3;
          border-color: #0BB8E3;
          border-radius: 5px;
          color: #ffffff;
          display: inline-block;
          vertical-align: middle;
          text-decoration: none;
          transition: 0.5s;

          &:hover {
            background-color: #036da1;
            border-color: #036da1;
          }
        }
      }
    }

  }
  
  @media print, screen and (min-width: 40em) {
     .top-bar {
      flex-wrap: nowrap;

      .top-bar-left {
        flex: 1 1 auto;
      }

      .top-bar-right {
        flex: 0 1 auto;
        margin-left: auto;
      }
    }
  }

  @media only screen and (min-width: 65.625rem) {
    .navigation {

      &--collapsed {
        display: none;
      }

      &--expanded {
        display: flex;
      }

      &__logo {
        width: 6rem;
        height: 5rem;
        
        & .img {
          width: 6rem;
          height: 5rem;
        }
      }
    }

    .menu {
      .services-panel {
        width: 53rem;
      }
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .services-panel {
      margin-left: -9em;
    }
  }

  @media only screen and (max-width: 64.0625em) {
    margin-top: 0.25em;
  }
  
`;
