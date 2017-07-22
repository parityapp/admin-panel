/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';

const title = 'Log In';


function submitHandler(e) {
  console.log("send the data to backedn");
    e.preventDefault();
    var userInfo = {
        "username" : document.getElementById('username').value,
        "password" : document.getElementById('password').value
    };
    var data = new FormData();
    data.append( "userInfo", JSON.stringify( userInfo ) );
    for (var pair of data.entries()) {
    console.log(pair[0]+ ', ' + pair[1]);
    }
    // fetch("/", {
    // method: 'POST',
    // headers: new Headers({
    //          'Content-Type': 'application/x-www-form-urlencoded',
    // body: "param1=value1&param2=value2"
    // })
    // .then((response) => response.text())
    // .then((responseText) => {
    //     alert(responseText);
    // })
    // .catch((error) => {
    //     console.error(error);
    // });
    history.push('/');
}

function Login(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Parity</h1>
        <img id="login-logo" src="/parity-logo.png"/>
      </div>

      <Panel header={<h3>Please Sign In</h3>} className="login-panel">

        <form role="form" onSubmit={(e) => { submitHandler(e); }}>
          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Username"
                name="name"
                id="username"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <Checkbox label="Remember Me" > Remember Me </Checkbox>
            <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
          </fieldset>
        </form>

      </Panel>

    </div>

  );
}

Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
