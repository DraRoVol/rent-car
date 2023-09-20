import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filtration from '../Filtration/Filtration'; // Импортируйте компонент Filtration
import {
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
} from './CarList.styled';
import ButtonLearn from '../Buttons/ButtonLearn/ButtonLearn';
import ButtonLoad from '../Buttons/ButtonLoad/ButtonLoad';
import Modal from '../Modal/Modal';

export default function CarList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteCars');
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    localStorage.setItem('favoriteCars', JSON.stringify(favorites));
  }, [favorites]);

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

  const endIndex = currentPage * itemsPerPage;
  const displayedData = data.slice(0, endIndex);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleToggleFavorite = (itemId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [itemId]: !prevFavorites[itemId],
    }));
  };

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const applyFilters = (filteredData) => {
    setData(filteredData);
  };

  return (
    <Container>
      {/* Вставьте компонент Filtration сюда */}
      <Filtration onFilter={applyFilters} data={data} setData={setData} />
      <CarCardContainer>
        {displayedData.map((item) => (
          <CarCard key={item.id}>
            <CarImgContainer>
              {favorites[item.id] ? (
                <StyledFavoriteIcon
                  onClick={() => handleToggleFavorite(item.id)}
                  data-testid="FavoriteIcon"
                />
              ) : (
                <StyledFavoriteBorderIcon
                  onClick={() => handleToggleFavorite(item.id)}
                  data-testid="FavoriteBorderIcon"
                />
              )}
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
      </CarCardContainer>
      {displayedData.length < data.length && (
        <ButtonContainer onClick={handleLoadMore}>
          <ButtonLoad />
        </ButtonContainer>
      )}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} car={selectedCar} />}
    </Container>
  );
}




