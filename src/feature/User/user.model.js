export default class UserModel{
    id;
    name;
    email;
    password;

    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }

    static postAddUser(name,email,password){
        user.push(new UserModel(user.length+1,name,email,password))
        console.log(user);
    }

    static validUser(email,password){
        for(let i=0;i<user.length;i++){
            if(user[i].email==email && user[i].password==password){
                return true;
            }
            return false;
        }
    }
}

let user=[]