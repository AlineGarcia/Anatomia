<template>
  <v-card class="mt-10 mx-auto pa-4" width="400">
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">Faça seu login</h2>
      </v-col>

      <v-col cols="12">
        <v-text-field
            v-model="formData.login"
            label="Login"
            variant="outlined"
            density="compact"
            hide-details
            :error="mensagem == '*Campos obrigatórios' && formData.login == null "
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
            :append-icon="mostrarSenha ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
            :type="mostrarSenha ? 'text' : 'password'"
            @click:append="mostrarSenha = !mostrarSenha"
            v-model="formData.senha"
            label="Senha"
            variant="outlined"
            density="compact"
            hide-details
            :error="mensagem == '*Campos obrigatórios' && formData.senha == null"
        ></v-text-field>
      </v-col>

      <v-col cols="12" style="color: red" class="py-0"> 
        {{mensagem}}
      </v-col>

      <v-col class="d-flex">
        <v-btn class="mt-3" @click="$router.push('/')" flat>
         Voltar
        </v-btn>

        <v-spacer></v-spacer>

        <BoasVindasVue :entrar="() => logarUsuario()" :dialog="mensagem == null"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import BoasVindasVue from '../components/BoasVindas.vue'
export default {
  components: {
    BoasVindasVue
  },

  data() {
    return {
      formData: {
        login: null,
        senha: null
      },
      mensagem: null,
      mostrarSenha: false,
    }
  },
    methods: {
      logarUsuario() {
        if(this.formData.login != null && this.formData.senha != null) {

          if(this.formData.login == "aline@eu" && this.formData.senha == "aline123" ) {
            this.mensagem = null
            sessionStorage.setItem('login', this.formData.login)
            setTimeout(() => {
              this.$router.push('/dash')
            }, 2000)
          }
          else {this.mensagem = "*Email ou senha inválido"}
        }
        else {
            this.mensagem = "*Campos obrigatórios"
        }
      }
    }        
}
</script>

<style>

</style>