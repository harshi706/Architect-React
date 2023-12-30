import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Splashscreen from '../components/Splashscreen/Splashscreen';

const Splashpage = ({location}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`${location}`);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <Splashscreen />
    </>
  );
};

export default Splashpage;
