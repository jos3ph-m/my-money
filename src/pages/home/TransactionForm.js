import { useState } from 'react';

export default function TransactionForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <>
      <h3>Add a Transaction</h3>
      <form>
        <label></label>
      </form>
    </>
  );
}
