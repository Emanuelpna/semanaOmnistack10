import React, { createContext, useState } from 'react';
import api from '../services/api';

export const DevsContext = createContext();

const DevsContextProvider = ({ children }) => {
  const [devs, setDevs] = useState([]);

  const loadDevs = async () => {
    const response = await api.get('/devs');

    setDevs(response.data);
  };

  const addDev = async (github_username, techs, latitude, longitude) => {
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    setDevs([...devs, response.data]);
  };

  return (
    <DevsContext.Provider value={{ loadDevs, devs, addDev }}>
      {children}
    </DevsContext.Provider>
  );
};

export default DevsContextProvider;
