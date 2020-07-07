import React from 'react';
import './Header.css';
import logo from '../media/csa.png';
import { Nav, Navbar} from 'react-bootstrap';

const HOME = 'Home';
const APPLY_BUTTON = 'Apply!';

const menu = [
  {link:'about', title:'About Us'},
  {link:'roadmap', title:'Course Structure'},
  {link:'courses', title:'Calendar'},
  {link:'contact', title:'Contact'}
]

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      navExpanded: false
    }
  }

    componentDidMount() {
      window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }
  
    componentWillUnmount(){
      window.removeEventListener('scroll', this.resizeHeaderOnScroll);
    }

    setNavExpanded = () => {
      this.setState({ navExpanded: !this.state.navExpanded });
    }
  
    closeNav = () => {
      this.setState({ navExpanded: false });
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
          {/* <div className="logo">
            <a href="/"><img src={logo} alt="logo"/></a>
          </div> */}
          <Navbar bg="light" expand="lg" 
                expanded={this.state.navExpanded}>
          <Navbar.Brand href="/">
            <img id="logo-img" src={logo} alt="logo"/>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => this.setState({navExpanded: this.state.navExpanded ? false : "expanded"})}/>
            <Navbar.Collapse id="basic-navbar-nav" onSelect={this.closeNav}>
              <Nav className="mr-auto">

                <Nav.Link onClick={this.closeNav} href="/">{HOME}</Nav.Link>
                {menu.map((item, i) => (
                <Nav.Link onClick={this.closeNav} href={'#'+item.link} key={i}>{item.title}</Nav.Link>
                ))}
                <Nav.Link onClick={this.closeNav} href="#apply" id="apply-btn">{APPLY_BUTTON}</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
            {/* <a href="/">{HOME}</a>
            {menu.map((item, i) => (
              <a href={'#'+item.link} key={i}>{item.title}</a>
            ))}
            <a href='#apply' id="apply-btn">{APPLY_BUTTON}</a> */}
        </div>
      )
    }
}

export default Header;