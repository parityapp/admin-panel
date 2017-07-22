 import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    console.log("construct");
    super(props);
    this.state = {
        channels : [
            "channel 1",
            "channel 2",
            "channel 3"
        ]
    };
  }

  componentDidMount() {
      console.log("fetch");
      var that = this;
      var url = 'http://localhost:3000/api/data'

      fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        // that.setState({ channels: data.person });
        console.log(data)
      });
  }

  render() {

        return (
          <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
            <div className="sidebar-nav navbar-collapse collapse">
              <ul className="nav in" id="side-menu">
                <li className="sidebar-search">
                  <div className="input-group custom-search-form">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                </li>
                {this.state.channels.map(function(channel, index){
                    return <li key={channel}>
                      <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                        <i className="fa fa-dashboard fa-fw" /> {channel}
                      </a>
                    </li>
                  })}
              </ul>
            </div>
          </div>
        );
  }
}


export default Sidebar;
