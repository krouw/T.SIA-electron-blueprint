import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {
  Popover,
  PopoverInteractionKind,
  Position,
  Tag,
  Classes,
  Intent } from '@blueprintjs/core';
import { DateRangePicker } from "@blueprintjs/datetime";
import SearchInput from 'react-search-input'
import moment from 'moment';
import classNames from 'classnames';

export default class HistorialFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
    }
  }

  onChangeSearch(e){
    this.setState({search: e});
    this.props.searchUpdated(e);
  }

  handleDateChange(dateRange){
    this.props.handleDateChange(dateRange);
  }

  render() {
    let popoverContent = (
            <div>
              <DateRangePicker
                onChange={(dateRange) => this.handleDateChange(dateRange)}
              />
            </div>
        );
    const Moment = (date) =>{
      if(date){
          return (<Tag className={Classes.LARGE}
          intent={Intent.PRIMARY}>
          {moment(date).format("DD/MM/YYYY")}
        </Tag>)
      }
      else{
        return (<Tag
          className={classNames(Classes.LARGE, Classes.MINIMAL)}>
          Sin Fecha
        </Tag>)
      }
    }

    return (
      <Row start="xs" bottom="sm" className="Historial-Filter">
        <Col xs={12} sm={4}>
          <label className="pt-label">
            Buscar
            <SearchInput
             inputClassName="pt-input"
             type="text"
             onChange={ e => this.onChangeSearch(e) }
             value={this.state.search}
            />
          </label>
        </Col>
        <Col xs={12} sm={8}>
          <Popover content={popoverContent}
                  interactionKind={PopoverInteractionKind.CLICK}
                  popoverClassName="DatePicker pt-popover-content-sizing"
                  position={Position.BOTTOM}
                  useSmartPositioning={false}>
            <div className="Historial-Fecha">
              { Moment(this.props.dateRange[0]) }
              <span className="pt-icon-large pt-icon-arrow-right"></span>
              { Moment(this.props.dateRange[1]) }
            </div>
          </Popover>
          <button type="button" className="pt-button pt-icon-document pt-intent-success">Generar Reporte</button>
        </Col>
      </Row>
    )
  }
}

HistorialFilter.propsTypes = {
  searchUpdated: React.PropTypes.func.isRequired,
  handleDateChange: React.PropTypes.func.isRequired,
}
