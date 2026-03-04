export default class UserModel{
    id;
    role;
    name;
    email;
    password;

    constructor(id,role,name,email,password){
        this.id=id;
        this.role=role;
        this.name=name;
        this.email=email;
        this.password=password;
    }

    static postAddUser(role,name,email,password){
        user.push(new UserModel(user.length+1,role,name,email,password))
        console.log(user);
    }

    static validUser(email,password){
        for(let i=0;i<user.length;i++){
            if(user[i].email==email && user[i].password==password){
                return user[i].role;
            }
        }
         return false;
    }
}

let user=[]