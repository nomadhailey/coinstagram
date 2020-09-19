import styled, { css } from 'styled-components';
import borderStyle from '../common/ThumbnailBorderStyle';

export const StyledSection = styled.section`
  height: 84px;
  padding: 16px 40px 10px 33px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  width: ${props => props.width > 1520 && 50}%;
  margin: 0 auto;

  ${props =>
    props.width < 655
      ? css`
          border: 1px solid rgb(219, 219, 219);
        `
      : css`
          box-shadow: 5px 5px 10px rgb(219, 219, 219);
        `}

  .hidden-container {
    overflow: hidden;
    height: 100%;
    padding-left: 10px;
    padding-top: 2px;
  }

  ul {
    display: flex;
    transition: transform 0.6s ease-out;
    li + li {
      margin-left: 22.5px;
    }
  }
`;

export const StyledButton = styled.button`
  div {
    position: relative;
    text-align: center;
    outline: none;
  }
  dd {
    position: absolute;
    top: 10px;
    left: -10px;
    width: 76px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${borderStyle(4)}
`;
