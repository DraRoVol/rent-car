import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  InputContainer,
  MileageInputContainer,
  Text,
  MileageInputFrom,
  MileageInputTo,
  ButtonContainer,
} from './Filtration.styled';
import Select from 'react-select';

export default function Filtration({ onFilter }) {
  const [data, setData] = useState([]);
  const [makeFilter, setMakeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [mileageMinFilter, setMileageMinFilter] = useState('');
  const [mileageMaxFilter, setMileageMaxFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://6506fad63a38daf4803ef522.mockapi.io/adverts')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
  }, []);

  const extractPriceValue = priceString => {
    return parseFloat(priceString.replace('$', ''));
  };

  const isPriceInRange = (itemPrice, selectedPrice) => {
    return Math.abs(itemPrice - selectedPrice) <= 5;
  };

  const makeOptions = Array.from(new Set(data.map(item => item.make))).map(
    make => ({
      value: make,
      label: make,
    })
  );

  const formatNumberWithCommas = value => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleSearchClick = () => {
    let filteredData = data;

    if (makeFilter) {
      filteredData = filteredData.filter(
        item => item.make === makeFilter.value
      );
    }

    if (priceFilter) {
      const selectedPrice = extractPriceValue(priceFilter.value);
      filteredData = filteredData.filter(item =>
        isPriceInRange(extractPriceValue(item.rentalPrice), selectedPrice)
      );
    }

    if (mileageMinFilter || mileageMaxFilter) {
      if (mileageMinFilter) {
        const minMileage = parseFloat(mileageMinFilter.replace(/,/g, ''));
        filteredData = filteredData.filter(
          item => parseFloat(item.mileage.replace(/,/g, '')) >= minMileage
        );
      }

      if (mileageMaxFilter) {
        const maxMileage = parseFloat(mileageMaxFilter.replace(/,/g, ''));
        filteredData = filteredData.filter(
          item => parseFloat(item.mileage.replace(/,/g, '')) <= maxMileage
        );
      }
    }

    onFilter(filteredData);
  };

  const priceOptions = Array.from(
    { length: 48 },
    (_, index) => (index + 1) * 10 + 20
  ).map(price => ({
    value: `$${price}`,
    label: `$${price}`,
  }));

  return (
    <Container>
      <InputContainer>
        <Text>Car brand</Text>
        <Select
          options={makeOptions}
          value={makeFilter}
          onChange={setMakeFilter}
          placeholder="Enter the text"
          styles={{
            control: provided => ({
              ...provided,
              width: '224px',
              height: '48px',
              padding: '7px',
              borderRadius: '14px',
              border: '0',
              outline: 'none',
              backgroundColor: '#f7f7fb',
              fontSize: '18px',
              boxShadow: 'none',
            }),
          }}
        />
      </InputContainer>
      <InputContainer>
        <Text>Price/ 1 hour</Text>
        <Select
          options={priceOptions}
          value={priceFilter}
          onChange={setPriceFilter}
          placeholder="To $"
          styles={{
            control: provided => ({
              ...provided,
              width: '125px',
              height: '48px',
              padding: '7px',
              borderRadius: '14px',
              border: '0',
              outline: 'none',
              backgroundColor: '#f7f7fb',
              fontSize: '18px',
              boxShadow: 'none',
            }),
          }}
        />
      </InputContainer>
      <MileageInputContainer>
        <Text>Car mileage / km</Text>
        <MileageInputFrom
          type="text"
          placeholder="From"
          value={formatNumberWithCommas(mileageMinFilter)}
          onChange={e => setMileageMinFilter(e.target.value)}
        />
        <MileageInputTo
          type="text"
          placeholder="To"
          value={formatNumberWithCommas(mileageMaxFilter)}
          onChange={e => setMileageMaxFilter(e.target.value)}
        />
      </MileageInputContainer>
      <ButtonContainer onClick={handleSearchClick}>Search</ButtonContainer>
    </Container>
  );
}
