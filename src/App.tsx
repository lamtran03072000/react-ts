import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
