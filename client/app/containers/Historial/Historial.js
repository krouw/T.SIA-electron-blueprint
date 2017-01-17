import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import HistorialFilter from '../../components/HistorialFilter/HistorialFilter'
import axios from 'axios'
import moment from 'moment'
import HistorialDatatable from '../../components/HistorialDatatable/HistorialDatatable'

const KEYS_TO_FILTERS = ['fecha', 'rut', 'nombre','rol','asignatura']

class Historial extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      impresiones: [],
      dateRange: [],
      impresionesFilter: []
    }
  }

  componentDidMount(){
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
            id: impresion.id,
          }
        allImpresiones.push(aux);
        });
        this.setState({impresiones: allImpresiones})
    });
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }

  handleDateRange(dateRange){
    this.setState({dateRange: dateRange});
  }

  dateGenerate(dateRange){

  }

  render(){
      const filteredImpre = this.state.impresiones.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <HistorialFilter
          searchUpdated={term => this.searchUpdated(term)}
          handleDateChange={dateRange => this.handleDateRange(dateRange)}
          dateRange={this.state.dateRange}
        />
        <HistorialDatatable />
      </div>
    )
  }
}

export default Historial;
