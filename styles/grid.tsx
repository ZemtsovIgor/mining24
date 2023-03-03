import { createGlobalStyle } from 'styled-components'

export const GridStyle: any = createGlobalStyle`
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
  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;

    .auto {
      flex: 1 1 0;
    }
  }

  .grid-container {
    padding-right: 1rem;
    padding-left: 1rem;
    max-width: 87rem;
    margin: 0 auto;

    &:not(.full) {
      > {
        .grid-padding-x {
          margin-right: -1rem;
          margin-left: -1rem;
        }
      }
    }
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;

    > {
      .small-shrink, .small-2, .small-5, .small-10, .small-11, .small-12 {
        flex-basis: auto;
      }

      .small-1 {
        width: 8.33333%;
      }
      .small-2 {
        width: 16.66667%;
      }
      .small-3 {
        width: 25%;
      }
      .small-4 {
        width: 33.33333%;
      }
      .small-5 {
        width: 41.66667%;
      }
      .small-6 {
        width: 50%;
      }
      .small-10 {
        width: 83.33333%;
      }
      .small-11 {
        width: 91.66667%;
      }
      .small-12 {
        width: 100%;
      }
    }
  }

  .grid-margin-x {
    margin-left: -1rem;
    margin-right: -1rem;

    > {
      .cell {
        width: calc(100% - 2rem);
        margin-left: 1rem;
        margin-right: 1rem;
      }

      .small-12 {
        width: calc(100% - 2rem);
      }
    }

    &.small-up-1 {
      > {
        .cell {
          width: calc(100% - 2rem);
        }
      }
    }

    &.small-up-2 {
      > {
        .cell {
          width: calc(50% - 2rem);
        }
      }
    }
  }

  .grid-padding-x {
    > {
      .cell {
        padding-right: 1rem;
        padding-left: 1rem;
      }
    }
  }

  .grid-margin-y {
    margin-top: -1rem;
    margin-bottom: -1rem;

    > {
      .cell {
        height: calc(100% - 2rem);
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .small-12 {
        height: calc(100% - 2rem);
      }
    }

    &:not(.grid-y) {
      > {
        .cell {
          height: auto;
        }
      }
    }
  }

  .grid-padding-y {
    > {
      .cell {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
  }
  .flex-cols, .flex-rows, .flex-rows-reverse {
    display: flex;
  }
  .flex-rows {
    flex-flow: column nowrap;
  }

  .small-up-1 {
    > {
      .cell {
        width: 100%;
      }
    }
  }

  .small-up-2 {
    > {
      .cell {
        width: 50%;
      }
    }
  }

  .large-up-3 {
    > {
      .cell {
        width: 33.33333%;
      }
    }
  }

  

  

  @media only screen and (min-width: 23.4375em) { //375px
  }

  @media only screen and (min-width: 33.75em) { //540px
  }

  @media only screen and (min-width: 40.0625em) { //640px
    .flex-rows {
      .to-cols {
        flex-direction: row;
      }
    }

    .grid-x {
      > {
        .medium-shrink, .medium-3, .medium-4, .medium-5, .medium-6, .medium-7, .medium-8, .medium-9, .medium-10, .medium-12 {
          flex-basis: auto;
        }
        .medium-shrink {
          flex: 0 0 auto;
          width: auto;
        }
        .medium-auto {
          flex: 1 1 0px;
          width: auto;
        }
        .medium-3 {
          width: 25%;
        }
        .medium-4 {
          width: 33.33333%;
        }
        .medium-5 {
          width: 41.66667%;
        }
        .medium-6 {
          width: 50%;
        }
        .medium-7 {
          width: 58.33333%;
        }
        .medium-8 {
          width: 66.66667%;
        }
        .medium-9 {
          width: 75%;
        }
        .medium-10 {
          width: 83.33333%;
        }
        .medium-12 {
          width: 100%;
        }
      }
    }

    .grid-margin-x {
      > {
        .medium-3 {
          width: calc(25% - 2rem);
        }
        .medium-4 {
          width: calc(33.33333% - 2rem);
        }
        .medium-6 {
          width: calc(50% - 2rem);
        }
        .medium-9 {
          width: calc(75% - 2rem);
        }
      }

      &.medium-up-2 {
        > {
          .cell {
            width: calc(50% - 2rem);
          }
        }
      }

      &.medium-up-3 {
        > {
          .cell {
            width: calc(33.33333% - 2rem);
          }
        }
      }
    }

    .grid-margin-y {
      > {
        .medium-12 {
          height: calc(100% - 2rem);
        }
      }
    }

    .medium-up-2 {
      > {
        .cell {
          width: 50%;
        }
      }
    }

    .medium-up-3 {
      > {
        .cell {
          width: 33.33333%;
        }
      }
    }
  }

  @media only screen and (min-width: 48.0625em) { //768px
    .grid-x {
      > {
        .large-3 {
          width: 25%;
        }
        .large-4 {
          width: 33.33333%;
        }
        .large-6 {
          width: 50%;
        }
        .large-7 {
          width: 58.33333%;
        }
        .large-8 {
          width: 66.66667%;
        }
        .large-9 {
          width: 75%;
        }
        .large-10 {
          width: 83.33333%;
        }
      }
    }

    .grid-margin-x {
      > {
        .large-4 {
          width: calc(33.33333% - 2rem);
        }
      }

      .large-up-3 {
        > {
          .cell {
            width: calc(33.33333% - 2rem);
          }
        }
      }
    }

    .large-offset-1 {
      margin-left: 8.33333%;
    }

    .large-up-3 {
      > {
        .cell {
          width: 33.33333%;
        }
      }
    }
  }

  @media only screen and (min-width: 75em) { //1025px
    
    .xlarge-offset-1 {
      margin-left: 8.33333%;
    }
    .xlarge-offset-2 {
      margin-left: 16.66667%;
    }
    .xlarge-offset-4 {
      margin-left: 33.33333%;
    }

    .grid-x {
      > {
        .large-shrink {
          flex-basis: auto;
        }
        .large-shrink {
          flex: 0 0 auto;
          width: auto;
        }
        .large-auto {
          flex: 1 1 0px;
          width: auto;
        }
        .xlarge-1 {
          width: 8.33333%;
        }
        .xlarge-3 {
          width: 25%;
        }
        .xlarge-4 {
          width: 33.33333%;
        }
        .xlarge-6 {
          width: 50%;
        }
        .xlarge-5 {
          width: 41.66667%;
        }
        .xlarge-8 {
          width: 66.66667%;
        }
        .xlarge-10 {
          width: 83.33333%;
        }
        .xlarge-11 {
          width: 91.66667%;
        }
      }
    }

    .grid-margin-y {
      > {
        .large-4 {
          height: calc(33.33333% - 2rem);
        }
      }
    }
  }

  @media only screen and (min-width: 80em) { //1280px
  }

  @media only screen and (min-width: 85.3125em) { //1365px
  }
`;
