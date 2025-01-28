import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PlaylistHub from './PlaylistHub';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaylistPlayer from './PlaylistPlayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaylistHub />} />
        <Route path="/player/:playlistId" element={<PlaylistPlayer
        playlistId
        onBackClick
      />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
); 