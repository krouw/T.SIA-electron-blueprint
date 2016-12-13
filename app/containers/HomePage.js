// @flow
import React, { Component } from 'react';
import { Button, FocusStyleManager, InputGroup, Switch } from "@blueprintjs/core";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <InputGroup leftIconName="star" placeholder="Test me for focus" />
        <br />
        <Button className="pt-fill" text="Test me for focus" />
      </div>
    );
  }
}
