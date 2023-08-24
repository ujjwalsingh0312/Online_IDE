import bcrypt from "bcrypt";
const hashing = {
    SALT:10,
    passwordHash(plainPwd){
        return bcrypt.hashSync(plainPwd, this.SALT);
    },
    matchPassword(plainPwd, dbPwd){
        return bcrypt.compareSync(plainPwd, dbPwd);
    }
}
export default hashing;