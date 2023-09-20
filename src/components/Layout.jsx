import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar'

export const Layout = () => {
  return (
    <main>
      <Sidebar />
      <Outlet />
    </main>
  )
};
