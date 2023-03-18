import React, { Component } from 'react'
import PageTitle from '../PageTitle';
import ProjectCard from '../ProjectCard';
import projectfiles from '../projectfiles.json';


class Projects extends Component {

state = {
  projectfiles
};

  render() {
    return (
      <div>
          <PageTitle
            title={'Projects'}
          />
          <div>
            <div class="row">
              {this.state.projectfiles.map(project => (
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  github_url={project.github_url}
                  deployed_url={project.deployed_url}
                  description={project.description}
                />
              ))}
            </div>
          </div>
      </div>
    )
  }
}

export default Projects;