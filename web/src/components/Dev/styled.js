import styled from 'styled-components';

export const Dev = styled.li`
  background: #fff;
  box-shadow: 0 0 12px #454a7d1a;
  border-radius: 3px;
  padding: 20px;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const DevHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const DevAvatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 100px;
`;

export const DevInfo = styled.div`
  margin-left: 10px;
`;

export const DevName = styled.strong`
  display: block;
  font-size: 16px;
  color: #453068;
`;

export const DevTechs = styled.span`
  margin-top: 2px;
  font-size: 13px;
  color: #999;
`;

export const DevBio = styled.p`
  color: #736c80;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

export const DevProfile = styled.a`
  color: #8e4dff;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #5a2ea6;
  }
`;
