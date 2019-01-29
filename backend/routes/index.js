module.exports = function (app){
    app.get('/', function (req, res){
        //console.log('chegou')
        res.render('index')  
        //app.controllers.index.home(req, res)
    })
}