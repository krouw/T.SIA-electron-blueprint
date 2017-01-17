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
        const impresiones = response.data;
        this.setState({
          impresiones: impresiones,
          impresionesFilter: impresionesFilter,
        })
        console.log(this.state.impresiones);
    });
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }

  handleDateRange(dateRange){
    const impresionesFilter = this.state.impresiones.filter((a) => {
            const date = new Date(a.createdAt) || {};
            return date >= dateRange[0] && date <= dateRange[1];
        });
    this.setState({
      dateRange: dateRange,
      impresionesFilter: impresionesFilter,
    });
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
