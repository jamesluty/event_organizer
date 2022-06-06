import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Info from '../Components/Info'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../Components/styles.module.css'
import axios from 'axios'
import dateFormat from 'dateformat'

const Home = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    const goToEvent = (name, id) => {
        navigate(`/event/${name}/${id}`)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/events")
            .then(res => {
                setEvents(res.data.events)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navbar />
            <div className={styles.homeWrapper}>
                <div className={styles.navLinks}>
                    <Link className={styles.links} to='/'><h2>Events</h2></Link>
                    <Link className={styles.links} to='/groups'><h2>Groups</h2></Link>
                </div>
                {/* <div className={styles.sortWrapper}>
                <button className={styles.sortBtn}>Location</button>
                <div className={styles.dropdownContent}>
                <button className={styles.locationBtn}></button>
                </div>
            </div> */}
                <div>
                    {events.map((event) => {
                        if (event.date < new Date().toLocaleString()) {
                            let date = event.date
                            let time = event.time
                            if (parseInt(time) > 12) {
                                time = parseInt(time) - 12 + "pm"
                            } else {
                                time = parseInt(time) + "am"
                            }
                            return (
                                <div key={event._id} onClick={() => goToEvent(event.eventName.replaceAll(" ", "-"), event._id)} className={styles.eventWrapper}>
                                    <img src={event.url} alt="event_img" />
                                    <div className={styles.eventInfo}>
                                        <div className={styles.eventHeader}>
                                            <p>{dateFormat(date, 'mmmm dS yyyy')} at {time}</p>
                                            <h3>{event.eventName}</h3>
                                        </div>
                                        <p>{event.summary}</p>
                                        <p><span>Location:</span> {event.location}</p>
                                        <div className={styles.shareOptions}>
                                            <p>{event.attending.length} Attending | {event.maybe.length} Maybe</p>
                                            <p><span>Hosted By:</span> {event.group}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return <p className={styles.noEvents}>There are no events available for search parameters.</p>
                        }
                    })}
                </div>
            </div>
            <Info />
        </div>
    )
}

export default Home