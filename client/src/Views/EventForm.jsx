import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import styles from '../Components/styles.module.css'
import Info from '../Components/Info'
import axios from 'axios'

const EventForm = () => {
    const [username, setUsername] = useState("");
    const [url, setUrl] = useState("");
    const [group, setGroup] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [event, setEvent] = useState("");
    const [summary, setSummary] = useState("");
    const [details, setDetails] = useState("");
    const [location, setLocation] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/628fe0b4079fd4d4d47a3818")
            .then(res => setUsername(res.data.user.username))
            .catch(err => console.log(err))
    }, [])

    const createEvent = (e) => {
        e.preventDefault();
        const newEvent = {
            username: username,
            url: url,
            group: group,
            eventName: event,
            date: date,
            time: time,
            summary: summary,
            details: details,
            location: location,
            isPrivate: isPrivate
        }
        axios.post("http://localhost:8000/api/events", newEvent)
            .then(res => navigate("/events/" + event.replaceAll(" ", "-")))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar/>
            <h1 className={styles.formHeader}>Create an Event</h1>
            <div className={styles.eventFormDiv}>
                <form className={styles.eventForm} onSubmit={createEvent}>
                    <label >Event Image Url: </label>
                    <input onChange={e => setUrl(e.target.value)} value={url}/>
                    <label >Group Name:</label>
                    <input onChange={e => setGroup(e.target.value)} value={group}/>
                    <label>Date:</label>
                    <input type='date' onChange={e => setDate(e.target.value)} value={date}/>
                    <label>Time:</label>
                    <input type='time' onChange={e => setTime(e.target.value)} value={time}/>
                    <label>Event Name:</label>
                    <input  onChange={e => setEvent(e.target.value)} value={event}/>
                    <label>Summary:</label>
                    <input onChange={e => setSummary(e.target.value)} value={summary}/>
                    <label>Details:</label>
                    <textarea onChange={e => setDetails(e.target.value)} value={details} cols="30" rows="15"></textarea>
                    <label>Location:</label>
                    <input onChange={e => setLocation(e.target.value)} value={location}/>
                    <input onChange={e => setIsPrivate(e.target.checked)} checked={isPrivate} type="checkbox"/><span>Private?</span>
                    <button>Create</button>
                </form>
            </div>
            <Info/>
        </div>
    )
}

export default EventForm