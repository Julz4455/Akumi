const s = [
  'Not Found',
  'Something\'s Missing.', 
  'Oops!', 
  'Oopsy! Page not found.', 
  'Page not found', 
  'Page lost in the wild', 
  'Lost in space', 
  'Looks like you\'re lost.'
]

let typing = new Typed('.type-404', {
  strings: s,
  loop: true,
  backDelay: 1100,
  backSpeed: 20,
  typeSpeed: 50,
  showCursor: false
})
