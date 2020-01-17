import styled from 'styled-components';
import media from 'styled-media-query';

export const AsideContainer = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 12px #454a7d1a;
  border-radius: 3px;
  padding: 30px 20px;

  & strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  & form {
    margin-top: 30px;
  }

  ${media.lessThan('large')`
      width: 80%;
      margin: auto;
  `}

  ${media.lessThan('medium')`
    width: 100%;  
  `}
`;
