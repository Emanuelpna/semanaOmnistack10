import React from 'react';

import * as S from './styled';

const FormLine = ({
  type,
  identifier,
  title,
  value,
  required,
  width,
  onChange,
  validValue = null
}) => (
  <S.InputBlock width={width}>
    <S.Label htmlFor={identifier}>{title}</S.Label>
    <S.Input
      type={type}
      name={identifier}
      id={identifier}
      value={value}
      required={required}
      onChange={onChange}
    />
  </S.InputBlock>
);

export default FormLine;
