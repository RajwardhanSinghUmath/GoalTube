import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { playlists } from './data/playlists';
import { useNavigate, useParams } from 'react-router-dom';

function PlaylistPlayer() {
  const navigate = useNavigate();
  const { playlistId } = useParams();
  const playlist = playlists.find(p => p.playlistId === playlistId);

  if (!playlist) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-semibold">{playlist.title}</h1>
              <p className="text-sm text-gray-400">{playlist.description}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="w-full">
          <div className="relative w-full bg-black rounded-lg shadow-lg" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1`}
              title={playlist.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistPlayer;