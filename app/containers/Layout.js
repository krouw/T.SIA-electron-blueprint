// @flow
import React from 'react';
import {Grid,Row} from 'react-flexbox-grid';
import {Tabs, TabList, TabPanel, Tab} from '@blueprintjs/core';
import Header from '../components/Header/Header';

const Layout = props => {
  return (
    <section className="Layout">
      <Header />
      <Row center="xs">
        <Grid className="Content">
          {props.children}
        </Grid>
      </Row>
    </section>
  );
}

export default Layout;
