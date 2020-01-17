import React from 'react';

import * as S from './styled';

const Dev = ({ avatarUrl, name, techs, bio, github_username }) => (
  <S.Dev>
    <S.DevHeader>
      <S.DevAvatar src={avatarUrl} />
      <S.DevInfo>
        <S.DevName>{name}</S.DevName>
        <S.DevTechs>{techs}</S.DevTechs>
      </S.DevInfo>
    </S.DevHeader>
    <S.DevBio>{bio}</S.DevBio>
    <S.DevProfile href={`https://github.com/${github_username}`}>
      Acessar perfil no Github
    </S.DevProfile>
  </S.Dev>
);

export default Dev;
