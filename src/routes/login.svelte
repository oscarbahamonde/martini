<script>
  import { range } from '../store'

  let carpet = range(1,20)

</script>

<svelte:head>
  <title>Sign into SmartPro</title>
</svelte:head>

<div class="contenedor">
    <h1 class="title"><strong class="text-handwriting ml-2">Signin</h1>
    <a href="/" class="btn btn-warning btn-outline corner-top-right">Back to Home</a>

  <section class="stark-login">
   
    <form action="" method="">	
      <div id="fade-box">
        <input type="text" name="username" id="username" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
            
            <button>Sign In</button> 
          </div>
        </form>
        <div class="hexagons fixed overflow-x-hidden">
          {#each carpet as i}

          <span>&#9634;</span>

          {/each}
          <br />
          {#each carpet as i}

          <span>&#9634;</span>

{/each}<br />
          {#each carpet as i}

          <span>&#9634;</span>
{/each}<br />
          {#each carpet as i}

          <span>&#9634;</span>

{/each}<br/>
{#each carpet as i}

<span>&#9634;</span>

{/each}<br/>
{#each carpet as i}

<span>&#9634;</span>

{/each}
                </div>      
              </section>        
              <div id="circle1">
                <div id="inner-cirlce1">
                </div>
              </div></div>
  <style>
.contenedor {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background: #000;
  background-size: cover;
  font-size: 10px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  background-attachment: fixed;
  text-align: center;
  }

#fade-box {
  animation: input-entry 3s ease-in;
  z-index: 4; }

.stark-login form {
  animation: form-entry 3s ease-in-out;
  background: #111;
  background: linear-gradient(#004746, #111111);
  border: 6px solid #00a4a2;
  box-shadow: 0 0 15px #00fffd;
  border-radius: 5px;
  display: inline-block;
  height: 220px;
  margin: 200px auto 0;
  position: relative;
  z-index: 4;
  width: 500px;
  transition: 1s all; }
  .stark-login form:hover {
    border: 6px solid #00fffd;
    box-shadow: 0 0 25px #00fffd;
    transition: 1s all; }
.stark-login input {
  background: #222;
  background: linear-gradient(#333333, #222222);
  border: 1px solid #444;
  border-radius: 5px;
  box-shadow: 0 2px 0 #000;
  color: #888;
  display: block;
  font-family: 'Cabin', helvetica, arial, sans-serif;
  font-size: 13px;
  font-size: 1.3rem;
  height: 40px;
  margin: 20px auto 10px;
  padding: 0 10px;
  text-shadow: 0 -1px 0 #2A303C;
  width: 400px; }
.stark-login input:focus {
  animation: box-glow 1s ease-out infinite alternate;
  background: #0B4252;
  background: linear-gradient(#333933, #222922);
  border-color: #00fffc;
  box-shadow: 0 0 5px rgba(0, 255, 253, 0.2), inset 0 0 5px rgba(0, 255, 253, 0.1), 0 2px 0 black;
  color: #efe;
  outline: none; }
.stark-login input:invalid {
  border: 2px solid red;
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.2), inset 0 0 5px rgba(255, 0, 0, 0.1), 0 2px 0 black; }
.stark-login button {
  animation: input-entry 3s ease-in;
  background: #222;
  background: linear-gradient(#333333, #222222);
  box-sizing: content-box;
  border: 1px solid #444;
  border-left-color: #000;
  border-radius: 5px;
  box-shadow: 0 2px 0 #000;
  color: #fff;
  display: block;
  font-family: 'Cabin', helvetica, arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
  margin: 20px auto;
  padding: 0;
  position: relative;
  text-shadow: 0 -1px 0 #000;
  width: 400px;
  transition: 1s all; }
.stark-login button:hover,
.stark-login button:focus {
  background: #0C6125;
  background: linear-gradient(#393939, #292929);
  color: #00fffc;
  outline: none;
  transition: 1s all; }
.stark-login button:active {
  background: #292929;
  background: linear-gradient(#393939, #292929);
  box-shadow: 0 1px 0 #000, inset 1px 0 1px #222;
  top: 1px; }

/* =========================================
Spinner
========================================= */
#circle1 {
  animation: circle1 4s linear infinite, circle-entry 6s ease-in-out;
  background: #2A303C;
  border-radius: 50%;
  border: 10px solid #00a4a2;
  box-shadow: 0 0 0 2px black, 0 0 0 6px #00fffc;
  height: 500px;
  width: 500px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -250px;
  overflow: hidden;
  opacity: 0.4;
  z-index: -3; }

#inner-cirlce1 {
  background: #2A303C;
  border-radius: 50%;
  border: 36px solid #00fffc;
  height: 460px;
  width: 460px;
  margin: 10px; }
  #inner-cirlce1:before {
    content: ' ';
    width: 240px;
    height: 480px;
    background: #2A303C;
    position: absolute;
    top: 0;
    left: 0; }
  #inner-cirlce1:after {
    content: ' ';
    width: 480px;
    height: 240px;
    background: #2A303C;
    position: absolute;
    top: 0;
    left: 0; }

.hexagons {
  animation: logo-entry 4s ease-in;
  color: #2A303C;
  font-size: 52px;
  font-size: 5.1rem;
  letter-spacing: -0.2em;
  line-height: 0.7;
  position: absolute;
  text-shadow: 0 0 6px #00fffc;
  top: 310px;
  width: 100%;
  transform: perspective(600px) rotateX(60deg) scale(1.4);
  z-index: -3; }
    </style>  