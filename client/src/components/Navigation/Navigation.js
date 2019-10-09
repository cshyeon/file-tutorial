import React from 'react';
import classNames from 'classnames';

function Navigation(props) {
  return (
    <nav className={classNames("cs-navigation", props.className)}>
      {props.children}
    </nav>
  )
}

export default Navigation;
