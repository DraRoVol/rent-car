import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  @media screen and (max-width: 768px) {
    
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 90px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

const StartSearchingLink = styled(Link)`
  background-color: #61dafb;
  color: white;
  padding: 7px 14px;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  font-size: 21px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a8d8;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 20px;
    font-size: 25px;
  }
`;

export { Header, Title, Paragraph, StartSearchingLink };