import styled from 'styled-components';

const ModalOverlay = styled.div`
  display: ${props => (props['data-open'] === 'true' ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  width: 541px;
  min-height: 752px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--primary-background-color);
`;

const CloseButton = styled.span`
  position: absolute;
  top: -2px;
  right: 15px;
  font-size: 40px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ModalImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
`;

const CarInfo = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

const CarModel = styled.span`
  font-weight: 600;
  color: var(--btn-background-color);
`;

const CarOrderInfo = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: rgb(18, 20, 23, 50%);
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 5px;
`;

const Functional = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 10px;
`;

const CarConditionContainer = styled.div`
  margin-bottom: 10px;
`;

const CarCondition = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CarConditionItem = styled.li`
  padding: 8px 20px;
  background-color: #f9f9f9;
  border-radius: 35px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const ItemSpan = styled.span`
  color: var(--btn-background-color);
  font-weight: 600;
`;

export {
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
};
