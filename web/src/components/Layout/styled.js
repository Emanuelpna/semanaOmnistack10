import styled from 'styled-components';
import media from 'styled-media-query'

export const App = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  
  ${media.lessThan("large")`
    flex-flow: column nowrap;
  `}

`;