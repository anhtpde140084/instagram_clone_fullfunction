import React, { Component } from 'react'
import './Infor.css'
import { Avatar } from '@material-ui/core';
import imageSrc from "../../images/pp1.png"

export default class Infor extends Component {
    render() {
        return (
            <div>
                <div className="info__container">
                    <Avatar src={imageSrc} className="info__image" />
                    <div className="info_content">
                        <div className="info_username"> anindya_bunny</div>
                        <div className="info_description"> Description</div>
                    </div>
                </div>
            </div>
        )
    }
}
