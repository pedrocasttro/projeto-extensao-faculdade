
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import CoursePage from './components/CoursePage';

type Page = 'landing' | 'course';

const App: React.FC = () => {
  const getInitialState = () => {
    try {
      const isRegistered = localStorage.getItem('isRegistered') === 'true';
      const studentName = localStorage.getItem('studentName') || '';

      if (isRegistered && studentName) {
        return {
          page: 'course' as Page,
          data: { name: studentName },
        };
      }
    } catch (error) {
      console.error("Failed to read from localStorage", error);
    }
    
    return {
      page: 'landing' as Page,
      data: { name: '' },
    };
  };

  const initialState = getInitialState();
  const [currentPage, setCurrentPage] = useState<Page>(initialState.page);
  const [formData, setFormData] = useState(initialState.data);

  const handleRegistrationSuccess = (data: { name: string }) => {
    try {
        localStorage.setItem('isRegistered', 'true');
        localStorage.setItem('studentName', data.name);
    } catch (error) {
        console.error("Failed to write to localStorage", error);
    }
    
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