import './DashboardButtonExpanded.css'

export default function DashboardButtonExpanded(props) {
  return (
    <a href={props.link}>
      <div className={props.className}>
        <img  src={props.image} className='DashboardButtonIcon' alt="dashboard_icon"/>
        <h3>{props.buttonText}</h3>
      </div>
    </a>
  );
};
