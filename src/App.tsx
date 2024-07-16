import ContentSection from './components/ContentSection/ContentSection';
import SearchSection from './components/SearchSection/SearchSection';

import { AppProvider } from './context/AppContext';

import './App.css';

function App() {
  return (
    <AppProvider>
      <SearchSection />
      <ContentSection />
    </AppProvider>
  );
}

export default App;
