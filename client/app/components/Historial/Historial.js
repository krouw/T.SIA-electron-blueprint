import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import axios from 'axios';
import Moment from 'react-moment';

import DataTables from 'material-ui-datatables';
import { Row, Col } from 'react-flexbox-grid';
import {
  Popover,
  PopoverInteractionKind,
  Position} from '@blueprintjs/core';
import { DateRangePicker } from "@blueprintjs/datetime";
var moment = require('moment');

const styles = {
  container: {
    textAlign: 'center',
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const TABLE_COLUMNS = [
  {
    key: 'fecha',
    label: 'Fecha',
  }, {
    key: 'rut',
    label: 'Rut',
  }, {
    key: 'nombre',
    label: 'Nombre',
  }, {
    key: 'rol',
    label: 'Rol',
  },{
    key: 'asignatura',
    label: 'Asignatura',
  }, {
    key: 'observacion',
    label: 'Observacion',
  }, {
    key: 'hojas',
    label: 'Hojas',
  },

];

const TABLE_COLUMNS_TOOLTIP = [
  {
    key: 'fecha',
    label: 'Fecha',
    tooltip: 'Fecha',
  }, {
    key: 'rut',
    label: 'Rut',
    tooltip: 'Rut',
  }, {
    key: 'nombre',
    label: 'Nombre',
    tooltip: 'Nombre',
  }, {
    key: 'rol',
    label: 'Rol',
    tooltip: 'Rol',
  },{
    key: 'asignatura',
    label: 'Asignatura',
    tooltip: 'Asignatura',
  }, {
    key: 'observación',
    label: 'Obervacion',
    tooltip: 'Observacion',
  }, {
    key: 'hojas',
    label: 'Hojas',
    tooltip: 'Hojas',
  },
];

const TABLE_COLUMNS_SORT_STYLE = [
  {
    key: 'fecha',
    label: 'Fecha',
    sortable: true,
    style: {
      width: 80,
    }
  }, {
    key: 'rut',
    label: 'Rut',
    sortable: true,
    style: {
      width: 85,
    }
  }, {
    key: 'nombre',
    label: 'Nombre',
    style: {
      width: 155,
    }
  }, {
    key: 'rol',
    label: 'Rol',
    style: {
      width: 80,
    }
  }, {
    key: 'asignatura',
    label: 'Asignatura',
    style: {
      width: 110,
      textAlign: 'center',
    }
  },
  {
    key: 'observacion',
    label: 'Obervacion',
    style: {
      width: 130,
    }
  }, {
    key: 'hojas',
    label: 'Hojas',
    style: {
      width: 80,
      textAlign: 'center',
    }
  }
];



const TABLE_DATA_NEXT = [
  {

  }
];

const TABLE_DATA = [
  {
    fecha: '20/01/2017',
    rut: '18082418-9',
    nombre: 'Carlos Riquelme Labrin ',
    rol: 'estudiante',
    asignatura: 'programacion',
    observacion: 'tarea arboles binarios',
    hojas: '10',
  },
  {
    fecha: '21/01/2017',
    rut: '18082418-9',
    nombre: 'felipe rubio',
    rol: 'estudiante',
    asignatura: 'programacion',
    observacion: 'tarea arboles binarios',
    hojas: '10',
  },
  {
    fecha: '22/01/2017',
    rut: '18082418-9',
    nombre: 'tomas riquelme',
    rol: 'estudiante',
    asignatura: 'programacion',
    observacion: 'tarea arboles binarios',
    hojas: '10',
  },
  {
    fecha: '20/01/2017',
    rut: '18082418-9',
    nombre: 'Carlos Riquelme Labrin ',
    rol: 'estudiante',
    asignatura: 'programacion',
    observacion: 'tarea arboles binarios',
    hojas: '10',
  }
];

class Historial extends Component {
  constructor(props, context) {
    super(props, context);
/*
    this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    //this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleCellDoubleClick = this.handleCellDoubleClick.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePersonAddClick = this.handlePersonAddClick.bind(this);
    this.handleInfoClick = this.handleInfoClick.bind(this);
*/
    this.state = {
      impresions: [],
      page: 1,
      search: '',
    };

  }

  loadHistorial(){
    const allImpresiones = [];
    axios.get('http://localhost:1337/impresion?sort=updatedAt DESC')
      .then((response) => {
        var users = response.data;
        var impresiones = users.map(function(impresion){
          var aux ={
            fecha: moment(impresion.createdAt).format('DD/MM/YYYY'),
            rut: impresion.user.rut,
            nombre: impresion.user.name,
            rol: impresion.user.rol,
            asignatura: impresion.asignatura,
            observacion: impresion.observacion,
            hojas: impresion.cantidad,
          }
        allImpresiones.push(aux);
        });

    });

    this.setState({impresions: allImpresiones})
    console.log(allImpresiones);
  }
  componentWillMount(){
      this.loadHistorial();
  }
/*
  handleSortOrderChange(key, order) {
    console.log('key:' + key + ' order: ' + order);
  }

  handleFilterValueChange(e) {
    console.log('filter value: ' + value);
    this.setState({[e.target.search]: e.target.value});
  }*/
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
/*
  handleCellClick(rowIndex, columnIndex, row, column) {
    console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
  }

  handleCellDoubleClick(rowIndex, columnIndex, row, column) {
    console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
  }

  handleRowSelection(selectedRows) {
    console.log('selectedRows: ' + selectedRows);
  }

  handlePreviousPageClick() {
    console.log('handlePreviousPageClick');
    this.setState({
      data: todasImpresiones,
      page: 1,
    });
  }

  handleNextPageClick() {
    console.log('handleNextPageClick');
    this.setState({
      data: TABLE_DATA_NEXT,
      page: 2,
    });
  }

  handlePersonAddClick() {
    console.log('handlePersonAddClick');
  }

  handleInfoClick() {
    console.log('handleInfoClick');
  }
*/
  render() {

    let prueba = new Date();
    let popoverContent = (
            <div>
              <DateRangePicker/>
            </div>
        );

    return (
      <section className="Historial">
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
               placeholder="Realice una busqueda"/>

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
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.component}>
            <Card>
              <DataTables
                height={'auto'}
                selectable={false}
                showRowHover={true}
                columns={TABLE_COLUMNS_SORT_STYLE}
                data={this.state.impresions}
                showCheckboxes={false}
                showHeaderToolbar={false}
                //onCellClick={this.handleCellClick}
                //onCellDoubleClick={this.handleCellDoubleClick}
                //onFilterValueChange={this.handleFilterValueChange}
                //onSortOrderChange={this.handleSortOrderChange}
                count={3}
              />
            </Card>
          </div>
        </MuiThemeProvider>
      </section>
    );
  }
}

export default Historial;
