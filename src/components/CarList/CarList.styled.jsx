import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 18px;
  color: var(--primary-background-color);
  cursor: pointer;
`;

const StyledFavoriteIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 18px;
  color: var(--btn-background-color);
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  margin-bottom: 95px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarCardContainer = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  max-width: 1184px;
  margin: 0 auto 95px;
  padding-top: 50px;
`;

const CarCard = styled.li`
  width: 274px;
  list-style-type: none;
`;

const CarImgContainer = styled.div`
  position: relative;
`;

const CarImg = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

const CarInfoContainer = styled.div`
  margin-bottom: 28px;
`;

const CarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #121417;
`;

const CarModel = styled.span`
  color: var(--btn-background-color);
`;

const CarOrderInfo = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: rgb(18, 20, 23, 50%);
`;

export {
  StyledFavoriteBorderIcon,
  StyledFavoriteIcon,
  ButtonContainer,
  Container,
  CarCardContainer,
  CarCard,
  CarImgContainer,
  CarImg,
  CarInfoContainer,
  CarInfo,
  CarModel,
  CarOrderInfo,
};
