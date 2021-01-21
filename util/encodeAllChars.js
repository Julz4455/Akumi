module.exports = s => {
  let hx = '0123456789ABCDEF'
  let r = ''

  for(const cx in s.split('')) {
    let c = s.charCodeAt(cx)
    r += `%${hx[(c & 0xF0) >> 4]}${hx[(c & 0x0F)]}`
  }

  return r
}