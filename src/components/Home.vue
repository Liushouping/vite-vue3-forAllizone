<script>
import { ref, reactive, onMounted } from "vue";
import Canvas from './Canvas.vue'

export default {
  name: "Home",
  components: {
    Canvas,
  },
  setup() {

    const Topdata = reactive({
      Navbar : 'Coming soon'
    });

    const Centerdata = reactive({
      logo : 'ALLIZONE',
      info : 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    });

    const Bottomdata = reactive({
      mail : 'info@allizone.io',
      info : 'Copyright © 2022 MadManga All Rights Reserved'
    });

    const images = [
      { url: '/discord.svg' },
      { url: '/twitter.svg' },
      { url: '/instagram.svg' },
    ]

    onMounted(() => {
      $(window).mousemove(function(e) {     
          $(".cursor").css({
            left: e.pageX,
            top: e.pageY
          })    
      })
    });

    return {
      Topdata,
      Centerdata,
      Bottomdata,
      images
    }

  },
};
</script>

<template>
  <section 
  class="relative w-full h-screen bg-black flex flex-col justify-center items-center overflow-hidden">

    <div 
    class="fixed top-5 left-6 lg:top-10 lg:left-14">
      <div 
      class="bg-gradient-to-r from-lightblue to-deepblue h-6 w-52"></div>
      <p 
      class="py-4 text-2xl lg:text-4xl text-black font-ComfortaaBold tracking-tenpx" 
      style="-webkit-text-stroke: 2px #0000F8;text-stroke: 2px #0000F8;">{{ Topdata.Navbar }}</p>
    </div>

    <div 
    class="flex flex-col z-20">
      <img src="/allizone-logo.png" class="w-[210px] lg:w-[330px] mx-auto">
      <h5 
      class="py-5 text-center text-2xl md:text-4xl text-white font-ComfortaaBold font-bold tracking-tenpx">{{ Centerdata.logo }}</h5>
      <p 
      class="text-white text-left text-xs font-light max-w-[260px] lg:max-w-[520px] mx-auto">{{ Centerdata.info }}</p>
    </div>

    <Canvas />

    <footer 
    class="fixed bottom-5 w-full flex flex-col lg:flex-row justify-between items-end lg:items-center">
      <div 
      class="w-1/3 pl-0 lg:pl-10 pr-10 md:pr-24 lg:pr-0">
        <ul 
        class="flex flex-row space-x-4 justify-end lg:justify-start items-end lg:items-center py-6 lg:py-0">
          <li v-for="image in images">
            <img :src="image.url" class="w-4 h-4 hover:opacity-70">
          </li>
        </ul>
      </div>

      <div 
      class="w-1/3 flex justify-center items-center">
        <p 
        class="hidden lg:flex text-white text-xs">{{ Bottomdata.mail }}</p>
      </div>

      <div 
      class="w-2/3 lg:w-1/3 flex flex-row justify-center items-end lg:items-center space-x-4 lg:space-x-8 pr-10 lg:pr-0">
        <div class="flex flex-col items-end lg:items-center justify-between lg:justify-center">
          <p 
          class="flex lg:hidden text-white text-xs">{{ Bottomdata.mail }}</p>
          <p 
          class="text-right text-white text-xs">{{ Bottomdata.info }}</p>
        </div>
        <img src="/C.svg" class="min-w-[16px] w-16 lg:w-12 lg:pb-6">
      </div>
    </footer>

    <div class="hidden md:flex cursor cursor-shadow"></div>
    <div class="hidden md:flex cursor cursor-dot"></div>

  </section>
</template>