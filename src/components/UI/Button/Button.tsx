import IButton from '../../../types/button';

const Button: React.FC<IButton> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
