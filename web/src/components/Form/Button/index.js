import React from 'react';

import * as S from "./styled"

const Button = ({ children, type }) => <S.Button type={type}>{children}</S.Button>;

export default Button;
