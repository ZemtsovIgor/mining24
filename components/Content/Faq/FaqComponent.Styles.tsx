import styled from 'styled-components';

export const FaqComponent:any = styled('section')`
  &.faq {
    margin-bottom: 0;
  }
  
  .faq-container {
    padding: 24px 16px 5px 16px;
    background: conic-gradient(from 259.1deg at 109.71% 44.17%, rgba(250, 225, 0, 0.13) -67.77deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 130, 250, 0.13) 244.86deg, rgba(250, 225, 0, 0.13) 292.23deg, rgba(255, 255, 255, 0) 365.23deg), #F5F9FF;
    border-radius: 12px;
  }
  
  .faq__title {
    .h2 {
      margin-bottom: 2.3rem;
    }
  }

  .faq-question {
    width: 100%;
    list-style: none;
    padding: 0 7px;
  }

  .faq__question {
    background: 0;
    border: 0;
    cursor: pointer;
    margin-bottom: 1.5rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    outline: 0;
    padding-right: 0;
    margin-top: 0;

    .faq__question_wrap {
      align-items: center;
    }

    .question {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #060931;
    }

    .icon {
      position: relative;
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
      width: 8px;
      height: 12px;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02LjgzMDE5IDUuMjg5OTVMMi41OTAxOSAxLjA0OTk1QzIuNDk3MjIgMC45NTYyMiAyLjM4NjYyIDAuODgxODI2IDIuMjY0NzYgMC44MzEwNTdDMi4xNDI5IDAuNzgwMjg4IDIuMDEyMiAwLjc1NDE1IDEuODgwMTkgMC43NTQxNUMxLjc0ODE4IDAuNzU0MTUgMS42MTc0NyAwLjc4MDI4OCAxLjQ5NTYxIDAuODMxMDU3QzEuMzczNzUgMC44ODE4MjYgMS4yNjMxNSAwLjk1NjIyIDEuMTcwMTkgMS4wNDk5NUMwLjk4MzkzNiAxLjIzNzMxIDAuODc5Mzk1IDEuNDkwNzYgMC44NzkzOTUgMS43NTQ5NUMwLjg3OTM5NSAyLjAxOTEzIDAuOTgzOTM2IDIuMjcyNTkgMS4xNzAxOSAyLjQ1OTk1TDQuNzEwMTkgNS45OTk5NUwxLjE3MDE5IDkuNTM5OTVDMC45ODM5MzYgOS43MjczMSAwLjg3OTM5NSA5Ljk4MDc2IDAuODc5Mzk1IDEwLjI0NDlDMC44NzkzOTUgMTAuNTA5MSAwLjk4MzkzNiAxMC43NjI2IDEuMTcwMTkgMTAuOTQ5OUMxLjI2MzYzIDExLjA0MjYgMS4zNzQ0NCAxMS4xMTYgMS40OTYyOCAxMS4xNjU3QzEuNjE4MTIgMTEuMjE1NSAxLjc0ODU4IDExLjI0MDcgMS44ODAxOSAxMS4yMzk5QzIuMDExNzkgMTEuMjQwNyAyLjE0MjI2IDExLjIxNTUgMi4yNjQwOSAxMS4xNjU3QzIuMzg1OTMgMTEuMTE2IDIuNDk2NzUgMTEuMDQyNiAyLjU5MDE5IDEwLjk0OTlMNi44MzAxOSA2LjcwOTk1QzYuOTIzOTIgNi42MTY5OSA2Ljk5ODMxIDYuNTA2MzggNy4wNDkwOCA2LjM4NDUzQzcuMDk5ODUgNi4yNjI2NyA3LjEyNTk5IDYuMTMxOTYgNy4xMjU5OSA1Ljk5OTk1QzcuMTI1OTkgNS44Njc5NCA3LjA5OTg1IDUuNzM3MjMgNy4wNDkwOCA1LjYxNTM3QzYuOTk4MzEgNS40OTM1MSA2LjkyMzkyIDUuMzgyOTEgNi44MzAxOSA1LjI4OTk1WiIgZmlsbD0iIzY2MjlFRiIvPgo8L3N2Zz4K);
      background-repeat: no-repeat;
      transition: 0.5s;
      transform: rotate(90deg);
      margin-right: 15px;
    }
  }

  .faq__answer {
    height: auto;
    overflow: hidden;
    font-size: initial;
    padding-left: 1.5rem;
    margin-bottom: 1.6rem;
    margin-top: -0.5rem;
    transition: all 0.5s ease-in-out;

    .text {
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      color: #414C78;
    }
  }

  .faq-question-col {
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
    
    &::marker {
      font-size: 0;
    }

    &.-hidden {
      .icon {
        transform: rotate(0deg);
      }

      .faq__answer {
        height: 0;
        margin-bottom: 0;
      }
      
      .faq__question .question {
        font-weight: 400;
      }
    }
  }

  @media only screen and (min-width: 74.9375em) {
    .faq {
      &__title {
        .h2 {
          margin-bottom: 3rem;
        }
      }
      
      &-container {
        padding: 48px 48px 15px 48px;
      }
      
      &__question {
        margin-bottom: 2.5rem;
        
        .icon {
          margin-right: 19px;
        }
        .question {
          font-size: 22px;
          line-height: 28px;
        }
      }
    }
  }
`;
