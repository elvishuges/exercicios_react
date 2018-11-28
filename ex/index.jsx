import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
<Family lastName="Huges">    
    <Member name="Elvis" />
    <Member name="Eveline" />
    <Member name="Edinice" />
    <Member name="Elias" />
</Family>
    
    , document.getElementById('app'));
