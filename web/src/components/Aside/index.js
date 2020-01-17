import React, { useEffect, useState, useContext } from 'react';

import { DevsContext } from '../../context/DevsContext';

import Form from '../Form';
import FormLine from '../Form/FormLine';
import Button from '../Form/Button';

import * as S from './styled';

const Aside = ({ children }) => {
  const [username, setUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.error(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  const { addDev } = useContext(DevsContext);

  const handleAddDev = e => {
    e.preventDefault();

    addDev(username, techs, latitude, longitude);

    setUsername('');
    setTechs('');
  };

  return (
    <S.AsideContainer>
      <strong>Cadastrar</strong>
      <Form onSubmit={e => handleAddDev(e)}>
        <FormLine
          title="Usuário do Github"
          identifier="github_username"
          type="text"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <FormLine
          title="Tecnologias"
          identifier="techs"
          type="text"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
        <FormLine
          type="text"
          title="Latitude"
          identifier="latitude"
          required
          width="half"
          value={latitude}
          onChange={e => setLatitude(e.target.value)}
        />
        <FormLine
          type="text"
          title="Longitude"
          identifier="longitude"
          required
          width="half"
          value={longitude}
          onChange={e => setLongitude(e.target.value)}
        />
        <Button type="submit">Salvar</Button>
      </Form>
    </S.AsideContainer>
  );
};

export default Aside;
