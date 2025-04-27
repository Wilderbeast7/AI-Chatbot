import React from 'react';

export default function StartBtn({ actions }) {

  const initialAction = () => {
    actions.initialAction();
  };

  return (
    <div>
      <button className='start-btn' onClick={initialAction}>Let's Get Started</button>
    </div>
  );
}
