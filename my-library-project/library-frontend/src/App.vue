<script setup>
import { RouterView } from 'vue-router';
import Menu from './components/MenuUser.vue';
import Rodape from './components/RodapeHome.vue';
</script>

<template>
  <Menu /> <!-- Corrigido: adicionei a barra de fechamento da tag -->
  <RouterView />
  <Rodape />
</template>

<style>
/* Seus estilos aqui */
</style>
