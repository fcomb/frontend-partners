/* Based on https://github.com/zackify/simple-react-modal */
import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import 'styles/components/modal';

class Modal extends Component {
  static propTypes = {
    closeOnOuterClick: PropTypes.bool,
    onClose: PropTypes.func,
    show: PropTypes.bool.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    toggle: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.hideOnOuterClick = ::this.hideOnOuterClick;
  }

  componentDidMount() {
    document.addEventListener('keydown', ::this.onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', ::this.onKeyDown, false);
  }

  onKeyDown(e) {
    const { keyCode } = e;

    if (this.props.show && keyCode === 27) {
      this.props.toggle();
    }
  }

  render() {
    return (
      <div {...this.props} className={cn('f-modal', this.props.className, { 'active': this.props.show })} onClick={this.hideOnOuterClick} data-modal="true">
        <div className="f-modal-content">
          {this.props.children}
        </div>
      </div>
    );
  }

  hideOnOuterClick(e) {
    if (!this.props.closeOnOuterClick) return;
    if (e.target.dataset.modal) {
      this.props.onClose(e);
    }
  }
}

export default Modal;
