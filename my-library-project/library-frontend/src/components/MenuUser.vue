<template>
    <header class="p-3">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <!-- Logo ou Ícone -->
          <a href="/" class="d-flex align-items-center text-black text-decoration-none">
            <h3>Localivros</h3>
          </a>
          <!-- Navegação e Campo de Pesquisa -->
          <div class="d-flex align-items-center">
            <ul class="nav mb-2 mb-lg-0 d-flex align-items-center list-unstyled">
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-black">
                  <i class="bi bi-list"></i> Categoria
                </a>
              </li>
              <li class="nav-item">
                <div class="input-logo">
                  <input type="text" name="" id="" placeholder="O que você procura...">
                  <button><i class="bi bi-search"></i></button>
                </div>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link px-2 text-black">
                  <i class="bi bi-person"></i> Login
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/paginaFavoritos" class="nav-link px-2 text-black">
                  <i class="bi bi-heart"></i> Favoritos
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/pagina-emprestimo" class="nav-link px-2 text-black">
                  <i class="bi bi-cart"></i> Carrinho
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { RouterLink} from 'vue-router';
  </script>
  
  <style>
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #93BFA7;
    height: 138px;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000; /* Cor padrão do texto */
  }
  
  .nav-link i {
    margin-right: 3px; /* Espaçamento entre o ícone e o texto */
  }
  
  .input-logo input {
    width: 250px;
    height: 41px;
    border-radius: 5px;
    background-color: white;
    border: none;
    padding: 10px;
    text-decoration: none;
    outline: none;
    padding-right: 2.5rem; /* Espaço para o ícone */
  }
  
  .input-logo button {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0.1rem; /* Espaço do ícone da borda direita */
    border: none;
    background-color: white;
    height: 39px;
    border-radius: 0 10px;
  }
  
  .titulo-logo i {
    color: white;
  }
  
  .input-logo {
    display: flex;
    flex-direction: row;
    justify-content: end;
    position: relative;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 933px;
  }
  
  .circle {
    font-size: 15px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  
  .circulos {
    width: 933px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .bd-placeholder-img {
    width: 140px; /* Largura fixa das imagens */
    height: 140px; /* Altura fixa das imagens */
    background-color: #777; /* Cor de fundo das imagens */
  }
  
  .rounded-circle {
    border-radius: 50%; /* Arredonda as imagens para se tornarem circulares */
  }
  </style>
  