
import React from 'react'
import"./Contact.css"
const Contact = () => {
  return (
    <div>
      <section className="contact">

      <div className="left">

        <h6>GET IN TOUCH</h6>

        <h2>
          Let's work <br /> together
        </h2>

        <p>
          I'm open to UI/UX and frontend missions, short or long-term.
          Landing page, full product redesign, or just a second pair of
          eyes — let's talk.
        </p>

        <div className="info">
          <p> hello@elloit.dev</p>
          <p> linkedin.com/in/eloitt-dev</p>
          <p> github.com/eloitt-dev</p>
        </div>

      </div>

      <div className="right">

        <form>

          <div className="row">
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter your name " />
            </div>

            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your E-mail" />
            </div>
          </div>

          <label>Subject</label>
          <input type="text" placeholder="Project Inquiry" />

          <label>Message</label>
          <textarea
            rows="6"
placeholder="Tell me about your project..."
          ></textarea>

          <button>Send Message →</button>

        </form>

      </div>

    </section>
    </div>
  )
}
export default Contact