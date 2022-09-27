import { useState } from 'react';

const useSort = (setValue) => {
  const [options, setOptions] = useState([
    { 
      id: 1,
      value: 'Alphabetically, a-z',
      sortFunction: () => sort((a, b) => {
        return a.brand.localeCompare(b.brand);
      })
    },
    { 
      id: 2,
      value: 'Alphabetically, z-a',
      sortFunction: () => sort((a, b) => {
        return b.brand.localeCompare(a.brand);
      })
    },
    { 
      id: 3,
      value: 'Price, low to high',
      sortFunction: () => sort((a, b) => {
        return a.price - b.price;
      })
    },
    { 
      id: 4,
      value: 'Price, high to low',
      sortFunction: () => sort((a, b) => {
        return b.price - a.price;
      })
    },
  ]);
  
  function sort(compareFunction) {
    setValue((currentValue) => [...currentValue.sort(compareFunction)]);
  }

  return options;
};

export default useSort;