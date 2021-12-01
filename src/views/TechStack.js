import React, { useState, useEffect } from 'react';
import getTechStack from '../api/data/techdata';
import TechCard from '../components/TechCard';

export default function TechStack() {
  const [allTech, setAllTech] = useState([]);

  useEffect(() => {
    getTechStack().then(setAllTech);
  }, []);
  return (
    <>
      {allTech.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
        >
          tech.name
        </TechCard>
      ))}
    </>
  );
}
