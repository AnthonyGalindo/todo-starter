
import { contador} from "../js/componentes.js";

export class TodoList {

    constructor() {
        this.cargarLocalStorage() ;
      
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.establecerLocalStorage();
        this.contadorPendientes();
    }

    eliminarTodo( id ) {
        
        // this.todos = this.todos.filter(buscaId);

        // function buscaId (todo) {
        //     return todo.id != id
        // }

        this.todos = this.todos.filter( todo => todo.id != id );
        this.establecerLocalStorage();
        this.contadorPendientes();
    }

    marcarCompletado( id ) {
       
        for (const todo of this.todos) {
           
            if ( todo.id == id) {
                todo.completado = !todo.completado;
                this.establecerLocalStorage();
                this.contadorPendientes();
                break;
                
            }
        }
    }

    eliminarCompletados() {

        this.todos = this.todos.filter( (todo) => !todo.completado );
        this.establecerLocalStorage();
    }

    establecerLocalStorage(){
        localStorage.setItem( 'todo',JSON.stringify( this.todos ) );
    }

    cargarLocalStorage() {
        this.todos = ( localStorage.getItem('todo') ) ?  JSON.parse( localStorage.getItem('todo') ):  [];
        this.contadorPendientes();
    }

    contadorPendientes() {
        let alf = 0;
    for (const ele of this.todos) {
        if ( !ele.completado)  {
            
            
            alf ++;

        }
    }
    contador.innerText = alf;
    }

}