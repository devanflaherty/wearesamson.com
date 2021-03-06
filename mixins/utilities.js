import Vue from 'vue'
import {mapGetters} from 'vuex'
let camelCase = require('lodash/camelCase')

Vue.mixin({
  computed: {
    ...mapGetters(['primaryColor', 'backgroundColor', 'loading', 'navVis'])
  },
  methods: {
    imageLoader (imgSrc, el) {
      var img = new Image()
      img.src = imgSrc

      img.onload = function () {
        el.appendChild(img)
      }
    },
    setPageStyle (primary, contrast) {
      this.setPageContrast(contrast)
      this.setPrimaryColor(primary)
    },
    setBg (color, primary) {
      let bg = document.querySelector('.bgSpan')

      let updateBg = () => {
        bg.style.backgroundColor = color
        this.$store.dispatch('setPrimaryColor', primary)
      }
      window.requestAnimationFrame(updateBg)
    },
    setPrimaryColor (primary) {
      this.$store.dispatch('setPrimaryColor', primary)
    },
    setPageContrast (style, el) {
      if (el) {
        el = document.querySelector(el)
      } else {
        el = document.querySelector('body')
      }
      if (style) {
        el.classList.remove('page-contrast-Dark', 'page-contrast-Light')
        el.classList.add(`page-contrast-${style}`)
      } else {
        el.classList.remove('page-contrast-Dark', 'page-contrast-Light')
      }
    },
    setHeroUiContrast (style) {
      var body = document.querySelector('body')
      if (style) {
        body.classList.remove('hero-contrast-Dark', 'hero-contrast-Light')
        body.classList.add(`hero-contrast-${style}`)
      } else {
        body.classList.remove('hero-contrast-Dark', 'hero-contrast-Light')
      }
    },
    toCamelCase (str) {
      return camelCase(str)
    },
    toNewLines (str) {
      return str.split('\n').join('<br>')
    }
  },
  destroy () {
    this.setHeroUiContrast()
  }
  // scrollTo (el, obj) {
  //   // this.$ss().to(el)
  //   TweenMax.to(window, 1, {
  //     scrollTo: el
  //   })
  // }
  // beforeDestroy () {
  //   var body = document.querySelector('body')
  //   body.style.backgroundColor = null
  // }
})
