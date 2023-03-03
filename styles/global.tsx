import { createGlobalStyle } from 'styled-components'

export const GlobalStyle: any = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/staticfiles/fonts/Montserrat/Montserrat-Bold.eot');
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Bold.eot?#iefix') format('embedded-opentype'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Bold.woff') format('woff'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/staticfiles/fonts/Montserrat/Montserrat-SemiBold.eot');
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
    url('/staticfiles/fonts/Montserrat/Montserrat-SemiBold.eot?#iefix') format('embedded-opentype'),
    url('/staticfiles/fonts/Montserrat/Montserrat-SemiBold.woff') format('woff'),
    url('/staticfiles/fonts/Montserrat/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/staticfiles/fonts/Montserrat/Montserrat-Medium.eot');
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Medium.eot?#iefix') format('embedded-opentype'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Medium.woff') format('woff'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/staticfiles/fonts/Montserrat/Montserrat-Regular.eot');
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Regular.eot?#iefix') format('embedded-opentype'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Regular.woff') format('woff'),
    url('/staticfiles/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-family: "Montserrat", Helvetica, Roboto, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    color: inherit;
    text-rendering: optimizeLegibility;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    font-family: "Montserrat", Helvetica, Roboto, Arial, sans-serif;
    font-weight: normal;
    line-height: 1.5;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .body {
    margin: 0;
    padding: 0;
  }

  button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
    outline: none;
  }

  div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  section {
    display: block;
    padding-bottom: 1em;
  }

  h1 {
    font-size: 2em;
    font-weight: 400;
    line-height: 1.25em;
  }

  h2 {
    font-size: 1.625em;
    color: #434343;
    line-height: 1.25em;
    font-weight: 400;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.25em;
    line-height: 1.25em;
    font-weight: 400;
    margin-top: 1em;
    width: 100%;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.4;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: #0BB8E3;
    text-decoration: none;
    border: 0;
  }

  a:active,
  a:hover,
  a:visited {
    outline-width: 0;
    color: #0BB8E3;
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  input[type="text"], input[type="email"], input[type="password"], input[type="tel"], textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    outline: none;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    width: 100%;
    border: 1px solid #BABBBD;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    margin-bottom: 0.2em;
    font-size: 0.8em;
  }

  input[placeholder] {
    opacity: 1;
    transition: opacity 0.3s ease;
    outline: none;
  }

  input::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  input::-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  input:-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  input:-ms-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  input:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  textarea[placeholder] {
    opacity: 1;
    transition: opacity 0.3s ease;
    outline: none;
  }

  textarea::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  textarea::-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  textarea:-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  textarea:-ms-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  textarea:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  textarea:focus::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  textarea:focus:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  textarea:focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  select {
    -webkit-appearance: none;
    appearance: none;
    border: 0;
    outline: none;
    -moz-appearance: window;
    width: 100%;
    padding: .5em 2em .5em .75em;
    font-size: .8em;
    line-height: 1.4em;
    cursor: pointer;
    display: block;
    background-color: transparent;
    text-indent: 0.01px;
    text-overflow: '';
    color: #434343;
  }

  .btn {
    appearance: none;
    border: 0;
    outline: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    padding: 12px 15px;
    background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 110.36%);
    border-radius: 20px;
    
    &:hover {
      background: linear-gradient(77.9deg, #0066FF -3.83%, #2CE0C5 72.3%);
    }
  }

  .btn-gray {
    border: 2px solid #375786;
    border-radius: 30px;
    background: none;
    padding: 15px 17px;
    font-size: 16px;

    &:visited {
    }

    &:hover {
      background: none;
      border: 2px solid #5f799e;
    }
  }

  .hide-overflow {
    white-space: nowrap;
    overflow: hidden;
  }

  .initial-height {
    height: initial;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .align-center {
    justify-content: center;
  }

  .align-right {
    justify-content: flex-end;
  }

  .items-with-background-image {
    .item-with-background-image {
      margin: 0;

      h4 {
        font-size: 1.4em;
      }

      .columns {
        margin: auto;
        padding: 30px;

        h4 {
          margin: 0 0 0.3em 0;
        }
      }
    }
  }

  .even-section {
    background-color: #f9f9f9;
    padding-bottom: 2em;
    max-width: 100%;

    &.items-with-background-image {
      padding-bottom: 40px;
    }

    &-in-section {
      background-color: #f9f9f9;
      margin-bottom: 2em;
      max-width: 100%;
    }
  }

  .frame-container {
    background-color: #FFFFFF;
    border: 1.4px solid #EEEEEE;
    box-shadow: 0 2px 4px 0 #EAEAEA;
  }

  .pad-left {
    padding-left: 1em;
  }

  .pad-top {
    padding-top: 1em;
  }

  .pad-bot {
    padding-bottom: 1em;
  }

  .clearfix {
    *zoom: 1;

    &:before, &:after {
      content: " ";
      display: table;
    }

    &:after {
      clear: both;
    }
  }

  .smaller {
    font-size: 0.9em;
    line-height: 1.3;
  }

  .line-break {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #D8D8D8;
  }

  .big-block-of-text {
    padding-top: 2em;

    h2 {
      padding: 0.5em 0;
      float: unset;
    }

    p {
      padding: 0.5em 0;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.5em;
    }
  }

  .align-top {
    align-items: flex-start;
  }

  .align-middle {
    align-items: center;
  }

  .when-font {
    color: #434343;
  }

  .tiny {
    font-size: 0.7em;
  }

  .show-for-small {
    display: block;
  }

  .hide-for-small {
    display: none;
  }

  .off-canvas-overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    background: none;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    outline: none;
    cursor: pointer;

    &.is-overlay-fixed {
      position: fixed;
    }

    &.is-visible {
      display: block;
      opacity: 1;
      visibility: visible;
    }
  }

  .off-canvas-content {
    transform: none;
    transition: transform 0.5s ease;
    backface-visibility: hidden;

    &.has-transition-push {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    &.is-open-right {
      position: fixed;
      overflow: hidden & . has-transition-push {
        -webkit-transform: translateX(-16em);
        transform: translateX(-16em);
      }
    }
  }

  .off-canvas {
    position: fixed;
    z-index: 12;
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    transition: transform 0.5s ease, -webkit-transform 0.5s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: #e6e6e6;

    &.is-transition-push {
      z-index: 12;
    }

    &.is-open {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    &.is-closed {
      visibility: hidden;
    }
  }

  .position-right {
    top: 0;
    right: 0;
    height: calc(100% - 4.6rem);
    margin-top: 4.6rem;
    overflow-y: auto;
    width: 100vw;
    transform: translateX(100vw);
    background: #ffffff;
    padding: 0 1em;

    a {
      color: #434343;
    }
  }

  .is-drilldown {
    position: relative;
    overflow: hidden;
    min-height: 602.984px;
    max-width: 100%;
    padding: 2.2rem .7rem;

    li {
      display: block;
      outline: none;
      
      &.-active {
        color: #000000;
      }
    }

    a {
      padding: .7rem 1.2rem;
      font-weight: 600;
      font-size: 28px;
      line-height: 64px;
      color: #000000;
    }
  }
  
  .mobile-trade {
    position: relative;
    max-width: 100%;
    padding: 0 0.7rem;
    margin-top: 10px;
    .btn {
      display: block;
      width: 100%;
      color: #FFFFFF;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      padding: 19px;
      border-radius: 30px;
    }
  }

  .mobile-nav-menu {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    &.vertical {
      flex-wrap: nowrap;
      flex-direction: column;
    }

    .invisible {
      visibility: hidden;
    }

    .nested {
      margin-right: 0;
      margin-left: 1rem;

      &.is-drilldown-submenu {
        margin-right: 0;
        margin-left: 0;
      }
    }

    a, button {
      line-height: 1;
      text-decoration: none;
      display: block;
      padding: 0.7rem 1rem;
      margin-bottom: 0;
    }

    .nav-link {
      a {
        color: #666;
      }

      &__phone {
        color: #434343;

        &:before {
          content: "";
          position: relative;
          display: inline-block;
          width: 1.25rem;
          height: 1rem;
          margin-right: 4px;
          background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjNDM0MzQzIiBkPSJNNDkzLjQgMjQuNmwtMTA0LTI0Yy0xMS4zLTIuNi0yMi45IDMuMy0yNy41IDEzLjlsLTQ4IDExMmMtNC4yIDkuOC0xLjQgMjEuMyA2LjkgMjhsNjAuNiA0OS42Yy0zNiA3Ni43LTk4LjkgMTQwLjUtMTc3LjIgMTc3LjJsLTQ5LjYtNjAuNmMtNi44LTguMy0xOC4yLTExLjEtMjgtNi45bC0xMTIgNDhDMy45IDM2Ni41LTIgMzc4LjEuNiAzODkuNGwyNCAxMDRDMjcuMSA1MDQuMiAzNi43IDUxMiA0OCA1MTJjMjU2LjEgMCA0NjQtMjA3LjUgNDY0LTQ2NCAwLTExLjItNy43LTIwLjktMTguNi0yMy40eiIvPjwvc3ZnPg==);
          background-repeat: no-repeat;
        }
      }
    }

    .nav__line {
      margin: 0.7rem 2rem 0.7rem 1rem;
      background-color: #E2E2E2;
      height: 1px;
    }

    .is-drilldown-submenu-parent {
      > a {
        position: relative;
        cursor: pointer;

        &:after {
          content: '';
          display: block;
          width: .5rem;
          height: 1rem;
          margin-top: -6px;
          top: 50%;
          position: absolute;
          right: 1rem;
          background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48cGF0aCBmaWxsPSIjNjY2IiBkPSJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHoiLz48L3N2Zz4=);
        }
      }
    }

    .is-drilldown-submenu {
      position: absolute;
      top: 0;
      left: 100%;
      z-index: -1;
      width: 100%;
      background: #ffffff;
      transform: translateX(0);
      transition: transform 0.15s linear;

      &.is-active {
        z-index: 1;
        display: block;
        transform: translateX(-100%);
        visibility: visible;
      }

      a {
        padding: 0.7rem 1rem;
      }

      .drilldown-back {
        .back-title {
          color: #9CABB5;
          font-size: 1em;
          cursor: pointer;

          &:before {
            border: 0;
            content: '';
            position: relative;
            display: inline-block;
            width: 0.5rem;
            height: 1.25rem;
            margin-right: 8px;
            padding-bottom: 3px;
            vertical-align: middle;
            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48cGF0aCBmaWxsPSIjOWNhYmI1IiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIvPjwvc3ZnPg==);
            background-repeat: no-repeat;
          }
        }
      }
    }

    .drilldown-submenu-cover-previous {
      min-height: 100%;
    }
  }

  .rating-stars {
    .star {
      position: relative;
      display: inline-block;
      height: 1em;
      width: 1em;
      margin-right: 4px;

      .icon {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        vertical-align: top;
        overflow: hidden;
        color: #FFB600;

        &:before {
          content: '';
          display: block;
          width: 1.15rem;
          height: 1rem;
          background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBmaWxsPSIjRkZCNjAwIiBkPSJNMjU5LjMgMTcuOEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNkwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDB6Ii8+PC9zdmc+);
          background-repeat: no-repeat;
        }
      }

      .icon-o {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        vertical-align: top;
        overflow: hidden;
        color: #FFB600;

        &:before {
          content: '';
          display: block;
          width: 1.15rem;
          height: 1rem;
          background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBmaWxsPSIjRkZCNjAwIiBkPSJNNTI4LjEgMTcxLjVMMzgyIDE1MC4yIDMxNi43IDE3LjhjLTExLjctMjMuNi00NS42LTIzLjktNTcuNCAwTDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42ek0zODguNiAzMTIuM2wyMy43IDEzOC40TDI4OCAzODUuNGwtMTI0LjMgNjUuMyAyMy43LTEzOC40LTEwMC42LTk4IDEzOS0yMC4yIDYyLjItMTI2IDYyLjIgMTI2IDEzOSAyMC4yLTEwMC42IDk4eiIvPjwvc3ZnPg==);
          background-repeat: no-repeat;
        }
      }
    }
  }

  @media only screen and (min-width: 40.0625em) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    h5 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 48.0625em) {
    .mobile-reverse {
      flex-direction: column-reverse;
    }
  }

  @media only screen and (max-width: 64.0625em) and (min-width: 40.0625em) {
  }

  @media only screen and (min-width: 64.0625em) {
    //1024px
    h2 {
      font-size: 2em;
      line-height: 1.25em;
    }

    h4 {
      clear: both;
      margin-top: 1.5em;
    }

    .items-with-background-image {
      .item-with-background-image {
        min-height: 320px;
        width: 100%;
        background-repeat: no-repeat;
        display: flex;

        &.left {
          background-position: left top;
        }

        &.right {
          background-position: right top;
        }
      }
    }

    .show-for-small {
      display: none;
    }

    .hide-for-small {
      display: block;
    }
  }

  @media only screen and (max-width: 64.0625em) {
    .grid-container {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
    } 
    .mobile-reverse {
      flex-direction: column-reverse;
    }
  }
`;
