
import Routes from "./Routes";
import React, { useState, useEffect } from 'react';
import Loader from "components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Contoh: Ambil data atau lakukan pekerjaan yang memerlukan waktu
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? <Loader /> : <Routes/>}
    </div>
  );
};





export default App;
