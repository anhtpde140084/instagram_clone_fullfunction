import React, { Component } from 'react'
import Grid  from '@material-ui/core/Grid'
import MainPage from '../MainPage/MainPage'
import StatusBar from '../StatusBar/StatusBar'
import './MainContent.css'

export default class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{"background": "#fafafa"}}>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                       
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
