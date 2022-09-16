<template>
  <TiposMusculos/>
  <MusculosMacroscopicos/>
  <NomenclaturaMusculos/>
      <v-btn
        color="warning"
        class="ma-4"
        @click="$router.push('/dash')"
      >
        Voltar
      </v-btn>
</template>

<script>
import TiposMusculos from '../components/TiposMusculos.vue'
import MusculosMacroscopicos from '../components/MusculosMacroscopicos.vue'
import NomenclaturaMusculos from '../components/NomenclaturaMusculos.vue'

export default {
    components: {
        TiposMusculos,
        MusculosMacroscopicos,
        NomenclaturaMusculos
    }

}
</script>

<style>

</style>