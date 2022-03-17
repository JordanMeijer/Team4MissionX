import './ProjectBar.css';

function ProjectBar (props) {
  const numberOfProjects = props.circles;
  const projectToRender = props.number_to_render;
  const listProjects = [];

  if (props.render_bar) {
    for (let i = 0; i < numberOfProjects; i++) {
      if ((i+1) === projectToRender) {
        listProjects[i] = <section key={i} className="projectbar_circle_number">
          <span className="projectbar_number_style">{projectToRender}</span></section>;
      } 
      else {
        listProjects[i] = <section key={i} className="projectbar_circle_no_number"></section>;
      }
    }

    listProjects.unshift(<section key={"text"}><div id="projectbar_title">PROJECT</div><div id="projectbar_introduction">Introduction</div>
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