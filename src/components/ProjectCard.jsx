import React from 'react'

function ProjectCard(props) {
  return (
  <div class="row">
        <div class="col s12 m6 l4">
            <div class="card medium">
                <div class="card-image">
                    <img src={props.image}/>
                    <span class="card-title">{props.name}</span>
                </div>
                <div class="card-content">
                    <p>{props.description}</p>
                </div>
                <div class="card-action">
                    <a href={props.github_url}>Github</a>
                    <a href={props.deployed_url}>Application</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard