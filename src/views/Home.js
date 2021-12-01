import React, { useEffect, useState } from 'react';
import Intro from '../components/Intro';
import { getAllPersonal } from '../api/data/personalData';

export default function Home() {
  const [shortIntro, setShortIntro] = useState({});

  useEffect(() => {
    let isMounted = true;
    getAllPersonal().then((personalObj) => {
      if (isMounted) setShortIntro(personalObj);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      <Intro shortIntro={shortIntro} />
    </>
  );
}
