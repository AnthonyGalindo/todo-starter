
export class TodoList {

    constructor() {
        this.cargarLocalStorage() ;
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.establecerLocalStorage();
    }

    eliminarTodo( id ) {
        
        // this.todos = this.todos.filter(buscaId);

        // function buscaId (todo) {
        //     return todo.id != id
        // }

        this.todos = this.todos.filter( todo => todo.id != id );
        this.establecerLocalStorage();
    }

    marcarCompletado( id ) {
       
        for (const todo of this.todos) {
           
            if ( todo.id == id) {
                todo.completado = !todo.completado;
                this.establecerLocalStorage();
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
    }
}