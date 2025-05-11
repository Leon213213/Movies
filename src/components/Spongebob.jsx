import { useState } from 'react';

function Spongebob() {
  // Array of S3 video URLs - replace these with your actual S3 video URLs
  const videos = [
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E01+-+Help+Wanted.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E03+-+Tea+at+the+Treedome.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E04+-+Bubblestand.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E05+-+Ripped+Pants.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E06+-+Jellyfishing.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E08+-+Naughty+Nautical+Neighbors.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E09+-+Boating+School.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E10+-+Pizza+Delivery.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E11+-+Home+Sweet+Pineapple.mp4',
    'https://leon-movies.s3.eu-north-1.amazonaws.com/Spongebob/SpongeBob+SquarePants+-+S01E12+-+Mermaid+Man+and+Barnacle+Boy.mp4',
  ];

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
      <h1 style={{ textAlign: 'center', width: '100%' }}>Spongebob Squarepants</h1>
      {videos.map((videoUrl, index) => (
        <div 
          key={index}
          style={{ 
            position: 'relative', 
            paddingBottom: '56.25%', 
            height: 0, 
            overflow: 'hidden', 
            marginBottom: index === videos.length - 1 ? '100px' : '50px',
            backgroundColor: '#000000',
            borderRadius: '20px'
          }}
        >
          <video
            controls
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '20px',
              backgroundColor: '#000000',
              objectFit: 'contain'
            }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}

export default Spongebob; 