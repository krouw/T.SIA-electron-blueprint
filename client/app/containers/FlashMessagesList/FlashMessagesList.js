import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Position, Toaster } from "@blueprintjs/core";

class FlashMessagesList extends Component{

  componentDidUpdate(prevProps, prevState) {
    if (this.props.message.size) {
      this.props.message.forEach((toast) => {
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

FlashMessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired
}

function mapStateToProps(state){
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps)(FlashMessagesList);
