import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MemoApp from './MemoApp';
import OneCanvas from './OneCanvas';
import Navbar from './Navbar';
import Skills from './Skills';
import Profile from './Profile';

function RouterConfig() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<App />} />
          <Route path="memo-app" element={<MemoApp />} />
          <Route path="one-canvas" element={<OneCanvas />} />
          <Route path="skills" element={<Skills />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig;
