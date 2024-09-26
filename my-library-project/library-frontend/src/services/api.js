import axios from 'axios'; // Importa Axios para requisiçoes HTTP

// Cria instância do axios com URL base da api
const apiClient = axios.create({
    baseURL: 'http:/localhost:3000/api/books', // URL da api
    headers:{
        'Content-Type': 'application/json', //Define JSON como tipo de conteudo
    },
});

// Exporta funções CRUD usando Axios
export default {
    getBooks(){
        return apiClient.get('/'); //GET para listar livros
    },
    addBook(book){
        return apiClient.post('/', book);
    },
    updateBook (id,book){
        return apiClient.put(`/${id}`, book); //PUT para atualizar livro pelo ID
    },
    deleteBook(id){
        return apiClient.delete(`/${id}`); //DELETE para excluir livro pelo ID
    },
};
