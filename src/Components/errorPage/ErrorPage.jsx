import React from 'react'
import './ErrorPage.css';
import { Module } from '../../module/Module';
export const ErrorPage = () => {
  return (
    <div>
        <div id='error-page'>
        <span id='error-number'>404</span>
        <span>Sorry but we couldn't find the page you are looking for</span>
        <span><img src="/images/error.gif" alt="error" /></span>
        <Module/>
        </div>
    </div>
  )
}
