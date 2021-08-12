<template>
  <div>
    email：<input v-model="email">
    pass：<input v-model="password" type="password">
    <button @click="login">ログイン</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Auth from '@aws-amplify/auth'

export default Vue.extend({
  data: () => ({
    email: '' as string,
    password: '' as string,
  }),
  head() {
    return {
      title: 'ログイン',
    }
  },
  methods: {
     
    async login() {
      console.log(this.email)
      console.log(this.password)
      await Auth.signIn(this.email, this.password)
        .then(response => {
          console.log(response.attributes.email)
          console.log(response.signInUserSession.accessToken.jwtToken)
          console.log(response.signInUserSession.idToken.jwtToken)
          console.log(response.attributes['custom:authority'])
        })
        .catch((e) => {
          console.log(e)
          console.error('ログイン失敗')
        })
    },
  },
})
</script>