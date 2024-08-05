import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { ChatApp } from './pages/ChatApp';
import { Maze } from './pages/Maze';
import { Social } from './pages/Social';
import { Spotify } from './pages/Spotify';
import { VideoReview } from './pages/VideoReview';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/home" element={<Home />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/contact" element={<Contact />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/chatapplication" element={<ChatApp />} />
          <Route path = "/mazegensolve" element={<Maze />} />
          <Route path = "/socialcomm" element={<Social />} />
          <Route path = "/spotify" element={<Spotify />} />
          <Route path = "/videoreview" element={<VideoReview />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
