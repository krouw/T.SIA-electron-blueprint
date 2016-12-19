// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Tabs, TabList, TabPanel, Tab} from '@blueprintjs/core';
import Impresiones from '../components/Impresiones/Impresiones'

const Home = props => {
  return (
    <Tabs>
      <TabList className="pt-large Navbar">
          <Tab>Impresiones</Tab>
          <Tab>Historial</Tab>
          <Tab>Usuarios</Tab>
          <Tab>Funcionarios</Tab>
      </TabList>
      <TabPanel>
        <Impresiones />
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

export default Home;
