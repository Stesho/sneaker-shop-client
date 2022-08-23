import { useState } from 'react';

const useFilter = (value, setValue) => {
  const [filterParam, setFilterParam] = useState({
    minPrice: 0,
    maxPrice: 300,
    brands: [],
    sizes: [],
  });

  const filterItems = () => {
    const brands = filterParam.brands; 
    const sizes = filterParam.sizes;
    const minPrice = filterParam.minPrice;
    const maxPrice = filterParam.maxPrice;

    setValue([...value].filter((item) => {
      let condition;
      if (brands.length === 0 && sizes.length !== 0) {
        condition = sizes.some((elem) => item.sizes.indexOf(elem) !== -1)
      }
      else if (brands.length !== 0 && sizes.length === 0) {
        condition = brands.indexOf(item.brand) !== -1
      }
      else if (brands.length === 0 && sizes.length === 0) {
        condition = true;
      }
      else {
        condition = brands.indexOf(item.brand) !== -1 && sizes.some((elem) => item.sizes.indexOf(elem) !== -1)
      }
      return (
        item.price >= minPrice &&
        item.price <= maxPrice &&
        condition
      )
    }));
  }

  const addToFilter = (parameter, value) => {
    if (Array.isArray(filterParam[parameter])) {
      let newArr;
      if (filterParam[parameter].indexOf(value) === -1) {
        newArr = [...filterParam[parameter], value];
      }
      else {
        newArr = filterParam[parameter].slice();
        newArr.splice(newArr.indexOf(value), 1);
      }
      setFilterParam((currentParam) => {
        return {...currentParam, [parameter]: newArr}
      });
    }
    else {
      setFilterParam((currentParam) => {
        return {...currentParam, [parameter]: value}
      });
    }
  }

  const setDefaultFilter = () => {
    setFilterParam({
      minPrice: 0,
      maxPrice: 300,
      brands: [],
      sizes: [],
    })
  }

  return [filterItems, addToFilter, setDefaultFilter];
};

export default useFilter;