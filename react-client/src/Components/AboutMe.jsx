import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className={this.props.classes}>
                <h2 className='center my-primary'>
                    A little about me.
                </h2>
                <p className='center'>
                    I'm Ryan, a graduate of the University of Washington with a B.S. in
                    Computer Science. Wisconsin-born and Washington-raised, I come from a family
                    of medical professionals, which may beg the question, why Computer Science?<br/>
                    <br/>
                    <b>The short answer:</b><br/>
                    I love problem-solving, challenging myself, and puzzles of all kinds.<br/>
                    <br/>
                    <b>The <i>slightly</i> longer answer:</b><br/>
                    I am always pushing myself to try new things, whether it be in the classroom or
                    not. This led me to try Computer Science in my first quarter of college, which led
                    me to finish the pre-requisites for the major that same year, which led me to...well
                    here! I enjoy having to think outside the box to code the different pieces to a puzzle,
                    then seeing them come together to produce a desired solution. In this way, I see
                    Computer Science as a challenging way to solve pieces of the problems we face in the
                    puzzle that is our increasingly technological society.
                </p>
            </div>
        );
    }
}

export default AboutMe;