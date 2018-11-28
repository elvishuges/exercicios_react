import React from 'react';

function childreanWithProps(children, props){
    return React.Children.map(children,child => 
        React.clone(child,{...props}));
}

export {childreanWithProps}