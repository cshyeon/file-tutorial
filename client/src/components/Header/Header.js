import React from 'react';
import classNames from 'classnames';

function Header(props) {
  return (
    <header className={classNames('cs-header', props.className)}>
      {props.children}
    </header>
  )
}

export default Header;