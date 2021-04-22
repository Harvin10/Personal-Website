import React, { Component, setState } from 'react';
import Button from './components/Button/Button.js';
import Input from './components/Input/Input.js';
import Header from './components/Header/Header.js';
import PopUpMenu from './components/PopUpMenu/PopUpMenu.js';
import './App.css';

const links = [
  {
      link:"home",
      name:"home" 
  }, 
  {
      link:"about",
      name:"about me"
  }, 
  {
      link:"contact",
      name:"contact me"
  }
];

let PopUpMenuStyle = [
  "menu", 
  "hidden"
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isClick: false,
      isMobile: (window.innerWidth < 768) ? true : false 
    }
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth, 
      windowHeight: window.innerHeight
    });
    if(this.state.windowWidth < 768) {
      this.setState({isMobile:true});
    } else {
      this.setState({
        isClick: false,
        isMobile: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  viewMenu = (e) => {
    if(e) {
      console.log(e);
      this.setState({isClick:true})
    } else {
      this.setState({isClick:false}) 
    }
  }

  render() {
    return (
      <div className="App">
        <Header route={ links } viewMenu={ this.viewMenu } isClick={ this.state.isClick } isMobile={ this.state.isMobile}/>
        <div className={ `menu ${this.state.isClick ? '' : 'hidden'}` } >
            <PopUpMenu route={ links } />
        </div>
      </div>
    );
  }
}

export default App;
