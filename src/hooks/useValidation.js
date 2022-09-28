import { useState, useEffect } from "react";

const useValidation = (value, validations, validationMessages) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [lengthError, setLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [message, setMessage] = useState('');
  
  const isError = () => {
    for(const validation in validations) {
      switch(validation) {
        case 'notEmpty':
          if(isEmpty) return true;
          break;
        case 'length':
          if(lengthError) return true;
          break;
        case 'isEmail':
          if(emailError) return true;
          break;
        case 'isPassword':
          if(passwordError) return true;
          break;
        default:
          break;
      }
    }

    return false;
  }

  useEffect(() => {
    let condition;
    let regexp;

    for(const validation in validations) {
      switch(validation) {
        case 'notEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true); 
          if(!value) setMessage(validationMessages[validation] || "Field can't be empty");
          break;
        case 'length':
          condition = (value.length < validations[validation].min) || (value.length > validations[validation].max);
          condition ? setLengthError(true) : setLengthError(false);
          if(condition) setMessage(validationMessages[validation] || 'Incorrect length');
          break;
        case 'isEmail':
          regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          condition = value.toLowerCase().match(regexp);
          condition ? setEmailError(false) : setEmailError(true);
          if(!condition) setMessage(validationMessages[validation] || 'Incorrect email');
          break;
        case 'isPassword':
          regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
          condition = value.toLowerCase().match(regexp);
          condition ? setPasswordError(false) : setPasswordError(true);
          if(!condition) setMessage(validationMessages[validation] || 'Password must contain at least 1 letter and 1 number');
          break;
        default:
          break;
      }
    }
  }, [value]);

  return {
    isError,
    isEmpty,
    lengthError,
    emailError,
    message
  }
}

export default useValidation;
