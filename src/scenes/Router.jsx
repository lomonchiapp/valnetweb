import { Route, Routes } from 'react-router-dom';
import { Footer } from './Layout/Footer';
import { Header } from './Layout/Header';
import Home from './Home';


const AppRouter = () => {
  return (

    // Browser Router lo puse en main.jsx
    <>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </>
  );
};

export default AppRouter;