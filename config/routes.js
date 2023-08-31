const express = require('express')
const route = express.Router()
const articleController = require('../controllers/articleController')


route.get('/', articleController.mainPage)
route.get('/new/article', articleController.newArticlePage)
route.post('/add-new-article', articleController.addNewArticle)
route.get('/articles/:id/detail', articleController.detailPage)
route.get('/articles/:id/edit', articleController.editPage)
route.post('/articles/:id/update', articleController.updateArticle)
route.post('/articles/:id/delete', articleController.deleteArticle)
module.exports =  route;