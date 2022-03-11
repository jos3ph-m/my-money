import { useState } from 'react/cjs/react.production.min';

// styles
import styles from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return <div>Sign up</div>;
}
