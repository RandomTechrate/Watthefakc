import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-minecraft-primary p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-minecraft text-white">
          IceMC
        </Link>
        <div className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rules">Rules</NavLink>
          <NavLink to="/vote">Vote</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link 
      to={to} 
      className="text-white hover:text-minecraft-light transition-colors duration-200"
    >
      {children}
    </Link>
  );
}