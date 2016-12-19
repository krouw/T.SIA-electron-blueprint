// @flow
import React, { Component } from 'react';
import {Tabs, TabList, TabPanel, Tab} from '@blueprintjs/core';

export default class Navbar extends Component {
  render() {
    return (
      <Tabs className="">
        <TabList className="pt-large Navbar">
            <Tab>Impresiones</Tab>
            <Tab>Historial</Tab>
            <Tab>Usuarios</Tab>
            <Tab>Funcionarios</Tab>
        </TabList>
        <TabPanel>
            First panel
        </TabPanel>
        <TabPanel>
            Second panel
        </TabPanel>
        <TabPanel>
            Third panel
        </TabPanel>
        <TabPanel>
            Fourth panel
        </TabPanel>
      </Tabs>
    );
  }
}
