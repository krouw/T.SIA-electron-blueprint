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
        this.setState({impresiones: impresiones})
    });
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }

  handleDateRange(dateRange){
    this.setState({dateRange: dateRange});
    const impresionesFilter = this.state.impresiones.filter(function (a) {
            const date = new Date(a.createdAt) || {};
            // filter this dates by startDate and endDate
            //var hitDateMatches = hitDates.filter(function(date) { return date >= startDate && date <= endDate });
            // if there is more than 0 results keep it. if 0 then filter it away
            //return hitDateMatches.length>0;
        });
        console.log(impresionesFilter);
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
