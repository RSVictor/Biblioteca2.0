<template>
  <div>
    <!-- Lista de Livros -->
    <BookList @edit-book="setBookToEdit" ref="bookList" />
    <BookForm :bookToEdit="bookToEdit" @book-added="fetchBooks" @book-updated="fetchBooks" />
  </div>
</template>

<script>
import BookList from './components/BookList.vue';
import BookForm from './components/BookForm.vue';

export default {
  data() {
    return {
      bookToEdit: null, // Inicializa o estado do livro a ser editado
    };
  },
  components: {
    BookList,
    BookForm,
  },
  methods: {
    // Função para definir o livro que será editado
    setBookToEdit(book) {
      this.bookToEdit = book;
    },
    // Função para atualizar a lista de livros após adicionar ou editar
    fetchBooks() {
      this.$refs.bookList.fetchBooks();
      this.bookToEdit = null; // Limpa o formulário após a ação
    }
  }
};
</script>
