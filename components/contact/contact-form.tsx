import { useEffect, useState } from 'react'
import classes from './contact-form.module.css'
import Notification from 'components/ui/notification'

const sendContactData = async contactDetails => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Somthing went wrong!')
  }
}
const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestStatus, setRequestState] = useState() // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState()

  useEffect(() => {
    if (requestStatus === 'pending' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestState(null)
        setRequestError(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  const sendMessageHandler = async event => {
    event.preventDefault()

    setRequestState('pending')

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })
      setRequestState('success')
    } catch (error) {
      setRequestError(error.message)
      setRequestState('error')
    }

    sendContactData('success')
  }

  let notification

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its Way!',
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'success',
      message: 'Message sent successfully!',
    }
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    }
  }
  return (
    <section className={classes.contact}>
      <h1>how can i help you</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={event => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={event => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={event => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  )
}

export default ContactForm
