import React from 'react';
import HomeButtons from "./Buttons/HomeButtons";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/create');
  };

  return (
    <div className='flex justify-end p-14'>
      <HomeButtons name="Add Posts" onClick={handleNavigate} />
    </div>
  );
};

export default Header;
