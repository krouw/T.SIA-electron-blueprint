import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid'
import axios from 'axios'
import moment from 'moment'

//function to retrieve a row for a given index
const rowGetter = function(i){
  return _rows[i];
};

const columns = [
{
  key: 'fecha',
  name: 'Fecha',
  sortable: true
},
{
  key: 'nombre',
  name: 'Nombre',
  sortable : true
},
{
  key: 'rut',
  name: 'Rut',
  sortable : true
},
{
  key: 'rol',
  name: 'Rol',
  sortable : true
},
{
  key: 'asignatura',
  name: 'Asignatura',
  sortable : true
},
{
  key: 'observacion',
  name: 'Observacion',
  width: 220,
  sortable : true
},
{
  key: 'hojas',
  name: 'Hojas',
  width: 80,
  sortable : true
}
]

export default class HistorialDatatable extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows: this.props.impresiones,
    }
  }

  rowGetter(rowIdx){
    const impresion = this.state.rows[rowIdx];
    const aux ={
      fecha: moment(impresion.createdAt).format('DD/MM/YYYY'),
      rut: impresion.user.rut,
      nombre: impresion.user.name,
      rol: impresion.user.rol,
      asignatura: impresion.asignatura,
      observacion: impresion.observacion,
      hojas: impresion.cantidad,
      id: impresion.id,
    }
    return aux;
  }

  componentWillReceiveProps(nextProps){
    this.setState({rows: nextProps.impresiones});
    console.log(this.state.rows);
  }

  handleGridSort(sortColumn,sortDirection){
    const comparer = (a,b) => {
      if(sortDirection === 'ASC'){
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      }else if(sortDirection === 'DESC'){
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    }
    let rows = sortDirection === 'NONE' ? this.props.impresiones.slice(0) : this.state.rows.sort(comparer);
    this.setState({rows : rows})
  }

  render() {
    return (
      <ReactDataGrid
        onGridSort={(a,b) => this.handleGridSort(a,b)}
        columns={columns}
        rowGetter={data => this.rowGetter(data)}
        rowsCount={this.state.rows.length}
        minHeight={500}
        onRowUpdated={data => this.handleRowUpdated(data)}
        isScrolling={false}
      />
    )
  }
}

HistorialDatatable.propsTypes = {
  impresiones: React.PropTypes.array.isRequired,
}
