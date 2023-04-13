<script>
export default {
  props: ['title'],
  emits: ['registerClick']
}
</script>

<template>
  <div class="button" @click="$emit('registerClick')">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <p>{{ title }}</p>
  </div>
</template>

<style>
  .button {
    background: linear-gradient(-30deg, #3d0b0b 50%, #2b0808 50%);
    background: hsla(0,0%,95%,.1);
    padding: 14px 28px;
    margin-left: inherit;
    display: inline-block;
    -webkit-transform: translate(0%, 0%);
            transform: translate(0%, 0%);
    overflow: hidden;
    
    font-size: 20px;
    user-select: none;
    cursor: pointer;
  }

  .button::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: hsla(0,0%,95%,.15);
    opacity: 0;
  }

  .button:hover::before {
    opacity: 0.5;
  }

  .button:active::before {
    opacity: 0.2;
  }

  .button span {
    position: absolute;
  }

  .button span:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(var(--color-accent)));
    background: linear-gradient(to left, rgba(43, 8, 8, 0), var(--color-accent));
    -webkit-animation: 2s animateTop linear infinite;
            animation: 2s animateTop linear infinite;
  }

  @keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
    }
  }

  .button span:nth-child(2) {
    top: 0px;
    right: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(var(--color-accent)));
    background: linear-gradient(to top, rgba(43, 8, 8, 0), var(--color-accent));
    -webkit-animation: 2s animateRight linear -1s infinite;
            animation: 2s animateRight linear -1s infinite;
  }

  @keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
              transform: translateY(100%);
    }
    100% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
    }
  }

  .button span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(var(--color-accent)));
    background: linear-gradient(to right, rgba(43, 8, 8, 0), var(--color-accent));
    -webkit-animation: 2s animateBottom linear infinite;
            animation: 2s animateBottom linear infinite;
  }

  @keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
    }
  }

  .button span:nth-child(4) {
    top: 0px;
    left: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(var(--color-accent)));
    background: linear-gradient(to bottom, rgba(43, 8, 8, 0), var(--color-accent));
    -webkit-animation: 2s animateLeft linear -1s infinite;
            animation: 2s animateLeft linear -1s infinite;
  }

  @keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
    }
    100% {
      -webkit-transform: translateY(100%);
              transform: translateY(100%);
    }
  }
</style>