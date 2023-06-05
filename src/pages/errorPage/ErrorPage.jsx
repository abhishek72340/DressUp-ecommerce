import React from 'react'
import './ErrorPage.css';
import { Module } from '../../module/Module';
import error from '../../images/error.gif';
export const ErrorPage = () => {
  return (
    <div>
        <div id='error-page'>
        <span id='error-number'>404</span>
        <span>Sorry but we couldn't find the page you are looking for</span>
        <span><img src={error} alt="error" /></span>
        <Module/>
        </div>
    </div>
  )
}
