import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  pageSize = 15;

  apikey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color='red'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={
            <News pageSize={this.pageSize} setProgress={this.setProgress} apikey={this.apikey} key="general" country='in' category='general' />
          }
          />
          <Route exact path="/business" element={
            <News pageSize={this.pageSize} setProgress={this.setProgress} apikey={this.apikey} key="business" country='in' category='business' />
          }
          />
          <Route exact path="/entertainment" element={
            <News pageSize={this.pageSize} setProgress={this.setProgress} apikey={this.apikey} key="entertainment" country='in' category='entertainment' />
          }
          />
          <Route exact path="/general" element={
            <News pageSize={this.pageSize} setProgress={this.setProgress} apikey={this.apikey} key="general" country='in' category='general' />
          }
          />
          <Route exact path="/health" element={
            <News pageSize={this.pageSize} setProgress={this.setProgress} apikey={this.apikey} key="health" country='in' category='health' />
          }
          />
          <Route exact path="/science" element={
            <News pageSize={this.pageSize} setProgress={this.setProgress} apikey={this.apikey} key="science" country='in' category='science' />
          }
          />
          <Route exact path="/sports" element={
            <News pageSize={this.pageSize} setProgress={this.setProgress} apikey={this.apikey} key="sports" country='in' category='sports' />
          }
          />
          <Route exact path="/technology" element={
            <News pageSize={this.pageSize} setProgress={this.setProgress} apikey={this.apikey} key="technology" country='in' category='technology' />
          }
          />
        </Routes>
      </div>
    )
  }
}

