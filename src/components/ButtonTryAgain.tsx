import { useState } from 'react';
import IProps from '../types/props';

const ButtonTryAgain: React.FC<IProps> = ({ onClick }) => {
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    setHasError(true);
    if (onClick) {
      onClick();
    }
  };

  if (hasError) {
    return null;
  }

  return <button onClick={handleClick}>Fix error</button>;
};

export default ButtonTryAgain;
