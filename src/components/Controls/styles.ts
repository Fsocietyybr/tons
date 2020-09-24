import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  width: 240px;
  min-height: 100vh;
  background: #f3f3f3;
  padding: 30px;
`;

export const Sticky = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 30px;
  width: 100%;
  height: calc(100vh - 60px);

  form {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 15px;

    strong {
      font-weight: 500;
      font-size: 16px;
      color: #222;
    }

    input {
      -webkit-appearance: none;
      cursor: pointer;
      margin-top: 15px;
      border: none;
      width: 50px;
      height: 50px;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: 1px solid #222;
        border-radius: 4px;
      }
    }

    button {
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #00c2ff;
      margin-top: 15px;
      padding: 0 40px;
      font-size: 18px;
      height: 50px;
      transition: background 0.4s;

      &:hover {
        background: ${shade(0.1, '#00C2FF')};
      }
    }
  }

  div {
    p {
      color: #222;
      font-size: 14px;
      text-align: center;
    }

    a {
      color: #00c2ff;
      font-weight: 700;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#00C2FF')};
      }
    }
  }
`;
