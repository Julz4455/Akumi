const express = require('express')
const Discord = require('discord.js')
const client = new Discord.Client()
const { InvalidBodyError } = require('../util/errors')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: '‹‹ Constanze ››' })
})

router.get('/drunkprogramer', async (req, res) => {
  let size = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096].includes(Number(req.query.size)) ? Number(req.query.size) : 1024
  if(process.env.OVERRIDE_PFP == 1) {
    if(process.env.OVERRIDE_PFP_HAS_SIZE == 1)
      res.send({ img: `${process.env.OVERRIDE_PFP_URL}${size}` })
    else
      res.send({ img: process.env.OVERRIDE_PFP_URL })
  } else
    res.send({ img: (await client.users.fetch('334067823229796367', { force: true })).avatarURL({ format: 'png', dynamic: true, size }) })
})

router.get('/bbg', async (req, res) => {
  res.send({ uri: `https://clearvision.gitlab.io/images/sapphire.jpg` })
})

client.login(process.env.TOKEN)

module.exports = router
