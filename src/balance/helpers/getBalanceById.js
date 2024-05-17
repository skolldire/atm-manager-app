import { balances } from "..";
import { atms } from "../../atm";


export const getBalanceById = (id) => {
   const a = atms.find( atm => atm.id === Number(id) );
   if (!a) return null;
   const b =  balances.find( balance => balance.id === Number(id) );
   return { ...a, ...b };
};