import bcrypt from 'bcrypt';


export const createPasswordHash = async (password: string): Promise<void> => {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {})
}