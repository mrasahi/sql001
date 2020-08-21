const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const db = require('../db')

router.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, items) => {
        if (err) { console.log(err)}
        res.json(items)
    })
})

router.post('/items', (req, res) => {
    db.query('INSERT INTO items SET ?', req.body, (err, result) => {
        if (err) {console.log(err)}
        res.sendStatus(200)
    })
})

router.put('/items/:id', (req, res) => {
    db.query('UPDATE items SET isDone = ? WHERE id = ?', [req.body.isDone, req.params.id], err => {
      if (err) { console.log(err) }
      res.sendStatus(200)
    })
  })

router.delete('/items/:id', (req, res) => {
    db.query('DELETE FROM items WHERE id = ?', req.params.id, (err, results) => {
        if (err) {console.log(err)}
        res.sendStatus(200)
    })
})

module.exports = router