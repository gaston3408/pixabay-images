<template>
    <div id='form'>
       <div class=" mt-4">
            <form  class="  col-8 justify-content-center container mb-3 ">
                <div class='row jumbotron form-group'>
                    <div class=' col-md-8'>
                    <input v-model='image' type='text' class='form-control form-control-lg' 
                    placeholder='Busca tu imagen.Ejemplo: Futbol'/>
                    </div>
                    <div class='form-group col-md-4'>
                    <button @click.prevent="getImages" @enter.prevent='getImages'
                    type='submit' class='btn btn-danger btn-lg btn-block'>Buscar...</button>
                    </div>
                </div>
            </form>
       </div>
       <div class= ' container justify col-9 '>
           <imageList v-bind:imagenes="imagenes"/>
       </div>
       <div v-if="pagina !== 0">
           <paginacion @pagina='paginacion'/>
       </div>
    </div>
</template>
<script>
import ImageList from './ImageList.vue'
import paginacion from'./paginacion.vue'

export default {

    name: 'Form',
    components:{
        ImageList,
        paginacion
    },

    data(){
        return {
          image : '',
          imagenes:[],
          pagina : 0
        }
    },

    methods:{

      getImages : async function() {
             
             const url = `https://pixabay.com/api/?key=15570980-804569ad94b39a9791d747cfe&q=${this.image}`;
             const res = await fetch(url);
             const data = await res.json();
             this.imagenes = data.hits; 
             this.pagina = 1;
            },

     paginacion(pag){
       this.pagina = pag ;
       this.getImages();
     }
   
      

    }
}
</script>