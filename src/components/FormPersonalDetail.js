import React from 'react';
import {Link} from 'react-router-dom';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 
import EditIcon from 'material-ui/svg-icons/image/edit'
import TrashIcon from 'material-ui/svg-icons/action/delete'
import TextField from 'material-ui/TextField'
import CheckIcon from 'material-ui/svg-icons/navigation/check'


const row = (x, i, header,handleEdit,handleDelete,editIdx,handleChange,stopEditing) => {
  const currentlyEditing = editIdx === i;
  return (
  <TableRow key={`tr-${i}`}>
    {header.map((y, k) => (
      <TableRowColumn 
       key={`trc-${k}`}>
        {currentlyEditing ? 
          (<TextField name={y.prop}
           onChange={(e) =>handleChange(e,y.prop,i)}
            value={x[y.prop]} />) :
            ( x[y.prop]
      )}
        
      </TableRowColumn>
    ))}
    <TableRowColumn> {currentlyEditing ? (
      <CheckIcon onClick={()=>stopEditing()}/>)
       :(
    <EditIcon onClick={()=>handleEdit(i)}/>)}
    </TableRowColumn>
    <TableRowColumn>
    <TrashIcon onClick={()=>handleDelete(i)}/>
    </TableRowColumn>
  </TableRow>
  )
    }
export default ({ data, header,handleEdit,handleDelete,editIdx,handleChange,stopEditing }) => 
  
<MuiThemeProvider>
    <Table>
    <TableHeader>
      <TableRow>
        {header.map((x, i) => (
          <TableHeaderColumn key={`thc-${i}`}>
            {x.name}
          </TableHeaderColumn>
        ))}
        <TableHeaderColumn>edit</TableHeaderColumn>
        <TableHeaderColumn>delete</TableHeaderColumn>
        
        
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) => row(x, i, header,
        handleEdit,handleDelete,editIdx,handleChange,stopEditing))}
    </TableBody>
  </Table>
  </MuiThemeProvider>
  