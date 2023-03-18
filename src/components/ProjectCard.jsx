import React from 'react'

function ProjectCard(props) {
  return (
        <div className="col s12 m6 l4">
            <div className="card medium">
                <div className="card-image">
                    <img src={props.image}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{props.name}</span>
                    <p>{props.description}</p>
                </div>
                <div className="card-action">
                    <a href={props.github_url}>Github</a>
                    <a href={props.deployed_url}>Application</a>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard