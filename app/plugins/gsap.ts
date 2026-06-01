import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  }

  nuxtApp.vueApp.directive("gsap", {
    getSSRProps(binding, vnode) {
      return {}
    },
    mounted(el, binding) {
      if (!import.meta.client) return;

      const type = binding.value || "fade-up"
      const delay = binding.arg ? parseFloat(binding.arg) : 0

      let fromVars: any = {}
      let toVars: any = {
        duration: 1.2,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }

      switch (type) {
        case "fade-up":
          fromVars = { y: 60, opacity: 0 }
          toVars = { ...toVars, y: 0, opacity: 1 }
          break

        case "fade-left":
          fromVars = { x: 60, opacity: 0 }
          toVars = { ...toVars, x: 0, opacity: 1 }
          break

        case "fade-right":
          fromVars = { x: -60, opacity: 0 }
          toVars = { ...toVars, x: 0, opacity: 1 }
          break

        case "zoom-in":
          fromVars = { scale: 0.85, opacity: 0 }
          toVars = { ...toVars, scale: 1, opacity: 1 }
          break

        case "fade-in":
          fromVars = { opacity: 0 }
          toVars = { ...toVars, opacity: 1 }
          break
      }

      gsap.set(el, fromVars)
      gsap.to(el, toVars)
    },
  })

  return {
    provide: {
      ScrollSmoother,
      ScrollTrigger,
      gsap,
    },
  }
})