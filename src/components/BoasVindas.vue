<template>
  <v-col cols="auto">
      <v-dialog
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="warning"
              v-bind="props"
              @click="entrar"
            >Entrar</v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card>
                <v-toolbar
                  color="primary"
                >Faça seu login
                </v-toolbar>

                <v-card-text>
                  <div class="text-h2 pa-12">Que bom que você veio! Bons estudos!</div>
                </v-card-text>
                
                <v-card-actions class="justify-end">
                    <v-btn
                      text
                      @click="isActive.value = false"
                    >fechar
                    </v-btn>
                </v-card-actions>
            </v-card>
          </template>
      </v-dialog>
  </v-col>
</template>

<script>
export default {
    props: {
        entrar: Function,
        dialog: Boolean
    },
    watch: {
        dialog(bool) {
            console.log("teste", bool)
            this.isActive.value = bool
        }
    }
}
</script>

<style>

</style>