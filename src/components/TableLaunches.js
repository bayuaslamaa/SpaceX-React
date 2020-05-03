import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { getLaunches } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import TableData from './TableData'

export default () => {
    const dispatch = useDispatch()
    const launches = useSelector(state => state.launches)
    useEffect(() => {
        dispatch(getLaunches())
    }, [dispatch])
    console.log(launches)
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Mission Name</th>
                        <th>Launch Year</th>
                        <th>Launch Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {launches.map(launch => <TableData key={launch.flight_number} launch={launch} />)}

                </tbody>
            </Table>

        </>
    )
}