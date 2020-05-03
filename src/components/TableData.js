import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    const { launch } = props
    return (
        <tr>
            <td>{launch.flight_number}</td>
            <td>{launch.mission_name}</td>
            <td>{launch.launch_year}</td>
            <td>{new Date(launch.launch_date_utc).toDateString()}</td>
            <td><Link to={`/launches/${launch.flight_number}`}>Detail</Link></td>
        </tr>
    )
}