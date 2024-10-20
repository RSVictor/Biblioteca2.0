<template>
    <div class="barra-verde mt-3">
      <p>Redes Sociais
        <i class="bi bi-facebook">
        </i><i class="bi bi-twitter-x"></i>
        <i class="bi bi-instagram"></i>
      </p>


      <div class="rodape">
        <p>© [2024] [localivros]. Todos os direitos reservados.</p>
      </div>
    </div>

    <!-- offcanvas -->

    <div class="offcanvas offcanvas-end offcanvas-custom" tabindex="-1" id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h1 id="offcanvasRightLabel">Meu Carrinho</h1>
      </div>
      <div class="offcanvas-body">
        <div class="card card-offcanvas ">
          <img src="#" class="card-img-top mt-2" alt="...">
          <div class="card-body">
            <h5 class="card-title">...</h5>

            <div class="button">
              <a href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                class="btn btn-primary" style="background-color: #335844 ;">Emprestar</a>
              <a href="#" class="btn btn-primary" style="background-color: red ; height: 40px; border: none;"><i
                  class="bi bi-trash"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
<style>
.btn-primary i {
    border: none;
    font-size: 1.2rem;
}

.barra-verde {
    height: 62px;
    background-color: #335844;   
    color: #fff;    
    text-align: center;
}

.barra-verde p {
    height: 62px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin: 0 10px;
    display: flex;
    flex-direction: row;
   

}

.barra-verde i {
    font-size: 1.5rem;
    margin: 0 10px;
}

i {
    font-size: 1.6rem;
}
 

.btn-outline {
    display: flex;
    align-items: center;
    background-color: white;
    height: 41.5px;
    border-radius: 0 10px 10px 0;

}

.btn-outline:hover {
    transition: none;
}



.rodape {
    color: black;
    background-color: #F8F9FA;
    height: 150px;
    display: flex;
    justify-content: center;   
    align-items: center;
    font-size: 0.875rem;

}

.rodape p {
    color: black;
    font-size: 18px;
}



.offcanvas-custom {
    align-items: center;


}

.card-offcanvas {
    width: 219px;
    height: 250px;
}

.card-offcanvas .card-img-top {
    display: flex;
    width: 180px;
    height: 190px;
    background-color: #93BFA7;
    margin-left: auto;
    margin-right: auto;

}

</style>