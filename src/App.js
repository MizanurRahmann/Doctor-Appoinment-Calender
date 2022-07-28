import { Routes, Route } from "react-router-dom";

// PAGES
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/year/:year/month/:month" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
