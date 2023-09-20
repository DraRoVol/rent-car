import { ButtonContainer } from './ButtonLearn.styled';

export default function ButtonLearn({ onClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <ButtonContainer onClick={handleClick}>
      Learn more
    </ButtonContainer>
  );
};