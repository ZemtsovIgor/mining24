import styled from 'styled-components';

export const MiningListComponent:any = styled('div')`
  & .miningList {
    &__content {
      &-list {
        list-style: none;
        display: block;
        position: relative;
        margin-bottom: 3rem;
      }
      
      &-item {
        display: flex;
        align-items: center;
        margin-bottom: 1.3rem;
        
        &_text {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #060931;
        }

        &_icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1BE046;
          border-radius: 50%;
          width: 32px;
          min-width: 32px;
          height: 32px;
          margin-right: 10px;

          &:before {
            content: '';
            display: block;
            position: relative;
            width: 16px;
            height: 12px;
            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjcwOTkgMS4yMDk5OEMxNC42MTcgMS4xMTYyNSAxNC41MDY0IDEuMDQxODYgMTQuMzg0NSAwLjk5MTA5MUMxNC4yNjI3IDAuOTQwMzIzIDE0LjEzMiAwLjkxNDE4NSAxMy45OTk5IDAuOTE0MTg1QzEzLjg2NzkgMC45MTQxODUgMTMuNzM3MiAwLjk0MDMyMyAxMy42MTU0IDAuOTkxMDkxQzEzLjQ5MzUgMS4wNDE4NiAxMy4zODI5IDEuMTE2MjUgMTMuMjkgMS4yMDk5OEw1LjgzOTk1IDguNjY5OThMMi43MDk5NSA1LjUyOTk4QzIuNjEzNDMgNS40MzY3NCAyLjQ5OTQ5IDUuMzYzNDMgMi4zNzQ2MyA1LjMxNDIzQzIuMjQ5NzggNS4yNjUwMiAyLjExNjQ1IDUuMjQwODkgMS45ODIyNyA1LjI0MzIxQzEuODQ4MDkgNS4yNDU1MyAxLjcxNTY4IDUuMjc0MjYgMS41OTI2IDUuMzI3NzZDMS40Njk1MyA1LjM4MTI1IDEuMzU4MTkgNS40NTg0NiAxLjI2NDk1IDUuNTU0OThDMS4xNzE3MSA1LjY1MTUgMS4wOTg0IDUuNzY1NDUgMS4wNDkxOSA1Ljg5MDNDMC45OTk5ODkgNi4wMTUxNiAwLjk3NTg1OSA2LjE0ODQ4IDAuOTc4MTggNi4yODI2NkMwLjk4MDUwMiA2LjQxNjg0IDEuMDA5MjMgNi41NDkyNSAxLjA2MjcyIDYuNjcyMzNDMS4xMTYyMiA2Ljc5NTQxIDEuMTkzNDMgNi45MDY3NCAxLjI4OTk1IDYuOTk5OThMNS4xMjk5NSAxMC44NEM1LjIyMjkxIDEwLjkzMzcgNS4zMzM1MSAxMS4wMDgxIDUuNDU1MzcgMTEuMDU4OUM1LjU3NzIzIDExLjEwOTYgNS43MDc5NCAxMS4xMzU4IDUuODM5OTUgMTEuMTM1OEM1Ljk3MTk2IDExLjEzNTggNi4xMDI2NyAxMS4xMDk2IDYuMjI0NTMgMTEuMDU4OUM2LjM0NjM5IDExLjAwODEgNi40NTY5OSAxMC45MzM3IDYuNTQ5OTUgMTAuODRMMTQuNzA5OSAyLjY3OTk4QzE0LjgxMTUgMi41ODYzNCAxNC44OTI1IDIuNDcyNjkgMTQuOTQ3OSAyLjM0NjE5QzE1LjAwMzMgMi4yMTk2OSAxNS4wMzE5IDIuMDgzMDggMTUuMDMxOSAxLjk0NDk4QzE1LjAzMTkgMS44MDY4OCAxNS4wMDMzIDEuNjcwMjggMTQuOTQ3OSAxLjU0Mzc4QzE0Ljg5MjUgMS40MTcyOCAxNC44MTE1IDEuMzAzNjMgMTQuNzA5OSAxLjIwOTk4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==);
            background-repeat: no-repeat;
          }
        }
      }
    }

    &__btn {
      padding: 16px 24px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media only screen and (min-width: 74.9375em) {
    &.miningList {
      margin-left: 3.2rem;
      margin-top: 2rem;
    }
    & .miningList {
      &__content {
        &-list {
          margin-bottom: 4rem;
        }
        
        &-item {
          margin-bottom: 2.3rem;
          &_icon {
            margin-right: 19px;
          }
          &_text {
            font-size: 18px;
            line-height: 24px;
          }
        }
      }
    }
  }
`;
