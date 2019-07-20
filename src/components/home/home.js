import React, { Component } from 'react';
import './home.css';
import Timer from '../timer/timer';

export default class Counter extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            start : 0,
            isRunning: false
        }
    }

    componentDidMount() {
        window.addEventListener("keypress", this.handleSpaceBarKey);
    }

    componenetWillUnmount(){
        window.removeEventListener("keypress", this.handleSpaceBarKey);
    }

    handleSpaceBarKey = (event) => {

        if(event.code === "Space"){ 
            this.setState({isRunning: !this.state.isRunning}, () => {
                this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
            });
        }
    }

    toggleTimer = () => {
        this.setState({isRunning: !this.state.isRunning}, () => {
            this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
        });
    }

    reset = () => {
        clearInterval(this.timer);
        this.setState({
            start: 0,
            isRunning: false
        });
    }
    
    startTimer = () => {
        this.startTime = Date.now();
        this.timer = setInterval(this.update, 10);
    }
    
    update = () => {
        const delta = Date.now() - this.startTime;
        this.setState({start: this.state.start + delta});
        this.startTime = Date.now();
    }

    render() {
        const { start, isRunning } = this.state;

        return (
        <div className="container">
            <div className="timeContainer">
                <Timer timeElapsed={start}/>
            </div>
            <div className="btnContainer">
                <button type="button" className="btn btn-success" onClick={this.toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
                <button type="button" className="btn btn-danger" onClick={this.reset} disabled={!isRunning && !start}>Reset</button>
            </div>
        </div>
        )
    }
}
