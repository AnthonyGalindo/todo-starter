import './estilos.css';
import { Todo, TodoList } from './classes'
import {  crearTodoHtmlFer } from './js/componentes'


//seleccionando el html para el enter

export const todoList = new TodoList();
// const enter = new Todo('Paulina');
  
  // todoList.todos.forEach( element => crearTodoHtmlFer(element)  );
  todoList.todos.forEach(  crearTodoHtmlFer  );

  
  

// const revisado = crearTodoHtmlFer(enter);

//  console.log( revisado );
 







 










