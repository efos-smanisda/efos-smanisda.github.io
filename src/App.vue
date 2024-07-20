<script setup>
  import { ref } from 'vue';
  const menuActive = ref(false);
  function toggleMenu() {
    menuActive.value = !menuActive.value;
  }
</script>

<template>
  <div class="scroll-up-btn">
    <font-awesome-icon icon="angle-up"></font-awesome-icon>
  </div>
  
	<!-- navbar -->
	<nav class="navbar">
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
            <font-awesome-icon icon="bars"></font-awesome-icon>
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
      <svg class="wave-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="aliceblue" fill-opacity="1" d="M0,288L80,266.7C160,245,320,203,480,208C640,213,800,267,960,293.3C1120,320,1280,320,1360,320L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </section>

  

    <!-- introduction -->

    <!-- <section class="introduction" id="introduction">
      <div class="max-width">
        <h2 class="title">Introduction me</h2>
        <div class="introduction-content">
          <div class="column left">
            <img src="https://c.tenor.com/nTum828MfzEAAAAC/shirakami-fubuki-fubuki.gif" alt="">
          </div>
          <div class="column right">
            <div class="text">I'm Evan and I'm a <span class="typing-2"></span></div>
            <p>Nothing here.</p>
            <a href="#contact">Contact me</a>
          </div>
        </div>
      </div>
    </section> -->



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
