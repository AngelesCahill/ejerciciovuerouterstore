<template>
  <div class="busquedas">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label for="filtro">Filtro</label>
          <input type="text" placeholder="Nombre o Id">
      </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="cantidadDeJuegosTotales">Juegos Totales: {{recibiendoProductos.length}}</label>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <label for="stockTotal">Stock Total: {{recibiendoNuevoStock}} </label>
        </div>
      </div>
    </div>
    <table class="table table-hover">
  <thead>
    <tr>
      <th>Id</th>
      <th>Nombre</th>
      <th>Stock</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in recibiendoProductos" :key='index' :style="{backgroundColor:item.color}">
      <th>{{item.id}}</th>
      <td>{{item.nombre}}</td>
      <td>{{item.stock}}</td>
      <td>{{item.precio}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
  export default {
    name: 'Busquedas',
    computed:{
      recibiendoProductos(){
        return this.$store.getters.enviandoProductos;
      },
      
      recibiendoNuevoStock(){
        return this.$store.getters.enviandoSumaStock;
      }
    },
    
  }
</script>

<style>

</style>
