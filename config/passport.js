const passport=require("passport")
const jwtStrategy=require("passport-jwt").Strategy
const exttractJWT=require("passport-jwt").ExtractJwt
const UserModel=require("../models/userModel")
module.exports =passport.use(new jwtStrategy({
    //param 1 de strategy
    jwtFromRequest:exttractJWT.fromAuthHeaderAsBearerToken(),
     secretOrKey:process.env.SECRET_TOKEN
    },
    //param 2 de strategy
    (jwt_payload,done)=>{
            console.log("passport payload",jwt_payload)
                UserModel.findOne({_id:jwt_payload.id})
                .then(user=>{//se encuentra el user en la BD
                    console.log("usuario",user)
                    if(user){
                        return done(null,user)

                    }else if(err){
                        console.log("error al leer usuario de BD en passport.js",err)
                        return (err,false)
                        }else{
                            return done(null,false)
                        }
                }).catch(err=>{
                    console.log("catcheo de error en passoport.js: ",err)
                    return done(err,false)
                })
        }
    )
)
