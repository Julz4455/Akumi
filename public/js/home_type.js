const s = ['BackendDeveloper',
            'BotDeveloper',
            'JailbreakDeveloper']
let i = 0
const typing = new Typed('.constanze-type', {
  strings: s,
  loop: true,
  backDelay: 1100,
  backSpeed: 20,
  typeSpeed: 50,
  showCursor: false,
})

document.querySelector('.constanze-type').onclick = () => typing.toggle()
