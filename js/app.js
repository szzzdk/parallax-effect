window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px` //скрол по оси Y(вертикали)
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create( {
    wrapper: '.wrapper',
    content: '.content'
})