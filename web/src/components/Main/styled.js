import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  flex: 1;
  margin-left: 30px;
  width: 100%;

  ${media.lessThan('large')`
    margin-left: 0;
    margin-top: 30px;
  `}
`;

export const DevList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 22px;
  list-style: none;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
  `}
`;
