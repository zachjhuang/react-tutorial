import { NavLink } from 'react-router-dom';
import Banner from './Banner';
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';

const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({isActive}) => isActive ? 'active' : 'inactive';

const Navigation = () => (
    <AuthButton />
);

export default Navigation;