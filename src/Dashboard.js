import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <NavLink to="/dashboard/books">Books</NavLink>
      &nbsp;&nbsp;
      <NavLink to="/dashboard/products">Products</NavLink>
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;
