import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Auth from '../Auth'
import Dashboard from '../Dashboard'
import Newpost from '../Newpost'
import Post from '../Viewpost'

export default(
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/newpost' component={Newpost} />
            <Route path='/viewpost:id' component={Post} />
          </Switch>
)