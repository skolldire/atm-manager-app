import { balances } from "..";
import { atms } from "../../atm";


export const getBalanceById = (id) => {
   const a = atms.find( atm => atm.id === Number(id) );
   const b =  balances.find( balance => balance.id === Number(id) );
   if (!a || !b) return null;
   return { ...a, ...b };
};