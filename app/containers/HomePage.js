// @flow
import React, { Component } from 'react';
import {Grid,Row} from 'react-flexbox-grid';
import {Tabs, TabList, TabPanel, Tab} from '@blueprintjs/core';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';


export default class HomePage extends Component {
  render() {
    return (
      <section>
        <Header />
        <Row center="xs">
          <Grid className="Content">
            <Navbar />
          </Grid>
        </Row>
      </section>
    );
  }
}
