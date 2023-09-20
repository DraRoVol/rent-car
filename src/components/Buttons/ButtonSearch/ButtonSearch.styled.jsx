import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: 136px;
  height: 44px;
  border-radius: 12px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  font-family: var(--main-font);
  color: var(--primary-background-color);
  background-color: var(--btn-background-color);
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
   background-color: var(--btn-hover-background-color);
  }
`;

export { ButtonContainer };