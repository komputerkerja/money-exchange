const express = require('express')
const needle = require('needle')
const router = express.Router()
const url = require('url')

const API_BASE_COUNTRY = process.env.API_BASE_COUNTRY
const API_BASE_CURRENCY = process.env.API_BASE_CURRENCY
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

router.get('/', (req,res) => {
    res.status(200).json({
        convert: "/api/convert?q=IDR_USD",
        country: "/api/country",
        currencies: "/api/currencies"
    })
})

router.get('/convert', async (req,res) => {
    const params = new URLSearchParams({...url.parse(req.url, true).query})
    const apiRes = await needle('get', `${API_BASE_URL}${API_KEY_NAME}=${API_KEY_VALUE}&${params}`)
    const data = await apiRes.body
    res.status(200).json(data)
})

router.get('/country', async (req,res) => {
    const params = new URLSearchParams({...url.parse(req.url, true).query})
    const apiRes = await needle('get', `${API_BASE_COUNTRY}${API_KEY_NAME}=${API_KEY_VALUE}&${params}`)
    const data = await apiRes.body
    res.status(200).json(data)
})

router.get('/currencies', async (req,res) => {
    const params = new URLSearchParams({...url.parse(req.url, true).query})
    const apiRes = await needle('get', `${API_BASE_CURRENCY}${API_KEY_NAME}=${API_KEY_VALUE}&${params}`)
    const data = await apiRes.body
    res.status(200).json(data)
})

module.exports = router