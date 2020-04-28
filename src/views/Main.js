import React, {useEffect, useState} from "react";
import Axios from 'axios';

const Main = props => {
    const [message, setMessage] = useState("Loading...")
    useEffect(() => {
        Axios.get('http://localhost:8000/api')
            .then(res => setMessage(res.data.message))
    }, [])
    return(
        <div>
            <h2>Message from the back end: {message}</h2>
        </div>
    )
}

export default Main;