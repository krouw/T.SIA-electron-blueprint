import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid'

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
}

//helper to create a fixed number of rows
function createRows(numberOfRows){
  const _rows = [];
  for (var i = 1; i < numberOfRows; i++) {
    _rows.push({
      id: i,
      task: 'Task ' + i,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority : ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
      issueType : ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
      startDate: randomDate(new Date(2015, 3, 1), new Date()),
      completeDate: randomDate(new Date(), new Date(2016, 0, 1))
    });
  }
  return _rows;
}

//function to retrieve a row for a given index
const rowGetter = function(i){
  return _rows[i];
};

const columns = [
{
  key: 'id',
  name: 'ID',
  width: 80
},
{
  key: 'task',
  name: 'Title',
  sortable : true
},
{
  key: 'priority',
  name: 'Priority',
  sortable : true
},
{
  key: 'issueType',
  name: 'Issue Type',
  sortable : true
},
{
  key: 'complete',
  name: '% Complete',
  sortable : true
},
{
  key: 'startDate',
  name: 'Start Date',
  sortable : true
},
{
  key: 'completeDate',
  name: 'Expected Complete',
  sortable : true
}
]

export default class HistorialDatatable extends Component {
  constructor(props){
    super(props);
    const originalRows = createRows(1000);
    const rows = originalRows.slice(0);
    this.state = {
      originalRows: originalRows,
      rows: rows,
    }
  }

  rowGetter(rowIdx){
    return this.state.rows[rowIdx];
  }

  handleGridSort(sortColumn,sortDirection){
    const comparer = (a,b) => {
      if(sortDirection === 'ASC'){
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      }else if(sortDirection === 'DESC'){
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    }
    let rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
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
      />
    )
  }
}
