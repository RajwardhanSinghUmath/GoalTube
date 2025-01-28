import React from 'react';
import { ExternalLink, Video, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { playlists } from './data/playlists';

const PlaylistHub = () => {
  const handleExternalClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Focused Playlists</h1>
          <p className="mt-2 text-gray-600">Curated collections for distraction-free viewing</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/player/${playlist.playlistId}`}
              className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <div className="p-2 rounded-lg group-hover:bg-gray-100">
                      <Video className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                    </div>
                    <button
                      onClick={(e) => handleExternalClick(e, playlist.url)}
                      className="p-2 rounded-lg hover:bg-gray-100"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                    </button>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {playlist.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {playlist.description}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                    {playlist.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600">
            Click any playlist to start watching
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlaylistHub;