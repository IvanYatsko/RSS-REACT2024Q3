import IPropsErrorMessage from '../../types/ErrorMessage/PropsErrorMessage';
import './ErrorMessage.css';

const ErrorMessage: React.FC<IPropsErrorMessage> = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
