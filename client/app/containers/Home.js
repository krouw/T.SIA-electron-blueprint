// @flow
import React from 'react';
import {Tabs, TabList, TabPanel, Tab} from '@blueprintjs/core';
import Impresiones from './Impresiones/Impresiones'
import Historial from './Historial/Historial'
import Usuarios from './Usuarios/Usuarios'
import Funcionarios from './Funcionarios/Funcionarios'

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
        <Historial />
      </TabPanel>
      <TabPanel>
          <Usuarios />
      </TabPanel>
      <TabPanel>
          <Funcionarios />
      </TabPanel>
    </Tabs>
  );
}

export default Home;
