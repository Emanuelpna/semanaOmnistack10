import React, { useEffect, useContext, useRef } from 'react';

import { DevsContext } from '../../context/DevsContext';

import Dev from '../Dev';

import * as S from './styled';

const Main = () => {
  const { devs, loadDevs } = useContext(DevsContext);

  const loadDevsOnce = useRef(loadDevs);
  
  useEffect(() => {
    loadDevsOnce.current();
  }, []);

  return (
    <S.Container>
      <S.DevList>
        {devs.map(dev => (
          <Dev
            key={dev._id}
            avatarUrl={dev.avatar_url}
            name={dev.name}
            techs={dev.techs.join(', ')}
            bio={dev.bio}
            github_username={dev.github_username}
          />
        ))}
      </S.DevList>
    </S.Container>
  );
};

export default Main;
