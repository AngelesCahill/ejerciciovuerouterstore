import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titulo: '32Bits',
    subtitulo: 'Juegos de PC y Consola',
    nuevoStock: [],
    productos: [
      {
        id: '0001',
        nombre: 'Sekiro',
        stock: 100,
        precio: '$30.000',
        color: 'red',
        destacado: 'true'
      },
      {
        id: '0002',
        nombre: 'Fifa 21',
        stock: 100,
        precio: '$25.000',
        color: 'blue',
        destacado: 'true'
      },
      {
        id: '0003',
        nombre: 'Gears of war 4',
        stock: 100,
        precio: '$15000',
        color: 'green',
        destacado: 'true'
      },
      {
        id: '0004',
        nombre: 'Mario Tennis Aces',
        stock: 100,
        precio: '$35.000',
        color: 'yellow',
        destacado: 'true'
      },
      {
        id: '0005',
        nombre: 'Bloodborne',
        stock: 100,
        precio: '$10.000',
        color: 'blue',
        destacado: 'true'
      },
      {
        id: '0006',
        nombre: 'Forza Horizon 4',
        stock: 100,
        precio: '$20.000',
        color: 'red',
        destacado: 'true'
      }
    ]
  },
  getters: {
    enviandoProductos(state){
      return state.productos;
    },
    enviandoTitulo(state){
      return state.titulo;
    },
    enviandoSubtitulo(state){
      return state.subtitulo;
    },
    
    enviandoStockTotal(state, getters){
      return getters.enviandoProductos.map(result => result.stock);
    },
    enviandoSumaStock(state, getters){
      return getters.enviandoStockTotal.reduce((acumulador, valor)=>{
        return acumulador + valor;
      },0);
    }
  },
  mutations: {
    listaProductos(state){
      state.productos;
    },
    mostrandoTitulo(state){
      state.titulo;
    },
    mostrandoSubtitulo(state){
      state.subtitulo;
    },
    mostrandoJuegosDisponibles(state){
      state.stock
    }
  
  },
  actions: {
   mostrarProductos(context){
    context.commit('listaProductos');
   },
   mostrarTitulo(context){
    context.commit('mostrandoTitulo');
  },
  mostrarSubtitulo(context){
    context.commit('mostrandoSubtitulo');
  },
  mostrarJuegosDisponibles(context){
    context.commit('mostrandoJuegosDisponibles')
  }
  
  },
  
  modules: {
   
  },
});
