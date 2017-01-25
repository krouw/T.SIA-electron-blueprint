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
import axios from 'axios';

export default class HistorialFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      impres: [],
      cI: 0,
      cF: 0,
      status: false,
    }
  }

  onChangeSearch(e){
    this.setState({search: e});
    this.props.searchUpdated(e);
  }

  handleDateRange(dateRange){
    this.setState({status: false});
    this.props.handleDateChange(dateRange);
    this.setState({status: true});
  }

  onClick(e){
    var Init = moment(this.props.dateRange[0]).format("YYYY/MM/DD");
    var Finish = moment(this.props.dateRange[1]).format("YYYY/MM/DD");

    if( this.state.status == true){
      axios.post('http://localhost:1337/impresion/pdf/?Init='+Init+'&Finish='+Finish)
        .then(
          response => {
              var impresFil = [];
              const json = response.data;
              this.setState({
                cI: json[0].contadorInicial,
                cF: json[0].contadorFinal
              });
              for(var i=1; i<json.length; i++){
                impresFil.push(json[i]);
              }
              this.setState({impres: impresFil});
          },
          error => {
            console.log("no se encontro");

          }
      );
      var fI = moment(this.props.dateRange[0]).format("DD/MM/YYYY");
      var fT = moment(this.props.dateRange[1]).format("DD/MM/YYYY");

      function buildTableBody(data,columns) {
          var body = [];
          body.push(columns);

          data.forEach( (row)=> {
              var dataRow = [];
              columns.forEach( (column)=> {
                  dataRow.push(row[column].toString());
              })
              body.push(dataRow);
          });

        return body;
      }

      function table(data,columns) {
          return {
              table: {
                  headerRows: 1,
                  widths: [ 50, 90, 55 ,50, 40, 70, 80, 30 ],
                  body: buildTableBody(data,columns)
              }
          };
      }
      var dd = {
              //header: 'Departamento de Informática - UTEM',
              content: [
                {
                  //image: "logUtem.jpg",
                  //fit: [50, 50],
                },

                 {
            			text: 'UNIVERSIDAD TECNOLOGICA METROPOLITANA',
            			style: 'logo',
            			alignment: 'center'
            		},
            		{
            			text: 'FACULTAD DE INGENIERIA',
            			style: 'logo',
            			alignment: 'center'
            		},
            		 {
            			text: 'DEPARTAMENTO DE INFORMATICA',
            			style: 'logo',
            			alignment: 'center'
            		},

                {
            			text: 'REPORTE DE IMPRESIONES - SIU',
            			style: 'header',
            			alignment: 'center'
            		},
                {
            			text: fI+' - '+ fT,
            			style: 'subheader',
            			alignment: 'center'
            		},
                {
            			text: 'Contador Inicial: '+this.state.cI,
            			style: 'contador',
            			alignment: 'left'
            		},
                  table(this.state.impres,[ 'Fecha', 'Nombre','Rut','Rol', 'Carrera', 'Asignatura','Observacion', 'Hojas']),
                {
            			text: 'Contador Final: '+this.state.cF,
            			style: 'contador',
            			alignment: 'right'
            		},
              ],
              styles: {
                header:{
                  fontSize: 18,
                  bold: true,
                  alignment: 'justify',
                  marginBottom: 24,
                  marginTop: 15,
                },
                subheader:{
                  fontSize: 14,
                  bold: true,
                  alignment: 'justify',
                  marginBottom: 16,
                },
                contador:{
                  fontSize: 12,
                  margin: 0,
                  marginBottom: 10,
                  marginTop: 10
                },
                logo:{
                    fontiSize: 15,
                    margin: 0
                }
              },
            };
        pdfMake.createPdf(dd).download('optionalName.pdf');
    }

  }
  render() {
    let popoverContent = (
            <div>
              <DateRangePicker
                onChange={(dateRange) => this.handleDateRange(dateRange)}
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
             placeholder="Busqueda específica"
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
          <button type="button" className="pt-button pt-icon-document pt-intent-success" onClick={ e => this.onClick(e) }>Generar Reporte</button>
        </Col>
      </Row>
    )
  }
}

HistorialFilter.propsTypes = {
  searchUpdated: React.PropTypes.func.isRequired,
  handleDateChange: React.PropTypes.func.isRequired,
  dateRange: React.PropTypes.array.isRequired,
  addToast: React.PropTypes.func.isRequired,
}
