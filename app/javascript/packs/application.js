/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// src/application.js

import LocalTime from 'local-time'

import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import { makeSVGFromTitle } from '../animation/default_playlist_images'

const Turbolinks = require('turbolinks')

Turbolinks.start()

LocalTime.start()

const application = Application.start()
const context = require.context('../controllers', true, /\.js$/)
application.load(definitionsFromContext(context))


function handlers() {
  document.querySelectorAll('.large-cover .no_pic, .small-cover .no_pic').forEach((pic) => {
    const title = document.querySelector('h1').textContent.trim()
    if (!pic.hasChildNodes()) { 
      pic.append(makeSVGFromTitle(800, title))
    }
  })

  document.querySelectorAll('li a .no_pic').forEach((pic) => {
    const title = pic.parentNode.getAttribute('title')  
    console.log(pic.childNodes)
    if (!pic.hasChildNodes()) {
      pic.append(makeSVGFromTitle(800, title))
    }
  })

  document.querySelector('.profile_link').addEventListener('mouseover', () => {
    document.querySelector('.user_dropdown_menu').style.top = '0px'
  })

  document.querySelector('.user_dropdown').addEventListener('mouseleave', () => {
    document.querySelector('.user_dropdown_menu').style.top = '-118px'
  })

  document.querySelector('.profile_link').addEventListener('touchstart', (event) => {
    if (document.querySelector('.user_dropdown_menu').style.top !== '0px') {
      event.preventDefault()
      document.querySelector('.user_dropdown_menu').style.top = '0px'
    }
  })
}

document.addEventListener('turbolinks:load', handlers)
