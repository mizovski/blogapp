import React from 'react';
import './popup.css';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';




function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-inner">
            <IconButton className='close-button'>
                <CloseIcon onClick={() => props.setTrigger(false) }/>
            </IconButton>
            {props.children}
        </div>
    ) : ""; 
}

export default Popup;