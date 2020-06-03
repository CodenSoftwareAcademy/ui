import React from 'react';
import html from '../html.png';
import css from '../css.png';
import js from '../js.png';
import react0 from '../react.svg';
import redux from '../Redux.png';
import node from '../node.png';
import express from '../express.png';
import mysql from '../mysql.svg';
import mongo from '../mongodb.png';
import jwt from '../jwt.svg';
import git from '../git.png';

const vals = [html, css, js, react0, redux, node, express, mysql, mongo, jwt, git]

class Stack extends React.Component {
    render() {
        return(
            <div className="tech-logos">
                {vals.map((item,i) => (
                    <div className="tech-logo" key={i}>
                        <img src={item} alt={i} />
                    </div>
                ))}
            </div>
        )
    }
}

export default Stack;