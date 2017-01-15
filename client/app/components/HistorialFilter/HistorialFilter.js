import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {
  Popover,
  PopoverInteractionKind,
  Position} from '@blueprintjs/core';
import { DateRangePicker } from "@blueprintjs/datetime";

export default class HistorialFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    let popoverContent = (
            <div>
              <DateRangePicker/>
            </div>
        );
    return (
      <Row start="xs" bottom="sm" className="Historial-Filter">
        <Col xs={12} sm={4}>
          <label className="pt-label">
            Buscar
            <input
             name="search"
             className="pt-input"
             type="text"
             dir="auto"
             onChange={ (e) => this.onChange(e) }
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
              <span className="pt-tag pt-large pt-minimal">
                Fecha Incio
              </span>
              <span className="pt-icon-large pt-icon-arrow-right"></span>
              <span className="pt-tag pt-large pt-minimal">
                Fecha Termino
              </span>
            </div>
          </Popover>
          <button type="button" className="pt-button pt-icon-document pt-intent-success">Generar Reporte</button>
        </Col>
      </Row>
    )
  }
}
