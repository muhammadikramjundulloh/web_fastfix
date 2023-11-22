import React from 'react';
import 'ldrs/trefoil';


const Loader = () => {
  return (
    <div className="loader-container">
      <l-trefoil
        size="40"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4"
        color="red"
      ></l-trefoil>
    </div>
  );
};

export default Loader;
