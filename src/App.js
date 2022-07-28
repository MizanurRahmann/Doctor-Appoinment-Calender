import { useEffect } from 'react';
import { getMonth } from './utils/dateGenerator';
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  useEffect(() => {
    const month = getMonth(3);
    console.log(month);
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
