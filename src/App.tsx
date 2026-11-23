import { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './screens/HomeScreen';
import { StyleGuideScreen } from './screens/StyleGuideScreen';
import { ScreenId } from './types';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const getInitialScreen = (): ScreenId => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const pathname = window.location.pathname.toLowerCase();
      const search = new URLSearchParams(window.location.search);
      if (
        hash === '#styleguide' ||
        pathname === '/styleguide' ||
        search.get('screen') === 'styleguide'
      ) {
        return 'styleguide';
      }
    }
    return 'home';
  };

  const [activeScreen, setActiveScreen] = useState<ScreenId>(getInitialScreen);

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const pathname = window.location.pathname.toLowerCase();
      const search = new URLSearchParams(window.location.search);
      if (
        hash === '#styleguide' ||
        pathname === '/styleguide' ||
        search.get('screen') === 'styleguide'
      ) {
        setActiveScreen('styleguide');
      } else if (hash === '' || hash === '#home' || hash.startsWith('#')) {
        // Sections on the home screen
        setActiveScreen('home');
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleNavigate = (screen: ScreenId) => {
    setActiveScreen(screen);
    if (screen === 'styleguide') {
      window.location.hash = 'styleguide';
    } else {
      if (window.location.hash.toLowerCase() === '#styleguide') {
        history.pushState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111111]">
        <Navbar
          activeScreen={activeScreen}
          onNavigate={handleNavigate}
        />

        <main className="flex-grow">
          {activeScreen === 'home' && (
            <HomeScreen onNavigate={handleNavigate} />
          )}
          {activeScreen === 'styleguide' && (
            <StyleGuideScreen />
          )}
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
}
