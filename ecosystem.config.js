module.exports = {
  apps : [{
    script: 'bin/www',
    name: 'Akumi',
    watch: '.',
    ignore_watch: ['public', 'node_modules', 'views'],
    args: 'start'
  }]
}
