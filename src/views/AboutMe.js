import React, { useEffect, useState } from 'react';
import Bio from '../components/Bio';
import { getAllPersonal } from '../api/data/personalData';

export default function AboutMe() {
  const [longIntro, setLongIntro] = useState({});

  useEffect(() => {
    let isMounted = true;
    getAllPersonal().then((personalObj) => {
      if (isMounted) setLongIntro(personalObj);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      <Bio longIntro={longIntro} />
    </>
  );
}
