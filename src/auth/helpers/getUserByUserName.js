import { users } from "..";

export const getUserByUserName = (userName) => {
   return users.find( user => user.username === userName );
};