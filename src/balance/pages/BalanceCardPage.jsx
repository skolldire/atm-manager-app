import { useMemo } from "react";
import { getBalanceById } from "../helpers/getBalanceById";

export const BalanceCardPage = ({ id }) => {
   if (!id) return;

   const balance = useMemo(() => getBalanceById(id), [id]);
   if (!balance) {
      return (
         <div className="row mt-5">
            <h1>Balance not found</h1>
         </div>
      );
   }

   const {
      name,
      location,
      deposits: { BillDenominations: deposits },
      dispensed: {
         BillDenominations: dispensedBills,
         CoinDenominations: dispensedCoins,
      },
      remaining: {
         BillDenominations: remainingBills,
         CoinDenominations: remainingCoins,
      },
      purge: { BillDenominations: purge },
      recycling: { BillDenominations: recycling },
      supply: {
         BillDenominations: supplyBills,
         CoinDenominations: supplyCoins,
      },
   } = balance;

   const rows = [
      { label: "Deposits", data: deposits },
      { label: "Bill Dispensed", data: dispensedBills },
      { label: "Coin Dispensed", data: dispensedCoins },
      { label: "Bill Remaining", data: remainingBills },
      { label: "Coin Remaining", data: remainingCoins },
      { label: "Purge", data: purge },
      { label: "Recycling", data: recycling },
      { label: "Bill Supply", data: supplyBills },
      { label: "Coin Supply", data: supplyCoins },
   ];

   const denominations = ["A", "B", "C", "D", "E", "F", "G", "H"];

   return (
      <div className="row mt-5">
         <h1>{name}</h1>
         <p>{location}</p>
         <hr />
         <div className="overflow-auto row" style={{ maxHeight: "65vh" }}>
            <table className="table table-hover table-striped">
               <thead className="sticky-top">
                  <tr>
                     <th scope="col">Type Counter</th>
                     {denominations.map((denom) => (
                        <th scope="col" key={denom}>
                           Denom. {denom}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {rows.map(({ label, data }) => (
                     <tr key={label}>
                        <th scope="row">{label}</th>
                        {denominations.map((denom) => (
                           <td key={denom}>
                              {data[`BillDenomination${denom}`]}
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};
