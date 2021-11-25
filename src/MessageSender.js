import React from 'react'
import {Avatar} from "@material-ui/core"
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MessageSender() {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input type="text" placeholder={`What's on your mind`}/>
                    <input placeholder="image URL (Optional" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>

                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">

                <VideocamIcon style={{color: "red"}}/>
                <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">

                <PhotoLibraryIcon style={{color: "green"}}/>
                <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">

                <InsertEmoticonIcon style={{color: "lightblue"}}/>
                <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
