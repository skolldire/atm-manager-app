import { atms } from "..";

export const getAtmById = (id) => {
   return atms.find( atm => atm.id === Number(id) );
};
