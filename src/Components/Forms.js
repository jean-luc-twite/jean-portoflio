import './FormStyle.css'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Forms = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_k5f6z03', 'template_5cbcskf', form.current, '3IQ7l6tXlPmhzCCh1')
      .then((result) => {
        console.log(result.text)
        alert('message sent successfully!!!')
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }
  return (
    <div className="form">
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="name" placeholder="your name" required="" />
    <label>Email</label>
    <input type="email" name="email" placeholder="your email" required="" />
    <label>Subject</label>
   <input type="text" name="subject" placeholder="type your service here"></input>
    <label>Message</label>
    <textarea rows="6" name="message" placeholder="type your message here" required="" />
    <button type="submit" className="btn">Send Message</button>
  </form>
  </div>
  )
}

export default Forms
