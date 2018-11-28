import React from 'react';
import { childreanWithProps } from '../util/reactUtil'


export default props =>(
   <div>
       <h1>Família</h1>
       {props.children}       
       { childreanWithProps(props.children,props) }
       
   </div>
)