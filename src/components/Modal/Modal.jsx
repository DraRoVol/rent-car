import { useEffect, useCallback, useRef } from 'react';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Container,
  ModalImg,
  CarInfo,
  CarModel,
  CarOrderInfo,
  Description,
  Functional,
  CarConditionContainer,
  CarCondition,
  CarConditionItem,
  ItemSpan,
} from './Modal.styled';
import ButtonRental from '../Buttons/ButtonRental/ButtonRental';

export default function Modal({ isOpen, onClose, car }) {
  const modalRef = useRef();

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleClickOutside = useCallback(
    e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      if (isOpen) {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('click', handleClickOutside);
      }
    };
  }, [isOpen, handleKeyDown, handleClickOutside]);

  return (
    <ModalOverlay data-open={isOpen ? 'true' : 'false'}>
      <ModalContent ref={modalRef}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {car && (
          <Container>
            <ModalImg src={car.img} alt="car" />
            <CarInfo>
              {car.make} <CarModel>{car.models}</CarModel>, {car.year}
            </CarInfo>
            <CarOrderInfo>
              <p>
                {car.address} | id: {car.id} | Year: {car.year} | Type:{' '}
                {car.type}
              </p>
              <p>
                Fuel Consumption: {car.fuelConsumption} | Engine Size:{' '}
                {car.engineSize}
              </p>
            </CarOrderInfo>
            <Description>{car.description}</Description>
            <div>
              <Functional>Accessories and functionalities:</Functional>
              <CarOrderInfo>
                <p>
                  {car.accessories[0]} | {car.accessories[1]} |{' '}
                  {car.accessories[2]}
                </p>
                <p>
                  {car.functionalities[0]} | {car.functionalities[1]} |{' '}
                  {car.functionalities[2]}
                </p>
              </CarOrderInfo>
            </div>
            <CarConditionContainer>
              <Functional>Rental Conditions:</Functional>
              <CarCondition>
                <CarConditionItem>
                  Minimum age: <ItemSpan>{car.minimumAge}</ItemSpan>
                </CarConditionItem>
                <CarConditionItem>{car.rentalConditions[0]}</CarConditionItem>
                <CarConditionItem>{car.rentalConditions[1]}</CarConditionItem>
                <CarConditionItem>
                  Mileage: <ItemSpan>{car.mileage}</ItemSpan>
                </CarConditionItem>
                <CarConditionItem>
                  Price: <ItemSpan>{car.rentalPrice}</ItemSpan>
                </CarConditionItem>
              </CarCondition>
            </CarConditionContainer>
            <ButtonRental />
          </Container>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}
