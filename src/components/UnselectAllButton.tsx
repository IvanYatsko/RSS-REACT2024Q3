import IButton from '../types/button';
import Button from './UI/Button/Button';

const UnselectAllButton: React.FC<IButton> = ({ onClick }) => {
  return <Button onClick={onClick} children="Unselect all" />;
};

export default UnselectAllButton;
