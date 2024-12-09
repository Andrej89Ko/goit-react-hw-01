import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th className={style.text}>Type</th>
          <th className={style.text}>Amount</th>
          <th className={style.text}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr className={style.row} key={item.id}>
              <td className={style.cell}>{item.type}</td>
              <td className={style.cell}>{item.amount}</td>
              <td className={style.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;