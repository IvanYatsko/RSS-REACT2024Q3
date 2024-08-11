import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/router';
import useTheme from './hooks/useTheme';

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
