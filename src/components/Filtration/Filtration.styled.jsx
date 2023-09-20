import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const MileageInputContainer = styled.div`
  margin-right: 25px;
`;

const Text = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
`;

const MileageInputFrom = styled.input`
  width: 160px;
  height: 48px;
  padding: 20px;
  border-right: 1px solid rgb(138, 138, 137, 20%);
  border-radius: 14px 0 0 14px;
  outline: none;
  color: #121417;
  background-color: #f7f7fb;
  font-size: 18px;
`;

const MileageInputTo = styled.input`
  width: 160px;
  height: 48px;
  padding: 20px;
  border-radius: 0 14px 14px 0;
  outline: none;
  color: #121417;
  background-color: #f7f7fb;
  font-size: 18px;
`;

const ButtonContainer = styled.button`
  width: 136px;
  height: 44px;
  margin-top: 20px;
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

export {
  Container,
  InputContainer,
  MileageInputContainer,
  Text,
  MileageInputFrom,
  MileageInputTo,
  ButtonContainer,
};
