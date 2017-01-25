import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import HistorialFilter from '../../components/HistorialFilter/HistorialFilter'
import axios from 'axios'
import moment from 'moment'
import HistorialDatatable from '../../components/HistorialDatatable/HistorialDatatable'
import { connect } from 'react-redux'
import { addToast } from '../../actions/Toasts'

const KEYS_TO_FILTERS = ['fecha', 'user.rut', 'user.name','user.rol','asignatura']

class Historial extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      impresiones: [],
      dateRange: [null,null],
      impresionesFilter: []
    }

  }

  componentDidMount(){
    const allImpresiones = [];
    axios.get('http://localhost:1337/impresion?sort=updatedAt DESC')
      .then( response => {
        const impresiones = response.data;
        this.setState({
          impresiones: impresiones,
          impresionesFilter: impresiones,
        })
    });
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }

  handleDateRange(dateRange){
    const impresionesFilter = this.state.impresiones.filter((a) => {
            const date = moment(a.createdAt) || {};
            return date.format("YYYY-MM-DD") >= moment(dateRange[0]).format("YYYY-MM-DD") && date.format("YYYY-MM-DD") <= moment(dateRange[1]).format("YYYY-MM-DD");
        });
    this.setState({
      dateRange: dateRange,
      impresionesFilter: impresionesFilter,
    });
  }

  render(){
    const filteredImpre = this.state.impresionesFilter.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
      <div>
        <HistorialFilter
          searchUpdated={term => this.searchUpdated(term)}
          handleDateChange={dateRange => this.handleDateRange(dateRange)}
          dateRange={this.state.dateRange}
          addToast={this.props.addToast}
          impresiones={filteredImpre}
        />
        <HistorialDatatable
          impresiones={filteredImpre}
         />
      </div>
    )
  }
}

export default connect(null, { addToast })(Historial);
