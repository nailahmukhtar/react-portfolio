import React from 'react'

function ProjectCard(props) {
  return (
        <div class="col s12 m6 l4">
            <div class="card medium">
                <div class="card-image">
                    <img src={props.image}/>
                </div>
                <div class="card-content">
                    <span class="card-title">{props.name}</span>
                    <p>{props.description}</p>
                </div>
                <div class="card-action">
                    <a href={props.github_url}>Github</a>
                    <a href={props.deployed_url}>Application</a>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard