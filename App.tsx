
import React from 'react';
import Navigation from './components/Navigation';
import StoryLetter from './components/StoryLetter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <StoryLetter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
