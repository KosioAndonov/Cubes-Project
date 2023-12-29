const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: String,
    password:   String,

});

userSchema.virtual('repeatPassword')
    .set(function(value){
        if(value !== this.password){
            throw new Error("Passwords do not match");
        }
    });

    userSchema.pre('save', async function(){
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;

