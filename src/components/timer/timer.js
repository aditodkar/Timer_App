import React, { Component } from 'react';
import './timer.css';

const Pad = (width, n) => {
    
    if ((n + '').length > width) {
        return n;
    }
    const padding = new Array(width).join('0');
    
    return (padding + n).slice(-width);
};

export default class Timer extends Component {
    getUnits() {
        const seconds = this.props.timeElapsed / 1000;
        return {
            min: Math.floor(seconds / 60).toString(),
            sec: Math.floor(seconds % 60).toString(),
            msec: (seconds % 1).toFixed(3).substring(2)
        };
    }
    
    render() {
        const units = this.getUnits();
        return (
            <div id={this.props.id}>
                <span className="unit">{Pad(2, units.min)}:</span>
                <span className="unit">{Pad(2, units.sec)}.</span>
                <span className="unit">{units.msec}</span>
            </div>
        );
    }
}
