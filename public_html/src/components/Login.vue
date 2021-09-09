<template>
  <div>
  <div class="nes-container">
    <div class="nes-container login">
      <h1>Please sign in</h1>

      <p v-if="incorrectAuth">Incorrect username or password entered - please try again</p>
      <form v-on:submit.prevent="login">
        <div class="nes-field">
          <input type="text" name="username" id="user" v-model="username" class="nes-input" placeholder="Username">
        </div>
        <div class="nes-field">
          <input type="password" name="password" id="pass" v-model="password" class="nes-input" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        incorrectAuth: false
      }
    },
    methods: {
      login () { 
        this.$store.dispatch('userLogin', {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
          this.incorrectAuth = true
        })
        }
      }
  }
</script>

<style>
body { 
  background-color:#f4f4f4;
}
.login{
  background-color:#fff;
  margin-top:100px;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
input {
    padding: 25px 10px;
}
</style>