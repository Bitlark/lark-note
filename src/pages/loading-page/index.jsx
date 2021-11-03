import React from 'react';
import './loading.scss';
import Loading from '~/comps/loading'
import PropTypes from 'prop-types';

export default function LoadingPage({ mode = 'circle' }) {
  return (
    <div className='loading-page'>
      {mode === 'circle' && <Loading mode='circle' />}
    </div>
  )
}

LoadingPage.propTypes = {
  mode: PropTypes.string
}