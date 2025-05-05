import { useState } from 'react';

function FairyOddParents() {
  const videoId = 'fpeCHKwiJJY'; // Replace with actual FairyOddParents video IDs
  const videoId2 = 'PUTl1i_iUcQ';
  const videoId3 = 'goc5MgWSeEg';
  const videoId4 = 'MuQKrSivRno';
  const videoId5 = 'HOPw-y-2bvA';
  const videoId6 = '28E-X3A8U0k';
  const videoId7 = 'zTqszjYZpyY';
  const videoId8 = 'h-d9khooZeI';
  const videoId9 = 'i7CKWbaVSvM';
  const videoId10 = 'Jwbig2bqWy8';

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '1000px', 
      marginBottom: 'auto', 
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: '20px',
      width: '96%'
    }}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>Fairy Odd Parents</h1>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '50px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
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
      {/* Add more video divs here similar to Spongebob component */}
    </div>
  );
}

export default FairyOddParents;
    
