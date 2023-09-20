import { ButtonContainer } from './ButtonRental.styled';

export default function ButtonRental() {
  const phoneNumber = '+380730000000';

  const handleRentalClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <ButtonContainer onClick={handleRentalClick}>
      Rental car
    </ButtonContainer>
  );
}