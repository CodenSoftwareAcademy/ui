import React from 'react';
import './Stack.css';
import html from '../media/html.png';
import css from '../media/css.png';
import js from '../media/js.png';
import react0 from '../media/react.svg';
import redux from '../media/Redux.png';
import node from '../media/node.png';
import express from '../media/express.png';
import mysql from '../media/mysql.svg';
import mongo from '../media/mongodb.png';
import jwt from '../media/jwt.svg';
import git from '../media/git.png';

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