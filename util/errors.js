exports.InvalidBodyError = class extends Error {
  constructor(m) {
    super(m)
    this.message = m
    this.code = 50035
    this.name = "Invalid Body"
  }
}
