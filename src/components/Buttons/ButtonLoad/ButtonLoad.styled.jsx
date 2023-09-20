import styled from 'styled-components';

const ButtonContainer = styled.button`
  border: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  font-family: var(--main-font);
  color: var(--btn-background-color);
  background-color: transparent;
  transition: color 0.3s, color 0.3s;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
   color: var(--btn-hover-background-color);
  }
`;

export { ButtonContainer };