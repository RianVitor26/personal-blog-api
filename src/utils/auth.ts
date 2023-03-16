import * as bcrypt from 'bcrypt';

export const createPasswordHash = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return new Promise<string>((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
};

interface IUser {
      password: string;
}

export const comparePassword = async (password: string, user: IUser): Promise<boolean> => {
  return bcrypt.compare(password, user.password);
};