import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>Page not found</h1>
      <button className="back-button">
        <Link to="/">Go to main page</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
