import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MemoApp from './MemoApp';
import OneCanvas from './OneCanvas';
import MemoAppPNG from './assets/memoapp.png';
import Navbar from './Navbar';

function RouterConfig() {
  console.log(MemoAppPNG);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<App />} />
          <Route path="memo-app" element={<MemoApp />} />
          <Route path="one-canvas" element={<OneCanvas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig;
