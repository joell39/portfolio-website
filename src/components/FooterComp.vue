<script>

</script>

<template>
  <div class="footer_container">
    <div class="footer_content">
      <p>Release: <a :href="'https://github.com/' + this.$githubName + '/' + this.$repositoryName + '/commit/' + this.$commit" target="_blank">{{ $commit.substring(0, 8) }}</a></p>
    </div>
  </div>
</template>

<style>
  footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    min-height: var(--navbar-height);
    background-color: #1b1b20;
    overflow: hidden;
    border-top: solid;
    border-top-color: var(--color-accent);
    border-top-width: 2px;
  }

  .footer_container {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    padding: 4px 12px;
    width: 100%;
    min-height: var(--navbar-height);
  }

  .footer_content {
    align-items: center;
    justify-content: flex-end;
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

  @media (max-height: 803px) {
    footer {
      bottom: auto;
    }
  }
</style>