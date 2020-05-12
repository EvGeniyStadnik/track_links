import {useState, useCallback} from 'react';

export const useMessage = () => {
  const [value, setMessage] = useState({
    message: ''
  });
  const showMessage = useCallback((msg) => {
    setMessage(msg)
  }, []);

  return {value, showMessage}
}