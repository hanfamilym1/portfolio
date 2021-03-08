import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'
import Typing from './Components/Projects/Typing/Typing'


export default
   
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/project' exact component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/skills' component={Skills}/>
            <Route path='/project/typing' component={Typing}/>
        </Switch>
   