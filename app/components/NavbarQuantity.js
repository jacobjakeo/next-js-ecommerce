import React, { useState } from 'react';
import IncrementButton from './AddQuantity.js';

const NavbarQuantity = () => {
  const [total, setTotal] = useState(0);

  const updateTotal = (count) => {
    setTotal(total + count);
  };

  return (
    <div className="navbar">
      <span>{total}</span>
      <IncrementButton updateTotal={updateTotal} />
    </div>
  );
};

export default NavbarQuantity;
