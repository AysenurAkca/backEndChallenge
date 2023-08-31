const Article = require('../models/articleModel')

const mainPage = async (req,res)=>{
    const articles = await Article.find()
    res.render('index', {articles})
    
}

const newArticlePage = (req, res)=> {
    res.render('newArticle',{err:""})
}

const addNewArticle = async (req,res) => {
    
    if(req.body.title.length<25) {
        res.render('newArticle', {err: 'The Title field must be longer than 25 characters'})}
    else if(req.body.article.length<100){
        res.render('newArticle', {err:' The Article field must be longer than 100 character'})
    }else{
        const newArticle = new Article(req.body);
        await newArticle.save()
        res.redirect('/')
    }
    

    
}

const detailPage = async (req,res) => {
    const {id} = req.params;
    const selectedArticle = await Article.findById(id)
    res.render('details', {selectedArticle})
}

const editPage = async (req,res) => {
    const {id} = req.params;
    const editArticle = await Article.findById(id)
    res.render('edit', {editArticle})
}

const updateArticle = async (req,res) => {
    const {id} = req.params;
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body, {runValidator: true})
    res.redirect('/')
}

const deleteArticle = async (req,res) => {
    const {id} = req.params;
    await Article.findByIdAndDelete(id)
    res.redirect('/')
}

module.exports = {mainPage,newArticlePage,addNewArticle,detailPage,editPage,updateArticle,deleteArticle}