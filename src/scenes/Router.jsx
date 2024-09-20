import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Layout/Header';
import Home from './Home';


const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </>
  );
};

export default AppRouter;