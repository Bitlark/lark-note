import React from 'react';
import './loading.scss';

export default function Loading() {
  return <img className='circle' src={import('./circle.svg')} alt='loading' />
}