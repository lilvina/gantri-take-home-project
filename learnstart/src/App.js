import React, {Component} from 'react';
import Header from './Header';
import HeroPage from './HeroPage';
import Information from './Information';
import Posts from './Posts';
import HeroStories from './HeroStories';
import './App.css';

class App extends Component {
  state = {
    title: true
  }

  handleClick() {
    this.setState({title: false})
  }

  mainPage() {
    this.setState({title: true})
  }

  render() {
    const {title} = this.state
    return (
      <div className="App">
        <Header handleClick={() => {this.mainPage()}} />
        {title &&
          <div>
            <HeroPage handleClick={() => {this.handleClick()}}/>
            <Information />
            <Posts />
          </div>}

          {!title &&
            <div>
              <HeroStories />
            </div>}
      </div>
    );

  }
}

export default App;
