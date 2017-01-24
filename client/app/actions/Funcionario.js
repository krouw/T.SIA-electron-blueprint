import axios from 'axios'

export function deleteFuncionario(funcionario){
  return dispatch => {
    return axios.delete('http://localhost:1337/admin/'+funcionario.id)
  }
}
