
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import CoursePage from './components/CoursePage';

type Page = 'landing' | 'course';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [formData, setFormData] = useState({ name: '' });

  const handleRegistrationSuccess = (data: { name: string }) => {
    setFormData(data);
    setCurrentPage('course');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' && <LandingPage onSuccess={handleRegistrationSuccess} />}
      {currentPage === 'course' && <CoursePage studentName={formData.name} />}
    </div>
  );
};

export default App;
