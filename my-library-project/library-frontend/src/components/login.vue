<template>
    <div>
        <main class="form-signin">

<div class="voltar">     
  <a href="index.html"><i class="bi bi-arrow-left"></i>Voltar</a>
</div>

<form>
  <div class="title">
  <h1 class="h3 mb-3 fw-normal">Entrar com email e senha</h1>
</div>
  <div class="form">
    <label for="floatingInput">Email:</label>
    <input type="email" class="form-control" id="floatingInput" placeholder="">
    
  </div>
  <div class="form">
    <label for="floatingPassword">Senha:</label>
    <input type="password" class="form-control" id="floatingPassword" placeholder="">        
  </div>


  <div class="button">
  <button type="submit"><a href="listaLivroAdm.html"> Entrar</button></a> 
</div>
  
</form>
<div class="conta">
  Não tem conta?<a href="cadastro.html">Cadastre-se</a>  
</div>

</main>
    </div>
</template>


<style>

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f8f9fa;
}

.form-signin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 660px; /* Ajuste a largura máxima conforme necessário */
    height: 545px;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;
}


.form input{   
    width: 400px;
    border-radius: 0.5rem;
    margin-top: 5px;
    margin-bottom: 5px;       
  
}

.button button{    
    color: white;
    width: 150px;
    height: 40px;
    margin-top: 10px; 
    background-color: #335844;
    border-radius: 10px;
}
.button{
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
}

.conta {
    width: 600px;
    height: 80px;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: end;
    color: black;
    
}
.conta a{
    text-decoration: none;
    color: black;
    margin: 0 10px;
}


.voltar{
    width: 660px;
    display: flex;
    flex-direction: row;    
    justify-content:left;
    align-items: center;
    padding-left: 30px;
    
   
}
.voltar a{
    font-size: 20px;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000; 
}

i {
    font-size: 1.6rem;
    
}
 
</style>