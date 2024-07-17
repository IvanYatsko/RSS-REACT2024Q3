import { useState } from 'react';
import IProps from '../types/Props';

const ButtonError: React.FC<IProps> = ({ onClick }) => {
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    setHasError(true);
    if (onClick) {
      onClick();
    }
  };
  if (hasError) {
    throw new Error('This is a test error thrown intentionally!');
  }

  return (
    <button className="button-error" onClick={handleClick}>
      Check error
    </button>
  );
};

export default ButtonError;
