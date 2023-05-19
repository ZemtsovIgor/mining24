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

  @font-face {
    font-family: 'Cousine';
    src: url('/staticfiles/fonts/Cousine/Cousine-Bold.eot');
    src: local('Cousine Bold'), local('Cousine-Bold'),
    url('/staticfiles/fonts/Cousine/Cousine-Bold.eot?#iefix') format('embedded-opentype'),
    url('/staticfiles/fonts/Cousine/Cousine-Bold.woff') format('woff'),
    url('/staticfiles/fonts/Cousine/Cousine-Bold.ttf') format('truetype');
    font-weight: 700;
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
    color: #060931;
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

  .h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }

  .h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
  }

  .h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
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
    color: #060931;
    text-decoration: none;
    border: 0;
  }

  a:active,
  a:hover,
  a:visited {
    outline-width: 0;
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
    white-space: nowrap;
    outline: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    color: #060931;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    padding: 11px 16px;
    background: rgba(255, 255, 255, 0.72);
    border-radius: 12px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }

    &:focus {
      background: #ffffff;
    }

    &:active {
      opacity: 0.5;
    }
  }

  .btn-green {
    background: #1BE046;
    font-weight: 700;
    color: #ffffff;

    &:hover {
      background: #58E664;
    }

    &:focus {
      background: #00CF3D;
    }

    &:active {
      opacity: 0.5;
    }
  }
  
  .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #414C78;
  }
  
  .text-green {
    color: rgba(27, 224, 70, 1);
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

  .is-open-right .title-bar .menu-icon {
    width: 32px!important;
    height: 28px!important;
    
    & .x {
      top: 0!important;
      transform: rotate(45deg);
      transition: all 100ms ease-out;
    }

    & .y {
      display: none!important;
    }

    & .z {
      top: 0!important;
      transform: rotate(135deg);
      transition: all 100ms ease-out;
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
      width: 0;
    }
  }

  .position-right {
    top: 0;
    right: 0;
    height: 100vh;
    overflow-y: auto;
    width: 100vw;
    transform: translateX(100vw);
    background: #F7F7FA;
    padding: 0 1em;
  }

  .is-drilldown {
    position: relative;
    overflow: hidden;
    min-height: calc(100vh - 7.5rem);
    max-width: 100%;

    li {
      display: block;
      outline: none;
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

  .social {
    display: flex;
    gap: 1rem;
    
    &-item {
      width: 56px;
      height: 56px;
      
      &__link {
        display: flex;
        width: 56px;
        height: 56px;
        background: #ffffff;
        border: 1px solid #EBECF1;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
        border-radius: 100px;
        transition: all 0.1s ease-in-out;

        &:hover {
          background: #F7F7FA;
        }

        &:focus {
          background: #EBECF1;
        }
      }
      
      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        &:before {
          content: '';
          display: block;
          position: relative;
          width: 20px;
          height: 20px;
        }
        
        &.-inst {
          &:before {
            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDVDOS4wMTEwOSA1IDguMDQ0MzkgNS4yOTMyNCA3LjIyMjE1IDUuODQyNjVDNi4zOTk5IDYuMzkyMDYgNS43NTkwNCA3LjE3Mjk1IDUuMzgwNiA4LjA4NjU4QzUuMDAyMTYgOS4wMDAyMSA0LjkwMzE1IDEwLjAwNTUgNS4wOTYwNyAxMC45NzU1QzUuMjg5IDExLjk0NTQgNS43NjUyIDEyLjgzNjMgNi40NjQ0NyAxMy41MzU1QzcuMTYzNzMgMTQuMjM0OCA4LjA1NDY0IDE0LjcxMSA5LjAyNDU1IDE0LjkwMzlDOS45OTQ0NSAxNS4wOTY5IDEwLjk5OTggMTQuOTk3OCAxMS45MTM0IDE0LjYxOTRDMTIuODI3IDE0LjI0MSAxMy42MDc5IDEzLjYwMDEgMTQuMTU3MyAxMi43Nzc5QzE0LjcwNjggMTEuOTU1NiAxNSAxMC45ODg5IDE1IDEwQzE1IDguNjczOTIgMTQuNDczMiA3LjQwMjE1IDEzLjUzNTUgNi40NjQ0N0MxMi41OTc5IDUuNTI2NzggMTEuMzI2MSA1IDEwIDVaTTEwIDEzQzkuNDA2NjYgMTMgOC44MjY2NCAxMi44MjQxIDguMzMzMjkgMTIuNDk0NEM3LjgzOTk0IDEyLjE2NDggNy40NTU0MiAxMS42OTYyIDcuMjI4MzYgMTEuMTQ4MUM3LjAwMTMgMTAuNTk5OSA2Ljk0MTg5IDkuOTk2NjcgNy4wNTc2NCA5LjQxNDczQzcuMTczNCA4LjgzMjc5IDcuNDU5MTIgOC4yOTgyNCA3Ljg3ODY4IDcuODc4NjhDOC4yOTgyNCA3LjQ1OTEyIDguODMyNzkgNy4xNzM0IDkuNDE0NzMgNy4wNTc2NEM5Ljk5NjY3IDYuOTQxODkgMTAuNTk5OSA3LjAwMTMgMTEuMTQ4MSA3LjIyODM2QzExLjY5NjIgNy40NTU0MiAxMi4xNjQ4IDcuODM5OTQgMTIuNDk0NCA4LjMzMzI5QzEyLjgyNDEgOC44MjY2NCAxMyA5LjQwNjY2IDEzIDEwQzEzIDEwLjc5NTYgMTIuNjgzOSAxMS41NTg3IDEyLjEyMTMgMTIuMTIxM0MxMS41NTg3IDEyLjY4MzkgMTAuNzk1NiAxMyAxMCAxM1pNMTUgNEMxNC44MDIyIDQgMTQuNjA4OSA0LjA1ODY1IDE0LjQ0NDQgNC4xNjg1M0MxNC4yOCA0LjI3ODQxIDE0LjE1MTggNC40MzQ1OSAxNC4wNzYxIDQuNjE3MzJDMTQuMDAwNCA0LjgwMDA0IDEzLjk4MDYgNS4wMDExMSAxNC4wMTkyIDUuMTk1MDlDMTQuMDU3OCA1LjM4OTA3IDE0LjE1MyA1LjU2NzI1IDE0LjI5MjkgNS43MDcxMUMxNC40MzI3IDUuODQ2OTYgMTQuNjEwOSA1Ljk0MjIgMTQuODA0OSA1Ljk4MDc5QzE0Ljk5ODkgNi4wMTkzNyAxNS4yIDUuOTk5NTcgMTUuMzgyNyA1LjkyMzg4QzE1LjU2NTQgNS44NDgxOSAxNS43MjE2IDUuNzIwMDIgMTUuODMxNSA1LjU1NTU3QzE1Ljk0MTQgNS4zOTExMiAxNiA1LjE5Nzc4IDE2IDVDMTYgNC43MzQ3OCAxNS44OTQ2IDQuNDgwNDMgMTUuNzA3MSA0LjI5Mjg5QzE1LjUxOTYgNC4xMDUzNiAxNS4yNjUyIDQgMTUgNFpNMTkuOTQgNi4yNEMxOS45MjM0IDUuMzg1NDIgMTkuNzYxMSA0LjUzOTk1IDE5LjQ2IDMuNzRDMTkuMTgwOCAzLjAxMjA3IDE4Ljc1MTYgMi4zNTA5OSAxOC4yMDAzIDEuNzk5N0MxNy42NDkgMS4yNDg0IDE2Ljk4NzkgMC44MTkyMTYgMTYuMjYgMC41NEMxNS40NjAxIDAuMjM4ODk5IDE0LjYxNDYgMC4wNzY1Njc2IDEzLjc2IDAuMDU5OTk5OUMxMi43OSAtNS41ODc5NGUtMDggMTIuNDcgMCAxMCAwQzcuNTMgMCA3LjIxIC01LjU4Nzk0ZS0wOCA2LjI0IDAuMDU5OTk5OUM1LjM4NTQyIDAuMDc2NTY3NiA0LjUzOTk1IDAuMjM4ODk5IDMuNzQgMC41NEMzLjAxMjA3IDAuODE5MjE2IDIuMzUwOTkgMS4yNDg0IDEuNzk5NyAxLjc5OTdDMS4yNDg0IDIuMzUwOTkgMC44MTkyMTYgMy4wMTIwNyAwLjU0IDMuNzRDMC4yMzg4OTkgNC41Mzk5NSAwLjA3NjU2NzYgNS4zODU0MiAwLjA1OTk5OTkgNi4yNEMtNS41ODc5NGUtMDggNy4yMiAwIDcuNTQgMCAxMEMwIDEyLjQ2IC01LjU4Nzk0ZS0wOCAxMi43OCAwLjA1OTk5OTkgMTMuNzZDMC4wNzY1Njc2IDE0LjYxNDYgMC4yMzg4OTkgMTUuNDYwMSAwLjU0IDE2LjI2QzAuODE5MjE2IDE2Ljk4NzkgMS4yNDg0IDE3LjY0OSAxLjc5OTcgMTguMjAwM0MyLjM1MDk5IDE4Ljc1MTYgMy4wMTIwNyAxOS4xODA4IDMuNzQgMTkuNDZDNC41Mzk5NSAxOS43NjExIDUuMzg1NDIgMTkuOTIzNCA2LjI0IDE5Ljk0QzcuMjQgMTkuOTQgNy41MyAyMCAxMCAyMEMxMi40NyAyMCAxMi43OSAyMCAxMy43NiAxOS45NEMxNC42MTQ2IDE5LjkyMzQgMTUuNDYwMSAxOS43NjExIDE2LjI2IDE5LjQ2QzE2Ljk4NzkgMTkuMTgwOCAxNy42NDkgMTguNzUxNiAxOC4yMDAzIDE4LjIwMDNDMTguNzUxNiAxNy42NDkgMTkuMTgwOCAxNi45ODc5IDE5LjQ2IDE2LjI2QzE5Ljc2MTEgMTUuNDYwMSAxOS45MjM0IDE0LjYxNDYgMTkuOTQgMTMuNzZDMTkuOTQgMTIuNzYgMjAgMTIuNDYgMjAgMTBDMjAgNy41NCAyMCA3LjIyIDE5Ljk0IDYuMjRaTTE3Ljk0IDEzLjY3QzE3LjkyMjUgMTQuMzA0NiAxNy44MDQzIDE0LjkzMjQgMTcuNTkgMTUuNTNDMTcuNDEyOCAxNi4wMDIzIDE3LjEzMjcgMTYuNDI5MyAxNi43NyAxNi43OEMxNi40MjE0IDE3LjE0MjggMTUuOTkzNiAxNy40MjAxIDE1LjUyIDE3LjU5QzE0LjkyMSAxNy44MTMxIDE0LjI4OSAxNy45MzQ4IDEzLjY1IDE3Ljk1QzEyLjcxIDE3Ljk1IDEyLjQyIDE4IDkuOTkgMThDNy41NiAxOCA3LjI4IDE4IDYuMzQgMThDNS43MDIwMiAxNy45ODM1IDUuMDcwNzUgMTcuODY1NCA0LjQ3IDE3LjY1QzMuOTk3NjYgMTcuNDcyOCAzLjU3MDY3IDE3LjE5MjcgMy4yMiAxNi44M0MyLjg1NzE1IDE2LjQ4MTQgMi41Nzk5MiAxNi4wNTM2IDIuNDEgMTUuNThDMi4xODc4IDE0Ljk4NDIgMi4wNjYxNSAxNC4zNTU3IDIuMDUgMTMuNzJDMi4wNSAxMi43MiAyLjA1IDEyLjQ3IDIuMDUgMTAuMDVDMi4wNSA3LjYzIDIuMDUgNy4zNCAyLjA1IDYuMzhDMi4wNjcyNCA1Ljc0MTIxIDIuMTg4ODQgNS4xMDk1NCAyLjQxIDQuNTFDMi41ODI1NiA0LjA0MDYzIDIuODU5NTMgMy42MTY2MiAzLjIyIDMuMjdDMy41Njg1OCAyLjkwNzE1IDMuOTk2NDEgMi42Mjk5MiA0LjQ3IDIuNDZDNS4wNjg5OSAyLjIzNjkgNS43MDA5OSAyLjExNTIzIDYuMzQgMi4xQzcuMjggMiA3LjU3IDIgMTAgMkMxMi40MyAyIDEyLjcyIDIgMTMuNjYgMkMxNC4zMDIxIDIuMDE2MzMgMTQuOTM3MyAyLjEzNzk0IDE1LjU0IDIuMzZDMTYuMDA5NCAyLjUzMjU2IDE2LjQzMzQgMi44MDk1MyAxNi43OCAzLjE3QzE3LjE0MjggMy41MTg1OCAxNy40MjAxIDMuOTQ2NDEgMTcuNTkgNC40MkMxNy44MzQ4IDUuMDI4NTYgMTcuOTczNSA1LjY3NDU4IDE4IDYuMzNDMTggNy4zMyAxOC4wNSA3LjU4IDE4LjA1IDEwQzE4LjA1IDEyLjQyIDE4IDEyLjcxIDE4IDEzLjY3SDE3Ljk0WiIgZmlsbD0iIzA2MDkzMSIvPgo8L3N2Zz4K);
            background-repeat: no-repeat;
          }
        }

        &.-telegram {
          &:before {
            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjk5NjEgMy40NDUzOWUtMDhDOS4wMTgyOSAzLjQ0NTM5ZS0wOCA3LjA4NDg5IDAuNTg2NDkgNS40NDA0IDEuNjg1M0MzLjc5NTkgMi43ODQxMiAyLjUxNDE4IDQuMzQ1OSAxLjc1NzMgNi4xNzMxN0MxLjAwMDQzIDguMDAwNDMgMC44MDIzOTMgMTAuMDExMSAxLjE4ODI1IDExLjk1MDlDMS41NzQxIDEzLjg5MDcgMi41MjY1MSAxNS42NzI1IDMuOTI1MDMgMTcuMDcxMUM1LjMyMzU2IDE4LjQ2OTYgNy4xMDUzOSAxOS40MjIgOS4wNDUyIDE5LjgwNzlDMTAuOTg1IDIwLjE5MzcgMTIuOTk1NyAxOS45OTU3IDE0LjgyMjkgMTkuMjM4OEMxNi42NTAyIDE4LjQ4MTkgMTguMjEyIDE3LjIwMDIgMTkuMzEwOCAxNS41NTU3QzIwLjQwOTYgMTMuOTExMiAyMC45OTYxIDExLjk3NzggMjAuOTk2MSAxMEMyMC45OTYyIDguNjg2NzUgMjAuNzM3NiA3LjM4NjM0IDIwLjIzNTEgNi4xNzMwNEMxOS43MzI2IDQuOTU5NzMgMTguOTk2IDMuODU3MyAxOC4wNjc0IDIuOTI4NjlDMTcuMTM4OCAyLjAwMDA4IDE2LjAzNjQgMS4yNjM0OSAxNC44MjMxIDAuNzYwOTgzQzEzLjYwOTggMC4yNTg0NzQgMTIuMzA5MyAtMC4wMDAxMDg5NzkgMTAuOTk2MSAzLjQ0NTM5ZS0wOFpNMTQuMTc1NiAxNS4xNTI1QzE0LjEzODIgMTUuMjQ1OCAxNC4wODEyIDE1LjMzIDE0LjAwODYgMTUuMzk5NkMxMy45MzU5IDE1LjQ2OTEgMTMuODQ5MiAxNS41MjIzIDEzLjc1NDQgMTUuNTU1NkMxMy42NTk1IDE1LjU4ODkgMTMuNTU4NiAxNS42MDE1IDEzLjQ1ODQgMTUuNTkyNkMxMy4zNTgyIDE1LjU4MzcgMTMuMjYxMSAxNS41NTM1IDEzLjE3MzYgMTUuNTA0TDEwLjQ1ODkgMTMuMzk0Nkw4LjcxNjYyIDE1LjAwMkM4LjY3NjE5IDE1LjAzMTkgOC42Mjg5IDE1LjA1MTEgOC41NzkxIDE1LjA1NzlDOC41MjkyOSAxNS4wNjQ3IDguNDc4NTggMTUuMDU4OSA4LjQzMTYyIDE1LjA0MDlMOC43NjU2MiAxMi4wNTI1TDguNzc2MzEgMTIuMDYxTDguNzgzMTQgMTIuMDAyQzguNzgzMTQgMTIuMDAyIDEzLjY2ODEgNy41NTQ0NSAxMy44NjcxIDcuMzY0OTZDMTQuMDY4NiA3LjE3NTk2IDE0LjAwMjEgNy4xMzQ5NiAxNC4wMDIxIDcuMTM0OTZDMTQuMDEzNiA2LjkwNDQzIDEzLjY0MDYgNy4xMzQ5NiAxMy42NDA2IDcuMTM0OTZMNy4xNjgxIDExLjI5OUw0LjQ3MjYxIDEwLjM4MUM0LjQ3MjYxIDEwLjM4MSA0LjA1ODYxIDEwLjIzMjUgNC4wMTk2MSA5LjkwNkMzLjk3ODYxIDkuNTgyIDQuNDg2MSA5LjQwNiA0LjQ4NjEgOS40MDZMMTUuMjAzMSA1LjE0ODQ5QzE1LjIwMzEgNS4xNDg0OSAxNi4wODQxIDQuNzU1OTcgMTYuMDg0MSA1LjQwNkwxNC4xNzU2IDE1LjE1MjVaIiBmaWxsPSIjMDYwOTMxIi8+Cjwvc3ZnPgo=);
            background-repeat: no-repeat;
          }
        }

        &.-twitter {
          &:before {
            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIuNzk5OTdDMTkuMjQ4MyAzLjEyNjA2IDE4LjQ1MzQgMy4zNDE2MyAxNy42NCAzLjQzOTk3QzE4LjQ5ODIgMi45MjcyOSAxOS4xNDEzIDIuMTIwNzUgMTkuNDUgMS4xNjk5N0MxOC42NDM2IDEuNjUwMDMgMTcuNzYwOCAxLjk4ODI2IDE2Ljg0IDIuMTY5OTdDMTYuMjI0NSAxLjUwMjU0IDE1LjQwNSAxLjA1ODI2IDE0LjUwOTggMC45MDY4MTdDMTMuNjE0NyAwLjc1NTM3MiAxMi42OTQ1IDAuOTA1MzI0IDExLjg5MzggMS4zMzMxNUMxMS4wOTMgMS43NjA5OSAxMC40NTY5IDIuNDQyNSAxMC4wODUyIDMuMjcwOEM5LjcxMzU1IDQuMDk5MTEgOS42MjcyOSA1LjAyNzM2IDkuODQgNS45MDk5N0M4LjIwOTQzIDUuODI3NDkgNi42MTQ0NCA1LjQwMjkyIDUuMTU4NjUgNC42NjM4M0MzLjcwMjg3IDMuOTI0NzQgMi40MTg4NSAyLjg4NzY2IDEuMzkgMS42MTk5N0MxLjAyOTE0IDIuMjUwMTMgMC44Mzk1MTkgMi45NjM3OSAwLjg0IDMuNjg5OTdDMC44Mzg3MiA0LjM2NDM1IDEuMDA0MjIgNS4wMjg1OCAxLjMyMTc2IDUuNjIzNTNDMS42MzkyOSA2LjIxODQ4IDIuMDk5MDIgNi43MjU2OCAyLjY2IDcuMDk5OTdDMi4wMDc5OCA3LjA4MjIyIDEuMzY5ODkgNi45MDcyNiAwLjggNi41ODk5N1Y2LjYzOTk3QzAuODA0ODg3IDcuNTg0ODYgMS4xMzU5OSA4LjQ5OTA2IDEuNzM3MzEgOS4yMjc5M0MyLjMzODY0IDkuOTU2OCAzLjE3MzI2IDEwLjQ1NTYgNC4xIDEwLjY0QzMuNzQzMjYgMTAuNzQ4NSAzLjM3Mjg3IDEwLjgwNTggMyAxMC44MUMyLjc0MTg5IDEwLjgwNyAyLjQ4NDQyIDEwLjc4MzUgMi4yMyAxMC43NEMyLjQ5MzkxIDExLjU1MjggMy4wMDQ2MiAxMi4yNjMxIDMuNjkxMDcgMTIuNzcyMUM0LjM3NzUzIDEzLjI4MTEgNS4yMDU1OCAxMy41NjM1IDYuMDYgMTMuNThDNC42MTcyIDE0LjcxNTIgMi44MzU4OCAxNS4zMzQ4IDEgMTUuMzRDMC42NjU3MzUgMTUuMzQxMSAwLjMzMTczNiAxNS4zMjEgMCAxNS4yOEMxLjg3NDQzIDE2LjQ5MDIgNC4wNTg4MSAxNy4xMzI3IDYuMjkgMTcuMTNDNy44Mjk2OSAxNy4xNDYgOS4zNTcxNCAxNi44NTUgMTAuNzgzMSAxNi4yNzRDMTIuMjA5MSAxNS42OTMxIDEzLjUwNSAxNC44MzM4IDE0LjU5NTIgMTMuNzQ2NUMxNS42ODU0IDEyLjY1OTEgMTYuNTQ4IDExLjM2NTQgMTcuMTMyNiA5Ljk0MDg3QzE3LjcxNzIgOC41MTYzOSAxOC4wMTIgNi45ODk2OSAxOCA1LjQ0OTk3QzE4IDUuMjc5OTYgMTggNS4wOTk5NyAxOCA0LjkxOTk3QzE4Ljc4NDcgNC4zMzQ3OCAxOS40NjE1IDMuNjE3MzkgMjAgMi43OTk5N1oiIGZpbGw9IiMwNjA5MzEiLz4KPC9zdmc+Cg==);
            background-repeat: no-repeat;
          }
        }
      }
    }
  }

  .rating-stars {
    .star {
      position: relative;
      display: inline-block;
      height: 1em;
      width: 1em;
      margin-right: 6px;

      .icon {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        vertical-align: top;
        overflow: hidden;
        color: #6629EF;

        &:before {
          content: '';
          display: block;
          width: 1.15rem;
          height: 1rem;
          background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjMzMzIgNi4wNTg0NUMxNy4yODA2IDUuOTA2MDMgMTcuMTg0OSA1Ljc3MjE0IDE3LjA1NzcgNS42NzMwNEMxNi45MzA1IDUuNTczOTQgMTYuNzc3MiA1LjUxMzg3IDE2LjYxNjYgNS41MDAxMkwxMS44NzQ5IDQuODA4NDVMOS43NDk5IDAuNTAwMTIxQzkuNjgxNjYgMC4zNTkyMjggOS41NzUxMiAwLjI0MDQwNiA5LjQ0MjQ3IDAuMTU3MjY2QzkuMzA5ODMgMC4wNzQxMjUxIDkuMTU2NDUgMC4wMzAwMjkzIDguOTk5OSAwLjAzMDAyOTNDOC44NDMzNSAwLjAzMDAyOTMgOC42ODk5NyAwLjA3NDEyNTEgOC41NTczMyAwLjE1NzI2NkM4LjQyNDY4IDAuMjQwNDA2IDguMzE4MTQgMC4zNTkyMjggOC4yNDk5IDAuNTAwMTIxTDYuMTI0OSA0LjgwMDEyTDEuMzgzMjMgNS41MDAxMkMxLjIyOSA1LjUyMjA0IDEuMDg0IDUuNTg2NzYgMC45NjQ2OTIgNS42ODY5MkMwLjg0NTM4IDUuNzg3MDggMC43NTY1MzMgNS45MTg2OCAwLjcwODIzMyA2LjA2Njc5QzAuNjY0MDIxIDYuMjExNTIgMC42NjAwNTMgNi4zNjU1NSAwLjY5Njc1NiA2LjUxMjM3QzAuNzMzNDU5IDYuNjU5MTggMC44MDk0NDggNi43OTMyMyAwLjkxNjU2NyA2LjkwMDEyTDQuMzU4MjMgMTAuMjMzNUwzLjUyNDkgMTQuOTY2OEMzLjQ5NTE1IDE1LjEyMyAzLjUxMDczIDE1LjI4NDUgMy41Njk3OSAxNS40MzIyQzMuNjI4ODYgMTUuNTc5OCAzLjcyODk0IDE1LjcwNzUgMy44NTgyMyAxNS44MDAxQzMuOTg0MjUgMTUuODkwMiA0LjEzMjg4IDE1Ljk0MzQgNC4yODc0NCAxNS45NTM3QzQuNDQyIDE1Ljk2NCA0LjU5NjM4IDE1LjkzMSA0LjczMzIzIDE1Ljg1ODVMOC45OTk5IDEzLjYzMzVMMTMuMjQ5OSAxNS44NjY4QzEzLjM2NjkgMTUuOTMyOCAxMy40OTkgMTUuOTY3MiAxMy42MzMyIDE1Ljk2NjhDMTMuODA5OCAxNS45Njc0IDEzLjk4MTkgMTUuOTEyIDE0LjEyNDkgMTUuODA4NUMxNC4yNTQyIDE1LjcxNTggMTQuMzU0MyAxNS41ODgyIDE0LjQxMzMgMTUuNDQwNUMxNC40NzI0IDE1LjI5MjggMTQuNDg4IDE1LjEzMTQgMTQuNDU4MiAxNC45NzUxTDEzLjYyNDkgMTAuMjQxOEwxNy4wNjY2IDYuOTA4NDVDMTcuMTg2OSA2LjgwNjUyIDE3LjI3NTggNi42NzI1NCAxNy4zMjMgNi41MjIwOEMxNy4zNzAyIDYuMzcxNjIgMTcuMzczOCA2LjIxMDg1IDE3LjMzMzIgNi4wNTg0NVoiIGZpbGw9IiM2NjI5RUYiLz4KPC9zdmc+Cg==);
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
        color: #6629EF;

        &:before {
          content: '';
          display: block;
          width: 1.15rem;
          height: 1rem;
          background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjMzMzIgNi4wNTg0NUMxNy4yODA2IDUuOTA2MDMgMTcuMTg0OSA1Ljc3MjE0IDE3LjA1NzcgNS42NzMwNEMxNi45MzA1IDUuNTczOTQgMTYuNzc3MiA1LjUxMzg3IDE2LjYxNjYgNS41MDAxMkwxMS44NzQ5IDQuODA4NDVMOS43NDk5IDAuNTAwMTIxQzkuNjgxNjYgMC4zNTkyMjggOS41NzUxMiAwLjI0MDQwNiA5LjQ0MjQ3IDAuMTU3MjY2QzkuMzA5ODMgMC4wNzQxMjUxIDkuMTU2NDUgMC4wMzAwMjkzIDguOTk5OSAwLjAzMDAyOTNDOC44NDMzNSAwLjAzMDAyOTMgOC42ODk5NyAwLjA3NDEyNTEgOC41NTczMyAwLjE1NzI2NkM4LjQyNDY4IDAuMjQwNDA2IDguMzE4MTQgMC4zNTkyMjggOC4yNDk5IDAuNTAwMTIxTDYuMTI0OSA0LjgwMDEyTDEuMzgzMjMgNS41MDAxMkMxLjIyOSA1LjUyMjA0IDEuMDg0IDUuNTg2NzYgMC45NjQ2OTIgNS42ODY5MkMwLjg0NTM4IDUuNzg3MDggMC43NTY1MzMgNS45MTg2OCAwLjcwODIzMyA2LjA2Njc5QzAuNjY0MDIxIDYuMjExNTIgMC42NjAwNTMgNi4zNjU1NSAwLjY5Njc1NiA2LjUxMjM3QzAuNzMzNDU5IDYuNjU5MTggMC44MDk0NDggNi43OTMyMyAwLjkxNjU2NyA2LjkwMDEyTDQuMzU4MjMgMTAuMjMzNUwzLjUyNDkgMTQuOTY2OEMzLjQ5NTE1IDE1LjEyMyAzLjUxMDczIDE1LjI4NDUgMy41Njk3OSAxNS40MzIyQzMuNjI4ODYgMTUuNTc5OCAzLjcyODk0IDE1LjcwNzUgMy44NTgyMyAxNS44MDAxQzMuOTg0MjUgMTUuODkwMiA0LjEzMjg4IDE1Ljk0MzQgNC4yODc0NCAxNS45NTM3QzQuNDQyIDE1Ljk2NCA0LjU5NjM4IDE1LjkzMSA0LjczMzIzIDE1Ljg1ODVMOC45OTk5IDEzLjYzMzVMMTMuMjQ5OSAxNS44NjY4QzEzLjM2NjkgMTUuOTMyOCAxMy40OTkgMTUuOTY3MiAxMy42MzMyIDE1Ljk2NjhDMTMuODA5OCAxNS45Njc0IDEzLjk4MTkgMTUuOTEyIDE0LjEyNDkgMTUuODA4NUMxNC4yNTQyIDE1LjcxNTggMTQuMzU0MyAxNS41ODgyIDE0LjQxMzMgMTUuNDQwNUMxNC40NzI0IDE1LjI5MjggMTQuNDg4IDE1LjEzMTQgMTQuNDU4MiAxNC45NzUxTDEzLjYyNDkgMTAuMjQxOEwxNy4wNjY2IDYuOTA4NDVDMTcuMTg2OSA2LjgwNjUyIDE3LjI3NTggNi42NzI1NCAxNy4zMjMgNi41MjIwOEMxNy4zNzAyIDYuMzcxNjIgMTcuMzczOCA2LjIxMDg1IDE3LjMzMzIgNi4wNTg0NVpNMTIuMjA4MiA5LjM5MTc5QzEyLjExMDUgOS40ODYzMiAxMi4wMzc0IDkuNjAzMzIgMTEuOTk1MyA5LjczMjZDMTEuOTUzMSA5Ljg2MTg4IDExLjk0MzMgOS45OTk1IDExLjk2NjYgMTAuMTMzNUwxMi41NjY2IDEzLjYyNTFMOS40MzMyMyAxMS45NTg1QzkuMzEyNjYgMTEuODk0MyA5LjE3ODE2IDExLjg2MDcgOS4wNDE1NyAxMS44NjA3QzguOTA0OTcgMTEuODYwNyA4Ljc3MDQ3IDExLjg5NDMgOC42NDk5IDExLjk1ODVMNS41MTY1NyAxMy42MjUxTDYuMTE2NTcgMTAuMTMzNUM2LjEzOTg1IDkuOTk5NSA2LjEyOTk5IDkuODYxODggNi4wODc4NyA5LjczMjZDNi4wNDU3NSA5LjYwMzMyIDUuOTcyNjMgOS40ODYzMiA1Ljg3NDkgOS4zOTE3OUwzLjM3NDkgNi44OTE3OUw2Ljg4MzIzIDYuMzgzNDVDNy4wMTgyMyA2LjM2NDY4IDcuMTQ2NTYgNi4zMTMwNyA3LjI1Njk4IDYuMjMzMTZDNy4zNjc0IDYuMTUzMjYgNy40NTY1MyA2LjA0NzQ5IDcuNTE2NTcgNS45MjUxMkw4Ljk5OTkgMi43NTAxMkwxMC41NjY2IDUuOTMzNDVDMTAuNjI2NiA2LjA1NTgyIDEwLjcxNTcgNi4xNjE1OSAxMC44MjYyIDYuMjQxNUMxMC45MzY2IDYuMzIxNDEgMTEuMDY0OSA2LjM3MzAxIDExLjE5OTkgNi4zOTE3OUwxNC43MDgyIDYuOTAwMTJMMTIuMjA4MiA5LjM5MTc5WiIgZmlsbD0iIzY2MjlFRiIvPgo8L3N2Zz4K);
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

  @media only screen and (max-width: 47.9375em) {
    .btn {
      display: block;
      
      &-wrap {
        display: block;
        width: 100%;
      }
    }

    .social {
      justify-content: center;
    }
  
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

    

    .hide-for-small {
      display: block;
    }
  }

  @media only screen and (max-width: 64em) {
    .mobile-reverse {
      flex-direction: column-reverse;
    }
    
  }

  @media only screen and (min-width: 74.9375em) {
    .show-for-small {
      display: none;
    }

    .h1 {
      font-weight: 700;
      font-size: 56px;
      line-height: 72px;
      letter-spacing: 0.5px;
    }

    .h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 56px;
    }

    .h3 {
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
    }

    .text {
      font-size: 20px;
      line-height: 28px;
    }
    
    .btn {
      padding: 16px 24px;
      font-size: 18px;
      line-height: 24px;
    }

    .social {
      margin-right: 0;
      margin-bottom: 2.5rem;
      
      &-item {
        margin-top: 1rem;
        
        &__link {

        }
      }
    }
  }

  @media only screen and (max-width: 74.9375em) {
    .hide-for-small {
      display: none!important;
    }
  }
`;
