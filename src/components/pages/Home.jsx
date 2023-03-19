import React from 'react'
import '../styles/Styles.css'

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col s12 m4 l5 avatar">
          <img className="avatar-img" src={process.env.PUBLIC_URL + "/Avatar.png"}/>
        </div>
        <div className="col s12 m8 l7 herotext">
          <h1>Hello, I'm Nailah.<br/>
            A React developer<br/>
            based in London.</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
