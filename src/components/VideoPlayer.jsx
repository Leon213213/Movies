import { useState } from 'react';

function VideoPlayer() {
  const videoId = 'fpeCHKwiJJY'; // Extract the video ID from the YouTube URL
  const videoId2 = 'PUTl1i_iUcQ'; // Extract the video ID from the YouTube URL
  const videoId3 = 'goc5MgWSeEg'; // Extract the video ID from the YouTube URL
  const videoId4 = 'MuQKrSivRno'; // Extract the video ID from the YouTube URL
  const videoId5 = 'HOPw-y-2bvA'; // Extract the video ID from the YouTube URL
  const videoId6 = '28E-X3A8U0k'; // Extract the video ID from the YouTube URL
  const videoId7 = 'zTqszjYZpyY'; // Extract the video ID from the YouTube URL
  const videoId8 = 'h-d9khooZeI'; // Extract the video ID from the YouTube URL
  const videoId9 = 'i7CKWbaVSvM'; // Extract the video ID from the YouTube URL
  const videoId10 = 'Jwbig2bqWy8'; // Extract the video ID from the YouTube URL

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Video Player</h1>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId2}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId3}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId4}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId5}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId6}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId7}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId8}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId9}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId10}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VideoPlayer; 