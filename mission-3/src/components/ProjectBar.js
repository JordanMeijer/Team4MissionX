import './ProjectBar.css';

function ProjectBar (props) {
  const numberOfProjects = props.circles;
  const projectToRender = props.number_to_render;
  const listProjects = [];

  if (props.render_bar) {
    for (let i = 0; i < numberOfProjects; i++) {
      if ((i+1) === projectToRender) {
        listProjects[i] = <section key={i} className="project_circle_number">
          <span className="number_style">{projectToRender}</span></section>;
      } 
      else {
        listProjects[i] = <section key={i} className="project_circle_no_number"></section>;
      }
    }

    listProjects.unshift(<section key={"text"}><div id="project">PROJECT</div><div id="introduction">Introduction</div>
      </section>);
  }

  return (
    <>
      <section className="project_navbar_elements">
      {listProjects}
      </section>
    </> 
  );
};

export default ProjectBar;