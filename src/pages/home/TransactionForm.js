import { useState } from 'react';

export default function TransactionForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <>
      <h3>Add a Transaction</h3>
      <form>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
