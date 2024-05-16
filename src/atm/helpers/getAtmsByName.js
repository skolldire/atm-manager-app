import { atms } from "..";

export const getAtmsByName = (location = "") => {
   location = location.toLocaleLowerCase().trim();
   if (location.length === 0) return [];
   return atms.filter((atm) => atm.location.toLowerCase().includes(location));
};
