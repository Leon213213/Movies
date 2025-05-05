import React, { useState } from 'react';
import Spongebob from './Spongebob';
import FairyOddParents from './FairyOddParents';
import MoviePlayer from './MoviePlayer';

function Home() {
  const [isShowsOpen, setIsShowsOpen] = useState(false);
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [currentShow, setCurrentShow] = useState('spongebob');

  const shows = [
    { name: 'Spongebob', path: 'spongebob' },
    { name: 'FairyOddParents', path: 'fairyoddparents' },
    { name: 'Ben10', path: 'ben10' }
  ];

  const movies = [
    { name: 'A Christmas Carol', path: 'christmas-carol' },
    { name: 'Polar Express', path: 'polar-express' },
    { name: 'Monsters Inc', path: 'monsters-inc' },
    { name: 'Sinbad: Legend of the Seven Seas', path: 'sinbad-legend-of-the-seven-seas' }
  ];

  const renderShow = () => {
    switch(currentShow) {
      case 'spongebob':
        return <Spongebob />;
      case 'fairyoddparents':
        return <FairyOddParents />;
      case 'ben10':
        return <div>Ben10 Coming Soon</div>;
      case 'christmas-carol':
      case 'polar-express':
      case 'monsters-inc':
      case 'sinbad-legend-of-the-seven-seas':
        return <MoviePlayer movieId={currentShow} />;
      default:
        return <Spongebob />;
    }
  };

  const renderDropdown = (items, isOpen, onItemClick) => {
    if (!isOpen) return null;
    return (
      <div style={{
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: 'black',
        padding: '10px',
        zIndex: 1000,
        width: '100%'
      }}>
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              onItemClick(item.path);
              setIsShowsOpen(false);
              setIsMoviesOpen(false);
            }}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '8px 12px',
              margin: '5px 0',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '3px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row',
      minHeight: '100vh'
    }}>
      <div style={{ 
        width: '250px', 
        backgroundColor: 'black', 
        paddingBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0
      }}>
        <div style={{ position: 'relative', width: '100%', marginBottom: '10px' }}>
          <button 
            onClick={() => {
              setIsShowsOpen(!isShowsOpen);
              setIsMoviesOpen(false);
            }}
            style={{ 
              textAlign: 'center', 
              color: 'white', 
              padding: '20px', 
              backgroundColor: '#8e7676',
              cursor: 'pointer',
              border: 'none',
              width: '100%'
            }}
          >
            Shows
          </button>
          {renderDropdown(shows, isShowsOpen, setCurrentShow)}
        </div>

        <div style={{ position: 'relative', width: '100%' }}>
          <button 
            onClick={() => {
              setIsMoviesOpen(!isMoviesOpen);
              setIsShowsOpen(false);
            }}
            style={{ 
              textAlign: 'center', 
              color: 'white', 
              padding: '20px', 
              backgroundColor: '#8e7676',
              cursor: 'pointer',
              border: 'none',
              width: '100%'
            }}
          >
            Movies
          </button>
          {renderDropdown(movies, isMoviesOpen, setCurrentShow)}
        </div>
      </div>
      <div style={{ 
        flex: 1, 
        padding: '20px'
      }}>
        {renderShow()}
      </div>
    </div>
  );
}

export default Home;
