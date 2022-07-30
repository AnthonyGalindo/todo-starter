import { Todo } from "../classes/todo.class";
import { todoList } from '../index';


const htmlTodo             =  document.querySelector('.todo-list'); // es el que contine la lista = ul
const htmlEnter            =  document.querySelector('.new-todo'); // es el input

 const btnBorrarComletados = document.querySelector('.clear-completed');
 const filtros             = document.querySelector('.filters');
 const btnFiltros          = document.querySelectorAll('.filtro')
 console.log( btnFiltros );
 
 
 
// console.log( filtros );

//  console.log( btnTodos);
 


  export const crearTodoHtml2 = ( todo ) => {

      const li        =  document.createElement('li');
      const div       =  document.createElement('div');
      const input     =  document.createElement('input');
      const label     =  document.createElement('label');
      const button    =  document.createElement('button');
      
      input.setAttribute('class','toggle');
      input.setAttribute('type','checkbox');
      input.setAttribute('checked','');
      div.setAttribute('class','view')
      button.setAttribute('class' , 'destroy') 
      li.setAttribute('class','completed');
      li.setAttribute('id','abc');

      label.innerText = todo.tarea ;
      div.append(input,label,button);
      li.append(div);
      htmlTodo.append(li);
      // console.log( htmlTodo );
      
      

  }
  
  export const crearTodoHtmlFer = (todo) => {
       const htmlEscrito =   `   <li class="${ ( todo.completado ? 'completed' : '') }" data-id="${ todo.id }">
                                        <div class="view">
                                            <input class="toggle" type="checkbox" ${( todo.completado ? 'checked' : '' )}>
                                            <label>${todo.tarea}</label>
                                            <button class="destroy"></button>
                                        </div>
                                        <input class="edit" value="Create a TodoMVC template">
                                </li>`;

        const div =  document.createElement('div');
        div.innerHTML = htmlEscrito;
        htmlTodo.append(div.firstElementChild);
        return div.firstElementChild;

  }

  

//   evento que escucha cuando hago enter mediente el keyuo que permite saber que tecla a plasto y agregar un if spara saber
//   si aplasto un enter

    htmlEnter.addEventListener( 'keyup', (algo) => {
        if( algo.keyCode === 13 && htmlEnter.value.length > 0){
        
                const agregando = new Todo(`${htmlEnter.value}`);
                todoList.nuevoTodo( agregando );
                // console.log( todoList );
                
                crearTodoHtmlFer( agregando );
                htmlEnter.value = '';
                todoList.establecerLocalStorage();
        }
        
    } )


    htmlTodo.addEventListener( 'click', ( event ) => {
     
        const elementoLi =  event.target.parentElement.parentElement ; //seleciona el li donde se origino el click
        const nombreElemento = event.target.localName ; // medice el nombre del elemento en el que hago click
        const id = elementoLi.getAttribute('data-id'); // me devuelve el valor del data-id del li seleccionado por click

        if( nombreElemento.includes( 'input' )){
            todoList.marcarCompletado( id );
            elementoLi.classList.toggle('completed')
            
        }
        // console.log( nombreElemento );
        
        if ( nombreElemento.includes('button') ) {
            todoList.eliminarTodo(id);
            // htmlTodo.removeChild(elementoLi);
            elementoLi.remove();
            
        }
        
    } );

    btnBorrarComletados.addEventListener( 'click', () => {
        todoList.eliminarCompletados();
        
       
        

        for (let i = htmlTodo.children.length - 1; i >= 0 ; i--) {
            const elemento = htmlTodo.children[i];
            console.log( elemento );
            if ( htmlTodo.children[i].classList.contains('completed') ) {
               
                // htmlTodo.children[i].remove();
                htmlTodo.removeChild(elemento)
            }
            
        }

    } )

    filtros.addEventListener( 'click', (ev) => {
        console.log( ev );

        const textoClick = ev.target.text;
      
        console.log( textoClick );
        // console.log( htmlTodo.children );
        
        
        if ( !textoClick ) { return; }

        for (const elemento of htmlTodo.children) {
            
            elemento.classList.remove('hidden')
            const completado = elemento.classList.contains('completed')
           
            switch (textoClick) {
                case 'Pendientes':
                        if (completado) {
                            elemento.classList.add('hidden')
                        }
                    break;
                    
                    case 'Completados':
                            if (!completado) {
                                elemento.classList.add('hidden')
                            }
                        break;

                default:
                    break;
            }

            
            
        }
        
        
    } )

  
    
    