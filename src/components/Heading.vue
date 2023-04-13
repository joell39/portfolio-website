<script setup>
import Skills from './Skills.vue'
</script>

<template>
  <div class="heading">
    <div class="heading_content">
        <h1 class="headline">Hi, I'm <span class="headline_name">{{ $author }}</span>!</h1>
        <p>I am a self-taught Software Engineer with several years of experience in developing and maintaining software across multiple languages and platforms.</p>
    </div>
    <div class="heading_skills">
      <Skills />
    </div>
  </div>
</template>

<style>
  .heading {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    margin-top: 75px;
    margin-bottom: 75px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    padding: 4px 12px;
    width: 100%;
  }

  .heading_content {
    flex: 0 0 calc(50%);

    align-items: center;
    align-items: flex-start;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;

    box-sizing: border-box;

    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    padding: 8px 0px 8px 0;
    width: 100%;

    font-size: 20px;
  }

  .headline {
    font-size: 53px;
    margin-bottom: 48px;
    color: var(--color-heading);
  }

  .headline_name {
    color: var(--color-accent);
  }

  .heading_skills {
    flex: 0 0 calc(50%);
    box-sizing: border-box;
    padding: 30px 0px 8px 0;
  } 

  @media (max-width: 767px) {
    .heading {
      margin-top: 20px;
      margin-bottom: 0px;
    }
    
    .heading_content {
      flex: 0 0 calc(100%);
      margin-bottom: 20px;
    }

    .heading_skills {
      flex: 0 0 calc(100%);
      padding: 0px;
      margin-bottom: 20px;
    }

    .headline {
      font-size: 45px;
      margin-bottom: 20px;
    }
    
    .project_content_container {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }

</style>