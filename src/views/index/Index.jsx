import React from 'react'
import './index.css';
import BgVideo from './1QzwDFl.mp4';

export default class Index extends React.Component {
    render() {
        return (
          <div>

            <div className='container'>
              <div className='animated sidebar'>
                <h1 className='logo'>微至客服</h1>
              </div>
              <div className='animated main'>
                <div className='animated content'>
                  <h1 className='weizhi-logo'>微至客服</h1>
                  <p className='slogan'>无微不至, 迅捷沟通</p>
                  <div className='login-btn '>
                    <a id='appstore_link' href='#' target='_blank'>
                      登录
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <video id='video' autoPlay type='video/mp4' src={BgVideo} loop />
          </div>
        );
    }
}
