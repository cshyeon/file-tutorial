import React, { Component } from 'react';
import classNames from 'classnames';

import { Header, SiteNavigation } from 'components';

import './SiteHeader.scss';

class SiteHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSmall: false
    }
  }

  render() {
    return (
      <Header className={classNames('site-header', this.state.isSmall && 'small')}>
        <div className={classNames('title-header', this.state.isSmall && 'small')}>
          Site title      
        </div>
        {/* <SiteNavigation className={classNames('site-navigation')} /> */}
      </Header>
    )
  }
}

export default SiteHeader;