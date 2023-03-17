import React from 'react'

const styles = {
  img: {
    margin: "100px"
  },
  herotext: {
    margin: "250px 0px 0px 0px"
  },
  h1: {
    fontFamily: "Roboto, sans-serif",
    margin: "0px"
  }
}

function Home() {
  return (
    <div className='container'>
      <div className="row">
        <div class="col s6">
          <img style={styles.img} src={require=('/Avatar.png')}/>
        </div>
        <div style={styles.herotext} className="col s6">
          <h1 style={styles.h1}>Hello, I'm Nailah</h1>
          <h1 style={styles.h1}>A React Developer</h1>
          <h1 style={styles.h1}>Based in London.</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;