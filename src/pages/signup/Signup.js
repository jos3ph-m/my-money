import { useState } from 'react/cjs/react.production.min';

// styles
import styles from './Signup.module.css';

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log(email, password);
};

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  
  return (
    <form onSubmit={handleSubmit} className={styles.['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">Signup</button>
    </form>
  )
}
