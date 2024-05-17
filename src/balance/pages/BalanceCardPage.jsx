import { useMemo } from "react";
import { getBalanceById } from "../helpers/getBalanceById";

export const BalanceCardPage = ({ id }) => {
   if (!id) return;
   const balance = useMemo(() => getBalanceById(id), [id]);
   if (!balance)
      return (
         <>
            <div className="row mt-5">
               <h1>Balance not found</h1>
            </div>
         </>
      );

   return (
      <>
         <div className="row mt-5">
            <h1>{balance.name}</h1>
            <p>{balance.location}</p>
            <hr />
            <div className="overflow-auto row" style={{ maxHeight: "65vh" }}>
               <table className="table table-hover table-striped">
                  <thead className="sticky-top">
                     <tr>
                        <th scope="col">Type Counter</th>
                        <th scope="col">Denom. A</th>
                        <th scope="col">Denom. B</th>
                        <th scope="col">Denom. C</th>
                        <th scope="col">Denom. D</th>
                        <th scope="col">Denom. E</th>
                        <th scope="col">Denom. F</th>
                        <th scope="col">Denom. G</th>
                        <th scope="col">Denom. H</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th scope="row">Deposits</th>
                        <td>
                           {
                              balance.deposits.BillDenominations
                                 .BillDenominationA
                           }
                        </td>
                        <td>
                           {
                              balance.deposits.BillDenominations
                                 .BillDenominationB
                           }
                        </td>
                        <td>
                           {
                              balance.deposits.BillDenominations
                                 .BillDenominationC
                           }
                        </td>
                        <td>
                           {
                              balance.deposits.BillDenominations
                                 .BillDenominationD
                           }
                        </td>
                        <td>
                           {
                              balance.deposits.BillDenominations
                                 .BillDenominationE
                           }
                        </td>
                        <td>
                           {
                              balance.deposits.BillDenominations
                                 .BillDenominationF
                           }
                        </td>
                        <td>
                           {
                              balance.deposits.BillDenominations
                                 .BillDenominationG
                           }
                        </td>
                        <td>
                           {
                              balance.deposits.BillDenominations
                                 .BillDenominationH
                           }
                        </td>
                     </tr>
                     <tr>
                        <th scope="row">Bill Dispensed</th>
                        <td>
                           {
                              balance.dispensed.BillDenominations
                                 .BillDenominationA
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.BillDenominations
                                 .BillDenominationB
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.BillDenominations
                                 .BillDenominationC
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.BillDenominations
                                 .BillDenominationD
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.BillDenominations
                                 .BillDenominationE
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.BillDenominations
                                 .BillDenominationF
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.BillDenominations
                                 .BillDenominationG
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.BillDenominations
                                 .BillDenominationH
                           }
                        </td>
                     </tr>
                     <tr>
                        <th scope="row">Coin Dispensed</th>
                        <td>
                           {
                              balance.dispensed.CoinDenominations
                                 .CoinDenominationA
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.CoinDenominations
                                 .CoinDenominationB
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.CoinDenominations
                                 .CoinDenominationC
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.CoinDenominations
                                 .CoinDenominationD
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.CoinDenominations
                                 .CoinDenominationE
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.CoinDenominations
                                 .CoinDenominationF
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.CoinDenominations
                                 .CoinDenominationG
                           }
                        </td>
                        <td>
                           {
                              balance.dispensed.CoinDenominations
                                 .CoinDenominationH
                           }
                        </td>
                     </tr>
                     <tr>
                        <th scope="row">Bill Remaining</th>
                        <td>
                           {
                              balance.remaining.BillDenominations
                                 .BillDenominationA
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.BillDenominations
                                 .BillDenominationB
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.BillDenominations
                                 .BillDenominationC
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.BillDenominations
                                 .BillDenominationD
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.BillDenominations
                                 .BillDenominationE
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.BillDenominations
                                 .BillDenominationF
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.BillDenominations
                                 .BillDenominationG
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.BillDenominations
                                 .BillDenominationH
                           }
                        </td>
                     </tr>
                     <tr>
                        <th scope="row">Coin Remaining</th>
                        <td>
                           {
                              balance.remaining.CoinDenominations
                                 .CoinDenominationA
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.CoinDenominations
                                 .CoinDenominationB
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.CoinDenominations
                                 .CoinDenominationC
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.CoinDenominations
                                 .CoinDenominationD
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.CoinDenominations
                                 .CoinDenominationE
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.CoinDenominations
                                 .CoinDenominationF
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.CoinDenominations
                                 .CoinDenominationG
                           }
                        </td>
                        <td>
                           {
                              balance.remaining.CoinDenominations
                                 .CoinDenominationH
                           }
                        </td>
                     </tr>
                     <tr>
                        <th scope="row">Purge</th>
                        <td>
                           {balance.purge.BillDenominations.BillDenominationA}
                        </td>
                        <td>
                           {balance.purge.BillDenominations.BillDenominationB}
                        </td>
                        <td>
                           {balance.purge.BillDenominations.BillDenominationC}
                        </td>
                        <td>
                           {balance.purge.BillDenominations.BillDenominationD}
                        </td>
                        <td>
                           {balance.purge.BillDenominations.BillDenominationE}
                        </td>
                        <td>
                           {balance.purge.BillDenominations.BillDenominationF}
                        </td>
                        <td>
                           {balance.purge.BillDenominations.BillDenominationG}
                        </td>
                        <td>
                           {balance.purge.BillDenominations.BillDenominationH}
                        </td>
                     </tr>
                     <tr>
                        <th scope="row">Recycling</th>
                        <td>
                           {
                              balance.recycling.BillDenominations
                                 .BillDenominationA
                           }
                        </td>
                        <td>
                           {
                              balance.recycling.BillDenominations
                                 .BillDenominationB
                           }
                        </td>
                        <td>
                           {
                              balance.recycling.BillDenominations
                                 .BillDenominationC
                           }
                        </td>
                        <td>
                           {
                              balance.recycling.BillDenominations
                                 .BillDenominationD
                           }
                        </td>
                        <td>
                           {
                              balance.recycling.BillDenominations
                                 .BillDenominationE
                           }
                        </td>
                        <td>
                           {
                              balance.recycling.BillDenominations
                                 .BillDenominationF
                           }
                        </td>
                        <td>
                           {
                              balance.recycling.BillDenominations
                                 .BillDenominationG
                           }
                        </td>
                        <td>
                           {
                              balance.recycling.BillDenominations
                                 .BillDenominationH
                           }
                        </td>
                     </tr>
                     <tr>
                        <th scope="row">Bill Supply</th>
                        <td>
                           {balance.supply.BillDenominations.BillDenominationA}
                        </td>
                        <td>
                           {balance.supply.BillDenominations.BillDenominationB}
                        </td>
                        <td>
                           {balance.supply.BillDenominations.BillDenominationC}
                        </td>
                        <td>
                           {balance.supply.BillDenominations.BillDenominationD}
                        </td>
                        <td>
                           {balance.supply.BillDenominations.BillDenominationE}
                        </td>
                        <td>
                           {balance.supply.BillDenominations.BillDenominationF}
                        </td>
                        <td>
                           {balance.supply.BillDenominations.BillDenominationG}
                        </td>
                        <td>
                           {balance.supply.BillDenominations.BillDenominationH}
                        </td>
                     </tr>
                     <tr>
                        <th scope="row">Coin Supply</th>
                        <td>
                           {balance.supply.CoinDenominations.CoinDenominationA}
                        </td>
                        <td>
                           {balance.supply.CoinDenominations.CoinDenominationB}
                        </td>
                        <td>
                           {balance.supply.CoinDenominations.CoinDenominationC}
                        </td>
                        <td>
                           {balance.supply.CoinDenominations.CoinDenominationD}
                        </td>
                        <td>
                           {balance.supply.CoinDenominations.CoinDenominationE}
                        </td>
                        <td>
                           {balance.supply.CoinDenominations.CoinDenominationF}
                        </td>
                        <td>
                           {balance.supply.CoinDenominations.CoinDenominationG}
                        </td>
                        <td>
                           {balance.supply.CoinDenominations.CoinDenominationH}
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
};
