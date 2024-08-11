import IPropsErrorMessage from '../../types/ErrorMessage/propsErrorMessage';
import './errorMessage.css';

const ErrorMessage: React.FC<IPropsErrorMessage> = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
