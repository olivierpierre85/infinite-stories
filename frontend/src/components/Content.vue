<template>
  <div class="nes-container nes-container-main">
      <!-- Balloon 'is-dark'  -->
      <section class="nes-container is-dark">
          <section class="message-list">
              <section class="message -left">
                <div class="message-img">
                    <img src="@/assets/yukiopixel.png"/>
                </div>
                <!-- Balloon -->
                <div class="nes-balloon from-left is-dark">
                    <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                  <p>It's disheartening to discover government corruption and incompetence, for example; but it is better not to know about it? Whose interest does ignorance serve? If we humans bear, say, hereditary propensities toward the hatred of strangers, isn't self-knowledge the only antidote? If we long to believe that the stars rise and set for us, that we are the reason there is a Universe, does science do us a disservice in deflating our conceits?</p>
              
                </div>
            </section>
      
              <!-- <section class="message -right">
              <div class="nes-balloon from-right is-dark">
                  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                  <p>It's disheartening to discover government corruption and incompetence, for example; but it is better not to know about it? Whose interest does ignorance serve? If we humans bear, say, hereditary propensities toward the hatred of strangers, isn't self-knowledge the only antidote? If we long to believe that the stars rise and set for us, that we are the reason there is a Universe, does science do us a disservice in deflating our conceits?</p>
              </div> 

              </section> -->
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

.message-img {
    position: relative;
    display: inline-block;
    width: 256px;
    height: 256px;
}

.message {
    display: flex;
}
</style>