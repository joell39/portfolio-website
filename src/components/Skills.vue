<script>

</script>

<template>
  <section class="skills">
    <div class="left">
      <h2 class="skill_headline">Languages</h2>
      <p>Lua</p>
      <p>JavaScript</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>Java</p>
      <p>C#</p>
      <p>PHP</p>
    </div>
  
    <span class="line"></span>
  
    <div class="right">
      <h2 class="skill_headline">Tools</h2>
      <p>Git</p>
      <p>MySQL/MariaDB</p>
      <p>Docker</p>
      <p>Linux</p>
    </div>
  </section>
</template>
    
<style>
  .skills {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;
  }

  .left, .right {
    width: 150px;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 20px;
  }

  .left {
    text-align: right;
  }

  .skill_headline {
    color: var(--color-accent);
  }

  .line {
    border-left: 3px solid rgba(44, 167, 235, 0.8);
    height: 275px;
  }

  @media (max-width: 767px) {
    .left {
      margin-left: 0px;
    }

    .right {
      margin-right: 0px;
    }
  }
</style>