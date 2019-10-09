import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Trans, withTranslation } from 'react-i18next';

import {friendActions} from '@/store/miniApps';

import logo from 'assets/logo.svg';
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null
    }
  }
  getRandomId() {    
    const maxId = 10;
    const randomId = Math.floor(Math.random() * maxId);
    return randomId;
  }
  /* redux test */
  onAdd = () => {
    const friend = {id: this.getRandomId(), name: 'david', age: 23};
    this.props.addFriend(friend);  
  }
  onRemove = () => {
    const removeId = this.getRandomId();
    const friend = {id: removeId};
    this.props.removeFriend(friend);
  }
  changeLanguage = (e) => {
    const lang = e.target.dataset.language || 'en';
    this.props.i18n.changeLanguage(lang);
  }

  /* 파일 업로드 */
  selectFile = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }
  uploadFile = (e) => {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    Axios.post('http://localhost:8000/image', data)
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <div className={classNames('home')}>
        <input type="file" onChange={this.selectFile}/>
        <button onClick={this.uploadFile}>파일 전송</button>

        <Trans i18nKey="hello">Welcome to <strong>React</strong></Trans>
        <button data-language="ko" onClick={this.changeLanguage}>ko</button>
        <button data-language="en" onClick={this.changeLanguage}>en</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={this.onAdd}>add 친구</button>
        <button onClick={this.onRemove}>remove 친구</button>
        {JSON.stringify(this.props.friends)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {friends: state.friend.friends};
};
// const mapDispatchToProps = dispatch => {
//   return {
//     addFriend: friend => {
//       dispatch(addFriend(friend));
//     }
//   };
// };

export default withTranslation()(connect(mapStateToProps, friendActions)(Home));
