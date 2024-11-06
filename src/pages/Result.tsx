// src/pages/Result.tsx
import React from 'react';

const Result: React.FC = () => {
  const mood: string = "Happy"; // Example mood
  const songs: string[] = ["Song 1", "Song 2", "Song 3"]; // Example song list

  return (
    <div>
      <h2>Detected Mood: {mood}</h2>
      <h3>Recommended Songs</h3>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
