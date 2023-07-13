
import "./contactform.css";

function ContactForm() {
  return (
    <div id="targetElement" className="contact-div">
      <div className="contact-heading">
        <h1>Contact Jhandewalan Mandir</h1>
        <p>
          If you would like to contact Jhandewalan Mandir, please fill in the
          form below and we will be in touch soon.
        </p>
      </div>
      <div className="contact-form">
        <form action="">
          <div className="input-small">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <div className="input-large">
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Message"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
