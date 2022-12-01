import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function Header({ category, title }) {
  const {currentColor} = useStateContext()
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p style={{color: currentColor}} className='text-3xl font-extrabold tracking-tight'>
        {title}
      </p>
    </div>
  );
}
