<template>
  <div class="home">
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center mt-5">
          <h1>{{recibiendoTitulo}}</h1>
          <h2>{{recibiendoSubtitulo}}</h2>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  computed:{
    recibiendoTitulo(){
        return this.$store.getters.enviandoTitulo;
      },
      recibiendoSubtitulo(){
        return this.$store.getters.enviandoSubtitulo;
      }
  }
}
</script>
