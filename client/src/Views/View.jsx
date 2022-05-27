import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import styles from '../Components/styles.module.css'
import Info from '../Components/Info'
import axios from 'axios'
import dateFormat from 'dateformat'
import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'

const View = () => {
    const {event, id} = useParams();
    const [eventInfo, setEventInfo] = useState("");
    let time;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/events/${id}`)
            .then(res => {
                setEventInfo(res.data.event)
            })
            .catch(err => console.log(err))
    }, [id])

    if(parseInt(eventInfo.time) > 12){
        time = parseInt(eventInfo.time) - 12 + " pm"
    } else {
        time = parseInt(eventInfo.time) + " am"
    }

    return (
        <div>
            <Navbar />
            <div className={styles.viewWrapper}>
                <div className={styles.viewHeader}>
                    <div className={styles.viewLeftHeader}>
                        <h1>{eventInfo.eventName}</h1>
                        <div className={styles.shareIcons}>
                            <EmailShareButton>
                                <EmailIcon size={50} round={true}/>
                            </EmailShareButton>
                            <TwitterShareButton url='http://google.com'>
                                <TwitterIcon size={50} round={true}/>
                            </TwitterShareButton>
                            <FacebookShareButton url='http://google.com'>
                                <FacebookIcon size={50} round={true}/>
                            </FacebookShareButton>
                        </div>
                    </div>
                    <Link className={styles.homeLink} to="/"><h3>Home</h3></Link>
                </div>
                <div className={styles.viewBody}>
                    <div className={styles.viewLeft}>
                        <div className={styles.leftHeader}>
                            <p><span>Hosted By:</span> {eventInfo.group}</p>
                            {eventInfo.isPrivate ? <p>*Private Event</p> : <p>Public Event</p>}
                        </div>
                        <div className={styles.imgDiv}>
                            <img className={styles.viewImg} src={eventInfo.url} alt="" />
                        </div>
                        <h3>Event Details:</h3>
                        <p>{eventInfo.details} </p>
                        <div className={styles.rsvpBtn}>
                            <button className={styles.attendingBtn}>Attending</button>
                            <button className={styles.maybeBtn}>Maybe</button>
                        </div>
                    </div>
                    <div className={styles.viewRight}>
                        <h3>Date: </h3>
                        <p>{dateFormat(eventInfo.date, 'dddd, mmmm dS yyyy')}</p>
                        <h3>Time:</h3>
                        <p>{time}</p>
                        <h3>Location:</h3>
                        <p>{eventInfo.location}</p>
                        <h3>Attending:</h3>
                        {/* {eventInfo.attending.map((person, idx) => {
                            return (
                                <p key={idx}>{person.firstName} {person.lastName}</p>
                            )
                        })} */}
                        <h3>Maybe:</h3>
                        {/* {eventInfo.maybe.map((person, idx) => {
                            return (
                                <p key={idx}>{person.firstName} {person.lastName}</p>
                            )
                        })} */}
                    </div>
                </div>
            </div>
            <Info/>
        </div>
    )
}

export default View