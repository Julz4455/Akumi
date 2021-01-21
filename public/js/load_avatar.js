const sizes = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096]

sizes.forEach(size => {
  fetch(`${window.location.origin}/drunkprogramer?size=${size}`)
  .then(_ => _.json())
  .then(({ img }) => {
    document.querySelectorAll(`.avatar_${size}`).forEach(e => {
      e.setAttribute('src', img)
      e.setAttribute('crossOrigin', 'Anonymous')
    })
  })
})

document.querySelector(`.avatar_256`).addEventListener('load', _ => {
  const thief = new ColorThief()
  const [r,g,b] = thief.getColor(document.querySelector('.avatar_256'))
  document.documentElement.style.setProperty('--image-primary', `rgb(${r}, ${g}, ${b})`)
})
