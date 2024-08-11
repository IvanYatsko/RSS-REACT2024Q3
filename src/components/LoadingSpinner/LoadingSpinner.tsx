import loadingGif from '../../assets/loading-spinner.gif';
import './loadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner_container">
      <img src={loadingGif} alt="Loading" className="loading-spinner_img" />
    </div>
  );
};

export default LoadingSpinner;
