import React, {Component} from 'react';
import Countdown from './Countdown';
import './App.css';
class App extends Component{
  render() {
    const currentDate = new Date();
    const year = currentDate.getMonth() === 11 && currentDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    return(
      <div className='App'>
      <div className='App-header'>
      <img src={'https://raw.githubusercontent.com/kristinbaumann/react-countdown/06c2006cd554cc926e7406cb921dd82b36ed3dce/src/logo.svg'} className='App-logo' alt='logo' />
        <h2>react countdown</h2>
        <a href='https://github.com/gonzalote99' target='_blank' rel='noopener noreferrer' >
        <img src={'https://raw.githubusercontent.com/kristinbaumann/react-countdown/master/src/github.png'} alt='github' className='githubIcon' />
          <span>view on github</span>
        </a>
      </div>
        <h3 className='title'>
        christmas countdown
        </h3>
        <Countdown date={`${year}-12-24T00:00:00`} />
      </div>
    );
  }
}

export default App;