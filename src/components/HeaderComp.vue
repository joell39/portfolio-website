<script setup>
import Button from './Button.vue'
import Console from './Console.vue'
import { store } from '../store.js'
</script>

<script>
export default {
  data() {
    return {
      store
    }
  },

  methods: {
    onConsoleButtonClick() {
      store.isConsoleActive = !store.isConsoleActive
    }
  }
}
</script>

<template>
  <div class="header_space_container">
    <div class="header">
      <div class="header_container">
        <div class="header_content">
          <h1 class="domain">
            <a href="/">{{ $domain }}</a>
          </h1>

          <div class="right_container">
            <p class="user_label">Connected to {{ $domain }} as '{{ $userName }}'</p>
            <Button title="Console" @registerClick="onConsoleButtonClick" />
          </div>
        </div>
      </div>
    </div>
    <div class="header_console">
      <Console />
    </div>
  </div>
</template>

<style>
  .header_space_container {
    max-height: var(--navbar-height);
  }
  
  .header {
    background-color: #1b1b20;
    overflow: hidden;
    border-bottom: solid;
    border-bottom-color: var(--color-accent);
    border-bottom-width: 2px;
    width: 100%;
  }

  .header_container {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    padding: 4px 12px;
    width: 100%;
    height: var(--navbar-height);
  }

  .header_content {
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    padding: 8px 0px 8px 0;
    width: 100%;
  }

  .domain {
    font-weight: bold;
    user-select: none;
  }

  .domain > a, .domain > a:hover {
    text-decoration: none;
    color: inherit;
    color: #2ca7eb;
  }

  .right_container {
    display: flex;
    align-items: center;
    margin-left: 25px;
  }

  .header_console {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    width: 100%;
    padding: 0px 12px;
  }

  @media (max-width: 850px) {
    .user_label {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .right_container {
      margin-left: 0px;
    }
    .domain {
      font-size: 20px;
    }
  }
</style>