<script setup>
  import { ref } from 'vue';
  const menuActive = ref(false);
  const topvalue = ref(0);
  function toggleMenu() {
    menuActive.value = !menuActive.value;
  }
  window.addEventListener("scroll", () => {
        topvalue.value = scrollY;
  })
</script>

<template>
  <div class="scroll-up-btn">
    <font-awesome-icon icon="angle-up"></font-awesome-icon>
  </div>
  
	<!-- navbar -->
	<nav class="navbar" :class="{sticky: topvalue > 20 && !(topvalue <= 20)}">
		<div class="max-width">
			<div class="logo"><a href="">EFOS SMANISDA</a></div>
          <ul class="menu" :class="{active: menuActive}">
            <li><a href="#home">Home</a></li>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#projects">Divisions</a></li>
            <li><a href="#skills">Sub Divisions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div @click="toggleMenu()" class="menu-btn">
            <font-awesome-icon icon="bars" v-if="!menuActive"></font-awesome-icon>
            <font-awesome-icon icon="xmark" v-else-if="menuActive"></font-awesome-icon>
          </div>
      </div>
    </nav>

    <!-- home -->

    <section class="home" id="home">
      <div class="max-width">
        <div class="home-content">
          <div class="text-1">Welcome to</div>
          <div class="text-2">EFOS SMANISDA</div>
          <div class="text-3">English Federation of Smanisda <span class="typing"></span></div>
          <a href="#contact">Join us!</a>
        </div>
      </div>
      <svg class="wave-down" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 215, 134, 1)" offset="0%"></stop><stop stop-color="rgba(255, 238, 162, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,75L60,65C120,55,240,35,360,37.5C480,40,600,65,720,65C840,65,960,40,1080,32.5C1200,25,1320,35,1440,47.5C1560,60,1680,75,1800,70C1920,65,2040,40,2160,27.5C2280,15,2400,15,2520,17.5C2640,20,2760,25,2880,30C3000,35,3120,40,3240,45C3360,50,3480,55,3600,55C3720,55,3840,50,3960,47.5C4080,45,4200,45,4320,47.5C4440,50,4560,55,4680,55C4800,55,4920,50,5040,47.5C5160,45,5280,45,5400,52.5C5520,60,5640,75,5760,87.5C5880,100,6000,110,6120,97.5C6240,85,6360,50,6480,37.5C6600,25,6720,35,6840,40C6960,45,7080,45,7200,40C7320,35,7440,25,7560,30C7680,35,7800,55,7920,60C8040,65,8160,55,8280,65C8400,75,8520,105,8580,120L8640,135L8640,150L8580,150C8520,150,8400,150,8280,150C8160,150,8040,150,7920,150C7800,150,7680,150,7560,150C7440,150,7320,150,7200,150C7080,150,6960,150,6840,150C6720,150,6600,150,6480,150C6360,150,6240,150,6120,150C6000,150,5880,150,5760,150C5640,150,5520,150,5400,150C5280,150,5160,150,5040,150C4920,150,4800,150,4680,150C4560,150,4440,150,4320,150C4200,150,4080,150,3960,150C3840,150,3720,150,3600,150C3480,150,3360,150,3240,150C3120,150,3000,150,2880,150C2760,150,2640,150,2520,150C2400,150,2280,150,2160,150C2040,150,1920,150,1800,150C1680,150,1560,150,1440,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path></svg>
    </section>

  

    <!-- introduction -->

    <section class="introduction" id="introduction">
      <div class="max-width">
        <h2 class="title">Introduction</h2>
        <div class="introduction-content">
          <div class="column left">
            <img src="https://c.tenor.com/nTum828MfzEAAAAC/shirakami-fubuki-fubuki.gif" alt="">
          </div>
          <div class="column right">
            <div class="text">Ya ini judul utama</div>
            <p>Ini Deskripsinya, ini kan fontnya rada aneh ntar kalo mau diganti ngomong ae mase. Terus soal warna ntar malem ku garap. Sementara gini dulu, sibuk gereja.
            </p>
            <a href="#contact">Join us!</a>
          </div>
        </div>
      </div>
    </section>



    <!-- projects -->

    <!-- <section class="projects" id="projects">
      <svg class="wave-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="aliceblue" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,192C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div class="max-width">
        <h2 class="title">My projects</h2>
        <div class="projects-content">
          <div class="card project-1">
            <div class="box">
              <i class="fas fa-code"></i>
              <div class="text">Chino-chan</div>
              <p>An open source discord bot that made with discord.js</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <i class="fas fa-code"></i>
              <div class="text">Projects 2</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, perspiciatis?</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <i class="fas fa-code"></i>
              <div class="text">Projects 3</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, perspiciatis?</p>
            </div>
          </div>
        </div>
      </div>
      <svg class="wave-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0f8ff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,245.3C384,224,480,160,576,154.7C672,149,768,203,864,192C960,181,1056,107,1152,106.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section> -->

    <!-- skill -->

    <!-- <section class="skills" id="skills">
      <div class="max-width">
        <h2 class="title">My Skills</h2>
        <div class="skills-content">
          <div class="column left">
            <div class="text">My skills and experiences.</div>
            <p></p>
          </div>
          <div class="column right">
            <div class="bars">
              <div class="info">
                <span>HTML</span>
                <span id="number-html">0%</span>
              </div>
              <div class="line html"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>CSS</span>
                <span id="number-css">0%</span>
              </div>
              <div class="line css"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>JavaScript</span>
                <span id="number-js">0%</span>
              </div>
              <div class="line js"></div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- contact -->

    <!-- <section class="contact" id="contact">
      <svg class="wave-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0f8ff" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,170.7C672,171,768,213,864,213.3C960,213,1056,171,1152,133.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div class="max-width">
        <h2 class="title">Contact me</h2>
        <div class="contact-content">
          <div class="column left">
            <div class="text">Know more introduction me by contacting me.</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, soluta?</p>
            <div class="icons">
              <div class="row">
                <i class="fas fa-user"></i>
                <div class="info">
                  <div class="head">Name</div>
                  <div class="sub-title">Evan Adhiarja Yohanes</div>
                </div>
              </div>
              <div class="row">
                <i class="fas fa-map-marker-alt"></i>
                <div class="info">
                  <div class="head">Address</div>
                  <div class="sub-title">Sidoarjo, Sidoarjo, East Java, Indonesia</div>
                </div>
              </div>
              <div class="row">
                <i class="fas fa-envelope"></i>
                <div class="info">
                  <div class="head">Email</div>
                  <div class="sub-title">evanadhiarjayohanes@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div class="column right">
            
          </div>
        </div>
      </div>
    </section> -->

    <footer>
      <span>Created By <a href="#">Evan Adhiarja Yohanes (Habaru)</a> with <span class="fas fa-heart"></span> | <span class="far fa-copyright"></span>2021 All rights reserved</span>
    </footer>

</template>

<style scoped>
  @import './assets/style.css';
</style>
