import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Position, Toaster } from "@blueprintjs/core";
import { clearToasts } from '../../actions/Toasts'

class ToastList extends Component{
  constructor(){
    super();
  }

  componentDidMount() {
    if (this.props.toasts) {
      this.props.toasts.forEach((toast) => {
        this.toaster.show(toast);
      });
      this.props.clearToasts();
    }
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.props.toasts) {
      this.props.toasts.forEach((toast) => {
        this.toaster.show(toast);
      });
      //falta aplicar clearToasts
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
  toasts: React.PropTypes.array.isRequired,
  clearToasts: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    toasts: state.Toasts
  }
}

export default connect(mapStateToProps, { clearToasts })(ToastList);
