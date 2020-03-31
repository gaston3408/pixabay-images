<template>
    <div id=paginacion >
        
        <button class="btn btn-info" @click.prevent='restarPagina' >Anterior</button>
        <button class="btn btn-info" @click.prevent='sumarPagina'>Siguiente</button>
        
    </div>
</template>

<script>

export default {
    data(){
        return {
            pagina : 0,
        }
    },
    methods: {
       sumarPagina(){
           this.pagina ++;
           this.$emit('pagina',this.pagina);
       },
       restarPagina(){
           if(this.pagina == 0 || this.pagina == 1){ return null }
           else{
               this.pagina --;
           this.$emit('pagina',this.pagina);
           }
       }
    }
    
}
</script>