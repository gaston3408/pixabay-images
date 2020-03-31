<template>
    <div class="ImageList">
      <div class="container ">
         <div class="row ">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4   " v-for="imagen in imagenes" :key="imagen.id">
                 <img :src=imagen.previewURL :alt=imagenes.tags class="card card-img-top">
                 <div class="card-body">
                     <p class="card-text text-white">{{imagen.likes}} Me gusta </p>
                     <p class="card-text text-white">{{imagen.views}} Vistas </p>
                     <a :href=imagen.largeImageURL target="_blank" class="btn btn-success btn-block">Ver imagen</a>
                 </div>
            </div>

         </div>
    </div>


    


   
   
    </div>
</template>

<script>

export default {
    name: 'ImageList',
     props: ['imagenes'],

}
</script>