<template>
   <FuncaoOssos/>
   <SituProximodistal/>
   <ArticulacaoOssos/>

      <v-btn
        color="warning"
        class="ma-5"
        @click="$router.push('/dash')"
      >
        Voltar
      </v-btn>

</template>

<script>
import FuncaoOssos from '../components/FuncaoOssos.vue'
import SituProximodistal from '../components/SituProximodistal.vue';
import ArticulacaoOssos from '../components/ArticulacaoOssos.vue'
export default {
  components: {
    FuncaoOssos,
    SituProximodistal,
    ArticulacaoOssos
  }

}
</script>

<style>

</style>