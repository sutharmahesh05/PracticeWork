const express=require('express');
const User=require('./schema');
const passport = require('passport');
const Localstratergy=require('passport-local').Strategy;

exports.initializepassport=(passport)=>{
    passport.use(new Localstratergy(async(username,password,done)=>{
        try{
            const user=await User.findOne({username})
            if(!user){
                return done(null,false,{message:"No user with that username"})
            }
            else if(user.password!==password){
                return done(null,false,{message:"wrong password"})
            }
            return done(null,user)
        }
        catch(err){
            return done(err)
        }
    }))
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })

    passport.deserializeUser((async (id,done)=>{
        try{
            const user=await User.findByid(id)
            done(null,user)
        }
        catch(err){
            done(err)
        }
    }))
}