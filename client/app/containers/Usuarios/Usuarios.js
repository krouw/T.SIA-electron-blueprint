import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import axios from 'axios'
import moment from 'moment'
import UsuariosDatatable from '../../components/UsuariosDatatable/UsuariosDatatable'

//const KEYS_TO_FILTERS = ['fecha', 'user.rut', 'user.name','user.rol','asignatura']

class Usuarios extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount(){
    const allusers = [];
    axios.get('http://localhost:1337/user?sort=name ASC')
      .then( response => {
        const users = response.data;
        this.setState({
          users: users,
        })
    });
  }


  render(){
    //console.log(this.state.impresionesFilter);
    const users = this.state.users;
    return (
      <div>
        <UsuariosDatatable
          users={users}
         />
      </div>
    )
  }
}

export default Usuarios;
