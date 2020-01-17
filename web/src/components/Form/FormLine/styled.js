import styled from 'styled-components';

export const InputBlock = styled.div`
  margin-top: 20px;

  width: ${props => (props.width === 'half' ? '45%' : '100%')};

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  color: #6c6579;
  font-size: 0.85rem;
  font-weight: bold;
  display: block;
  letter-spacing: 0.025em;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 2px solid #b6b5b7;

  &:hover {
    border-bottom-color: #6c696f;
  }

  &:focus {
    border-bottom-color: #7d40e7;
  }

`;
