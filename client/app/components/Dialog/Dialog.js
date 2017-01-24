import React from 'react';
import { Dialog, Button } from '@blueprintjs/core';

const DialogRender = props => {
  return (
    <Dialog
      iconName={props.Dialog.icon}
      isOpen={props.Dialog.active}
      onClose={ e => props.closeDialog(e) }
      title={props.Dialog.title}>
      <div className="pt-dialog-body">
        {props.Dialog.message}
      </div>
      <div className="pt-dialog-footer">
        <div className="pt-dialog-footer-actions">
          <Button text="Cerrar"
            onClick={ e => props.closeDialog(e) } />
          <Button
              className="pt-icon-cross"
              intent={props.Dialog.Intent}
              text={props.Dialog.ButtonText}
              onClick={ e => props.handleButton() }/>
        </div>
      </div>
    </Dialog>
  );
}

DialogRender.propTypes = {
  Dialog: React.PropTypes.object.isRequired,
  closeDialog: React.PropTypes.func.isRequired,
  handleButton: React.PropTypes.func.isRequired,
}

export default DialogRender;
