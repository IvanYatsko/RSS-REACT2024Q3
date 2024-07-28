import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AppProvider } from './context/AppContext';
import router from './router/router';
import useTheme from './hooks/useTheme';

function App() {
  const { isDark } = useTheme();
  return (
    <AppProvider>
      <div className={`app ${isDark ? 'dark' : 'light'}`}>
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
