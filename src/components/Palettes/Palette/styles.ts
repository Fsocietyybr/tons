import styled, { css } from 'styled-components';
import { shade, getLuminance } from 'polished';

type ColorProps = {
  background: string;
  isBase: boolean;
};

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100px;

  & + & {
    margin-top: 15px;
  }
`;

export const Colors = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
`;

export const Color = styled.div<ColorProps>`
  flex: 1;
  position: relative;
  cursor: pointer;

  & * {
    cursor: pointer;
  }

  &:hover {
    flex: 3;

    span {
      display: initial;
    }
  }

  span {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    display: none;
    font-size: 14px;
    font-weight: 600;
  }

  ${props => css`
    background: ${props.background};

    span {
      color: ${getLuminance(props.background) < 0.7 ? '#fff' : '#333'};
    }
  `}

  ${props =>
    props.isBase &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 50%;
        border-color: ${getLuminance(props.background) < 0.7 ? '#fff' : '#333'}
          transparent;
        border-style: solid;
        border-width: 6px 6px 0 6px;

        transform: translateX(-50%);
      }
    `}
`;

export const SideMenu = styled.div`
  color: #e5e5e5;
  flex-shrink: 0;
  padding: 10px 0;
  border: 1px solid;
  border-left: 0;
  border-radius: 0 8px 8px 0;
  width: 45px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  svg {
    color: inherit;
    cursor: pointer;

    & * {
      cursor: pointer;
    }

    &:hover {
      color: ${shade(0.2, '#e5e5e5')};
    }
  }
`;
