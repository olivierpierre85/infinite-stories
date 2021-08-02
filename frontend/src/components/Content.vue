<template>
  <div class="nes-container nes-container-main">
      <!-- Balloon 'is-dark'  -->
      <section class="nes-container is-dark">
          <section class="message-list">
              <section class="message -left">
              <img src="@/assets/yukiopixel.png"/>
              <div class="nes-balloon from-left is-dark">
                  <p>Plainly there is no way back. Like it or not, we are stuck with science. We had better make the best of it. When we finally come to terms with it and fully recognize its beauty and its power, we will find, in spiritual as well as in practical matters, that we have made a bargain strongly in our favour.</p>
              </div>
              </section>
      
              <section class="message -right">
              <!-- Balloon -->
              <div class="nes-balloon from-right is-dark">
                  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                  <p>It's disheartening to discover government corruption and incompetence, for example; but it is better not to know about it? Whose interest does ignorance serve? If we humans bear, say, hereditary propensities toward the hatred of strangers, isn't self-knowledge the only antidote? If we long to believe that the stars rise and set for us, that we are the reason there is a Universe, does science do us a disservice in deflating our conceits?</p>
              </div>

              </section>
          </section>
      </section>

      <section>
          <div class="nes-container with-title ">
              <p class="title">Your answer !</p>
              <textarea id="textarea_field" class="nes-textarea"></textarea>
              <button type="button" class="nes-btn">Send</button>
          </div>
      </section>
  </div>
</template>

<script>
export default {
    name: "Content",
    setup() {


    },
}
</script>

<style>
.nes-container-main {
    margin-top: 80px; 
    margin-bottom: 75px; 
    border-top: 0px;
}

</style>