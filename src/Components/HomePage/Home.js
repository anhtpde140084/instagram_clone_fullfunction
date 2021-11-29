import React, { Component } from 'react'
import MainContent from '../MainContent/MainContent'
import NarBar from '../NarBar/NarBar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NarBar />
                <MainContent />
            </div>
        )
    }
}
