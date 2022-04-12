import React from 'react';

// styles
import styles from './Home.modlues.css';

export default function TransactionList({ transactions }) {
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p>${transaction.amount}</p>
        </li>
      ))}
    </ul>
  );
}
