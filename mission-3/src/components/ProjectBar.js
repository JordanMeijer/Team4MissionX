import './ProjectBar.css';

function ProjectBar (props) {
  const numberOfProjects = props.circles;
  const projectToRender = props.number;
  const listProjects = [];

  for (let i = 0; i < numberOfProjects; i++) {
    listProjects[i] = <section key={i} className={projectToRender ? "project_circle_number" : "project_circle_no_number"}>{projectToRender}</section>
  }

  return (
    <div>{listProjects}</div> 
  );
};

export default ProjectBar;