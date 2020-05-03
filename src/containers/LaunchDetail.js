import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getLaunches } from '../store/actions'
import { Card, Button } from 'react-bootstrap'

export default () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const launches = useSelector(state => state.launches)
    const launch = launches[0]
    useEffect(() => {
        dispatch(getLaunches(id))
    }, [dispatch, id])
    return (
        <>
            <Card className="text-center col-6 offset-3 mt-3">
                <Card.Header>Flight Number: {launch ? launch.flight_number : ''}</Card.Header>
                <Card.Body>
                    <Card.Title>Mission: {launch ? launch.mission_name : ''}</Card.Title>
                    <Card.Title>Rocket: </Card.Title>
                    <Card.Text>
                        ID <b>{launch ? launch.rocket.rocket_id : ''}</b>
                    </Card.Text>
                    <Card.Text>
                        Name <b>{launch ? launch.rocket.rocket_name : ''}</b>
                    </Card.Text>
                    <Card.Text>
                        Type <b>{launch ? launch.rocket.rocket_type : ''}</b>
                    </Card.Text>
                    <Button variant="primary">Detail Rocket</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Launch Date: {launch ? new Date(launch.launch_date_utc).toDateString() : ''}</Card.Footer>
            </Card>

        </>
    )
}
