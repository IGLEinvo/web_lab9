import './App.css';
import React from 'react';
import Layout from './Layout/Layout'
import Home from '../Home/Home';
import Footer from './Footer/Footer'
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

      return () => clearTimeout(timeout);
    }, []);

  return (
    <div>
        {showSpinner ? (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100vh"
            }}>
                <BeatLoader color="#3e2323" size={15} loading={true} />
            </div>
        ) : (
            <>
              <Layout />
              <Home />
              <Footer />
            </>
        )}
    </div>
  );
}

export default App;
