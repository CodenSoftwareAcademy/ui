import React from 'react';
import './Header.css';
import logo from '../media/csa.png';
import {Button} from 'react-bootstrap';

const HOME = 'Acasa';
const APPLY_BUTTON = 'Aplica!';

const menu = [
  {link:'about', title:'Despre Noi'},
  {link:'roadmap', title:'Structura Cursului'},
  {link:'courses', title:'Calendar'},
  {link:'contact', title:'Contact'}
]

class Header extends React.Component {

    componentDidMount() {
      window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }
  
    componentWillUnmount(){
      window.removeEventListener('scroll', this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll() {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 100,
        headerEl = document.getElementById("nav-header");
  
      if (distanceY > shrinkOn) {
        headerEl.classList.add("smaller");
      } else {
        headerEl.classList.remove("smaller");
      }
    }

    render() {
      return(
        <div id="nav-header" className="nav">
          <div className="logo">
            <a href="/"><img src={logo} alt="logo"/></a>
          </div>
          <div className="menu">
            <a href="/">{HOME}</a>
            {menu.map((item, i) => (
              <a href={'#'+item.link} key={i}>{item.title}</a>
            ))}
            <a href='#apply' id="apply-btn">{APPLY_BUTTON}</a>
          </div>
        </div>
      )
    }
}

export default Header;