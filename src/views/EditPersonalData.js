import React, { useState, useEffect } from 'react';
import EditPersonalForm from '../components/EditPersonalForm';
import { getAllPersonal } from '../api/data/personalData';

export default function EditPersonalData() {
  const [personal, setPersonal] = useState({});

  useEffect(() => {
    let isMounted = true;
    getAllPersonal().then((personalObj) => {
      if (isMounted) {
        setPersonal(personalObj);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <EditPersonalForm personal={personal} setPersonal={setPersonal} />
    </div>
  );
}
