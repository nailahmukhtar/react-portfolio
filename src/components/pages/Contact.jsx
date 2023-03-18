import React from 'react'
import PageTitle from '../PageTitle';
import '../styles/Styles.css';

function Contact() {
  return (
    <div>
      <PageTitle
        title={'Contact'}
      />
      <div className='container'>
        <h3>Let's talk...</h3>
        <div className="row">
          <form className='col s6'> 
            <div className="row">
              <div className="input-field">
                <input id="name" type="text" className="validate"/>
                <label for="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field">
                <input id="email" type="email" className="validate"/>
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label for="textarea1">Message</label>
              </div>
            </div>
          </form>
          <div className="contact center-align row col s6">
            <div className="row">
              <a href="mailto: nailah@outlook.com" class="waves-effect waves-light btn-large center"><i class="material-icons left">email</i>Email Me</a>
            </div>
            <div className="row">
              <a href="https://github.com/nailahmukhtar" class="waves-effect waves-light btn-large"><i class="material-icons left">link</i>Github</a>
            </div>
            <div className="row">
              <a href="https://www.linkedin.com/in/nailah-mukhtar/" class="waves-effect waves-light btn-large"><i class="material-icons left">link</i>LinkedIn</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;