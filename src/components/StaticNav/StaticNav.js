import React from 'react'
import './StaticNav.css'

export const StaticNav = () => {
  return (
    <div className='nav-bottom'>
        <a href='#home'><i class="uil uil-estate"></i></a>
        <a href='#about'><i class="uil uil-user"></i></a>
        <a href='#projects'><i class="uil uil-book"></i></a>
        <a href='#testimonals'><i class="uil uil-user-arrows"></i></a>
        <a href='#contact'><i class="uil uil-comment-message"></i></a>
    </div>
  )
}
