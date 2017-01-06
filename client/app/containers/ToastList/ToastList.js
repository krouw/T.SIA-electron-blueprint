import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Position, Toaster } from "@blueprintjs/core";

class ToastList extends Component{
  constructor(){
    super();
  }

  componentDidMount() {
    if (this.props.toasts) {
      this.props.toasts.forEach((toast) => {
        this.toaster.show(toast);
      });
    }
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.props.toasts) {
      this.props.toasts.forEach((toast) => {
        this.toaster.show(toast);
      });
    }
  }

  refHandlers = {
    toaster: el => (this.toaster = el),
  };

  render(){
    return (
      <div>
        <Toaster position={Position.TOP_RIGHT} ref={this.refHandlers.toaster} />
      </div>
    );
  }
}

ToastList.propTypes = {
  toasts: React.PropTypes.array.isRequired
}

function mapStateToProps(state){
  return {
    toasts: state.Toasts
  }
}

export default connect(mapStateToProps)(ToastList);
