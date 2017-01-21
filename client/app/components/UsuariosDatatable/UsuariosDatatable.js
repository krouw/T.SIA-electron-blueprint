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
  key: 'nombre',
  name: 'Nombre',
  sortable : true,
  width: 300,
  textAlign: 'left',
},
{
  key: 'rut',
  name: 'Rut',
  sortable : true,

},
{
  key: 'rol',
  name: 'Rol',
  sortable : true,

},
{
  key: 'carrera',
  name: 'Carrera',
  sortable : true,

}
]

export default class UsuariosDatatable extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows: this.props.users,
    }
  }

  rowGetter(rowIdx){
    const user = this.state.rows[rowIdx];
    const aux ={
      rut: user.rut,
      nombre: user.name,
      rol: user.rol,
      carrera: user.carrera
    }
    return aux;
  }

  componentWillReceiveProps(nextProps){
    this.setState({rows: nextProps.users});
  }

  handleGridSort(sortColumn,sortDirection){
    const comparer = (a,b) => {
      if(sortDirection === 'ASC'){
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      }else if(sortDirection === 'DESC'){
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    }
    let rows = sortDirection === 'NONE' ? this.props.users.slice(0) : this.state.rows.sort(comparer);
    this.setState({rows : rows})
  }

  render() {
    return (
      <ReactDataGrid
        onGridSort={(a,b) => this.handleGridSort(a,b)}
        columns={columns}
        rowGetter={data => this.rowGetter(data)}
        rowsCount={this.state.rows.length}
        minHeight={450}
        onRowUpdated={data => this.handleRowUpdated(data)}
        isScrolling={false}
        defaultPageSize={10}
        showCellBorders= {true}
        paginationToolbarProps={{
          pageSizes: [
            10,
            50,
            100
          ]
        }}
      />
    )
  }
}

UsuariosDatatable.propsTypes = {
  users: React.PropTypes.array.isRequired,
}
