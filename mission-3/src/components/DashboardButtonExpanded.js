import './DashboardButtonExpanded.css'

export default function DashboardButtonExpanded(props) {
    return (
        <div class='DashboardButton'>
            <img  src={props.image} class='DashboardButtonIcon'/>
            <h3>{props.buttonText}</h3>
        </div>
    )
}
