import './DashboardButtonExpanded.css'

export default function DashboardButtonExpanded(props) {
    return (
        <div className='DashboardButton'>
            <img  src={props.image} className='DashboardButtonIcon'/>
            <h3>{props.buttonText}</h3>
        </div>
    )
}
