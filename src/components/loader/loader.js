import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <div>
      <Spinner
        color='primary'
        style={{ width: '4rem', height: '4rem' }}
        className='mt-5'
      />{' '}
    </div>
  );
};

export default Loader;
