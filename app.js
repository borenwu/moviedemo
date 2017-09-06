const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.set('views', './views');
app.set('view engine','jade')
app.listen(port)

console.log('start on port '+ port)

//index page
app.get('/',(req,res)=>{
    res.render('index',{
        title:'imooc 首页'
    })
})

//detail page
app.get('/movie/:id',(req,res)=>{
    res.render('detail',{
        title:'imooc 详情'
    })
})

//index page
app.get('/admin/movie',(req,res)=>{
    res.render('admin',{
        title:'imooc 后台录入'
    })
})

//index page
app.get('/admin/list',(req,res)=>{
    res.render('list',{
        title:'imooc 列表'
    })
})

