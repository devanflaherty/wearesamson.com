<template>
  <div id="mobileNav" :class="{'is-active': mobileNav}">
    <div class="mobile-nav-wrap">
      <nuxt-link class="navbar-item mobile-item" :to="$prismic.asLink(link.link_url)" v-for="(link, index) in menu" :key="index">
        {{link.link_label}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
  props: ['menu', 'mobileNav'],
  watch: {
    mobileNav (bool) {
      let tl = new TimelineMax({delay: 0.25})
      if (bool) {
        tl.staggerFromTo('.mobile-item', 1, {
          x: -100,
          autoAlpha: 0,
          rotationY: -90,
          transformStyle: 'preserve-3d',
          perspective: 100
        }, {
          x: 0,
          autoAlpha: 1,
          rotationY: 0
        }, 0.25)
      } else {
        tl.staggerTo('.mobile-item', 0.5, {
          autoAlpha: 0
        }, 0.25)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins';
#mobileNav {
  z-index: 10;
  display: none;
  visibility: hidden;
  @include touch(){
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .mobile-nav-wrap {
      z-index: 10;
      position: absolute;
      top: 200px; 
      left: -100%;
      margin: auto;
      width: 100%;
      height: 100%;
      padding-left: 4rem;
      padding-right: 4rem;
      @include mobile() {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .navbar-item {
        display: block;
        font-size: 2.25rem;
        color: $black;
        background: none!important;
        text-align: right;
        transition: color 0.5s ease;
        &:after {
          font-size: 2rem;
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: 0 auto;
          display: block;
          height: 0px;
          background: transparent;
          width: 2px;
          transition: all 0.5s ease;
        }
        &:hover {
          &:after {
            height: 100%;
            background: $black;
          }
        }
      }
    }
    &::before, &::after {
      content:'';
      display: block;
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
    }
    // Transition timing Out
    .mobile-nav-wrap {
      transition: all 0.5s ease;
    }
    &::before {
      z-index: 8;
      background: white;
      transition: all 0.5s 0.25s ease;
    }
    &::after {
      z-index: 7;
      -webkit-backdrop-filter: blur(10px);
      transition: all 0.5s 0.66s ease;
    }
    &.is-active {
      visibility: visible;
      
      .mobile-nav-wrap, &::before, &::after {
        left: 0;
      }
      // Transitions In
      &::after {
        transition: all 0.33s ease;
      }
      &::before {
        transition: all 0.33s 0.25s ease;
      }
      .mobile-nav-wrap {
        transition: all 0.33s 0.33s ease;
      }
    }
  }
}
</style>

