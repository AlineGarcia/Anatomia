<template>
  <v-card class="mt-10 pa-3 mx-auto" width="60%">
    <v-row>

      <v-col class="text-center" cols="12">
        <h2>Preencha os seguintes dados:</h2>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
            v-model="formData.nome" 
            label="Nome"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
            v-model="formData.sobrenome"
            label="Sobrenome"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>    
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
            v-model="formData.cpf"
            v-mask="'###.###.###-##'"
            label="CPF"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
            v-model="formData.rg"
            v-mask="'##.###.###-##'"
            label="RG"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
            v-model="formData.cep"
            v-mask="'#####-###'"
            label="CEP"
            variant="filled"
            density="compact"
            hide-details
            @change="obterCep()"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="8">
        <v-text-field
            v-model="formData.email"
            label="Email"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
            v-model="formData.dataNascimento"
            type="date"
            label="Data de Nascimento"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
            v-model="formData.contato"
            v-mask="'(##)#.####-####'"
            label="Contato"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
            v-model="formData.senha"
            :type="mostrarSenha ? 'text' : 'password'"
            label="Senha"
            variant="filled"
            density="compact"
            hide-details
            @click:append="mostrarSenha = !mostrarSenha"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
            v-model="formData.confirmarSenha"
            :append-icon="mostrarSenha ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
            :type="mostrarSenha ? 'text' : 'password'"
            label="Confirmar senha"
            variant="filled"
            density="compact"
            hide-details
            @change="regraSenha()"
            @click:append="mostrarSenha = !mostrarSenha"
        ></v-text-field>
          <small style="color:red" >{{mensagem}}</small>
      </v-col>

      <v-col v-if="cepShow" cols="12" md="8">
        <v-text-field
            v-model="formData.logradouro"
            label="Logradouro"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col v-if="cepShow" cols="12" md="4">
        <v-text-field
            v-model="formData.complemento"
            label="Complemento"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col v-if="cepShow" cols="12" md="5">
        <v-text-field
            v-model="formData.bairro"
            label="Bairro"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col v-if="cepShow" cols="12" md="2">
        <v-text-field
            v-model="formData.uf"
            label="UF"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col v-if="cepShow" cols="12" md="5">
        <v-text-field
            v-model="formData.cidade"
            label="Cidade"
            variant="filled"
            density="compact"
            hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-btn flat @click="$router.push('/')">
          Voltar
        </v-btn>

        <v-btn
            flat
            color="secondary"
            class="float-right"
          >
            Cadastrar
        </v-btn>
      </v-col>

    </v-row>
  </v-card>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      formData: {
        nome: null,
        sobrenome: null,
        cpf: null,
        rg: null,
        cep: null,
        email: null,
        dataNascimento: null,
        contato: null,
        senha: null,
        confirmarSenha: null,
        logradouro: null,
        complemento: null,
        bairro: null,
        uf: null,
        cidade: null
      },
        mensagem: null,
        cepShow: false,
        mostrarSenha: false,
    }
  },

    methods: {
      obterCep() {
        axios.get(`https://viacep.com.br/ws/${this.formData.cep}/json`).then(resposta => {
          this.formData.logradouro = resposta.data.logradouro
          this.formData.complemento = resposta.data.complemento
          this.formData.bairro = resposta.data.bairro
          this.formData.uf = resposta.data.uf
          this.formData.cidade = resposta.data.localidade
          this.cepShow = true
        })
      }
    },

    regraSenha() {
      if(this.formData.senha != this.formData.confirmarSenha) {
        this.mensagem = '*senha não confere'
      }  
    }
}
</script>

<style>

</style>