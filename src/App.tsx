import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import PostView from './pages/PostView';

const AppContent: React.FC = () => {

  return (
    <>
      <Header />
      <main className="pt-12"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/post/:id" element={<PostView />} />
        </Routes>
      </main>
    </>
  );
};

// Wrap AppContent with Router
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
