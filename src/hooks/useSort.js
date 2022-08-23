import { useState } from 'react';

const useSort = (value, setValue) => {
  const [options, setOptions] = useState([
    {id: 1, value: 'Alphabetically, a-z', sortFunc: sortToHighByAlph},
    {id: 2, value: 'Alphabetically, z-a', sortFunc: sortToLowByAlph},
    {id: 3, value: 'Price, low to high', sortFunc: sortToHighByPrice},
    {id: 4, value: 'Price, high to low', sortFunc: sortToLowByPrice},
  ]);

  function sortToHighByAlph() {
    setValue((currentValue) => [...currentValue.sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    })]);
  }

  function sortToLowByAlph() {
    setValue((currentValue) => [...currentValue.sort((a, b) => {
      return b.brand.localeCompare(a.brand);
    })]);
  }

  function sortToHighByPrice() {
    setValue((currentValue) => [...currentValue.sort((a, b) => {
      return a.price - b.price;
    })]);
  }
  
  function sortToLowByPrice() {
    setValue((currentValue) => [...currentValue.sort((a, b) => {
      return b.price - a.price;
    })]);
  }

  return options;
};

export default useSort;