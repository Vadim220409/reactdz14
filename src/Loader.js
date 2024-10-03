import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <div className="loader">
    <TailSpin height={80} width={80} color="blue" />
  </div>
);

export default Loader;