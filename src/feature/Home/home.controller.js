export default class HomeController{
    getHome(req,res){
        return res.render("home",{role:null})
    }
}