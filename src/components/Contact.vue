<script>

</script>

<template>
  <section class="contact">
    <div class="container">
      <div class="email">
        <svg fill="#fff" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
          <path id="email" d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6 h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017 L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003 L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14 C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401 c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981 l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"/>
        </svg>
        <a :href="'mailto:' + this.$email + '@' + this.$domain"><p class="contact_text">{{ $email }}@<span class="blue">{{ $domain }}</span></p></a>
      </div>
      <div class="github">
        <svg viewBox="0 0 100 100" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
        </svg>
        <a :href="'https://github.com/' + this.$githubName" target="_blank"><p class="contact_text">{{ $githubName }}</p></a>
      </div>
    </div>
  </section>
</template>

<style>
  .contact {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    width: 100%;
  }

  .contact_text {
    font-size: 30px;
    margin-left: 20px;
    margin-top: 22px;
  }

  .email {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .email > svg, .github > svg {
    width: 100px;
  }

  .email > p > .blue {
    color: var(--color-accent);
  }

  .github {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media (max-width: 550px) {
    .contact_text {
      font-size: 20px;
      margin-top: 10px;
    }

    .github > svg, .email > svg {
      width: 50px;
    }
  }
</style>