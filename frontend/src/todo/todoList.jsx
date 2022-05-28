import React from 'react';
import IconButton from '../template/iconButton';

export default props => {

  const renderRows = () => {

    const list = props.list || []

    return (
      list.map(todo =>
        <tr key={todo._id}>
          <td className={todo.done ? 'markAsDone bg-danger' : ''}> {todo.createdAt}</td>
          <td className={todo.done ? 'markAsDone bg-danger' : ''}>{todo.description}</td>
          <td width={150} >
            <IconButton style="success" icon='check'
              onClick={() => props.handleMarkAsDone(todo)}
              hide={todo.done}
            />
            <IconButton style="warning" icon='undo'
              onClick={() => props.handleMarkAsPending(todo)}
              hide={!todo.done}

            />
            <IconButton style='danger' icon='trash-o'
              onClick={() => props.handleRemove(todo)}
              hide={!todo.done}
            />
          </td>
        </tr >
      )
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )


}