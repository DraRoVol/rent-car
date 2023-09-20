import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  StyledFavoriteIcon,
  CarCardContainer,
  CarCard,
  CarImgContainer,
  CarImg,
  CarInfoContainer,
  CarInfo,
  CarModel,
  CarOrderInfo,
} from './CarList.styled';
import ButtonLearn from '../Buttons/ButtonLearn/ButtonLearn';
import Modal from '../Modal/Modal';

export default function CarListFavorite() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [favoriteData, setFavoriteData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const localStorageKey = 'favoriteCars';

  useEffect(() => {
    const storedFavorites = localStorage.getItem(localStorageKey);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    axios
      .get('https://6506fad63a38daf4803ef522.mockapi.io/adverts')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Произошла ошибка:', error);
      });
  }, []);

  useEffect(() => {
    const favoriteItems = data.filter((item) => favorites[item.id]);
    setFavoriteData(favoriteItems);
  }, [data, favorites]);

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removeCarFromFavorites = (carId) => {
    const updatedFavorites = { ...favorites };
    delete updatedFavorites[carId];
    setFavorites(updatedFavorites);

    // Сохраняем обновленное состояние избранного в локальном хранилище
    localStorage.setItem(localStorageKey, JSON.stringify(updatedFavorites));

    // Обновляем список избранных данных
    const updatedFavoriteData = data.filter((item) => updatedFavorites[item.id]);
    setFavoriteData(updatedFavoriteData);
  };

  return (
    <CarCardContainer>
      {favoriteData.map((item) => (
        <CarCard key={item.id}>
          <CarImgContainer>
            <StyledFavoriteIcon
              data-testid="FavoriteIcon"
              onClick={() => removeCarFromFavorites(item.id)} // Добавляем обработчик для удаления из избранного
            />
            <CarImg src={item.img} alt="Car" />
          </CarImgContainer>
          <CarInfoContainer>
            <CarInfo>
              <p>
                {item.make} <CarModel>{item.models}</CarModel>, {item.year}
              </p>
              <p>{item.rentalPrice}</p>
            </CarInfo>
            <CarOrderInfo>
              <p>
                {item.address} | {item.rentalCompany} {item.premium}
              </p>
              <p>
                {item.type} | {item.model} | {item.id} | {item.func}
              </p>
            </CarOrderInfo>
          </CarInfoContainer>
          <ButtonLearn onClick={() => openModal(item)} />
        </CarCard>
      ))}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} car={selectedCar} />
      )}
    </CarCardContainer>
  );
}



