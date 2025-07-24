import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const links = [
  { to: '/admin/dashboard', label: 'Dashboard' },
  { to: '/admin/dashboard/reservations', label: 'Reservations' },
  { to: '/admin/dashboard/rooms', label: 'Rooms' },
  { to: '/admin/dashboard/calendar', label: 'Availability Calendar' },
  { to: '/admin/dashboard/messages', label: 'Messages' },
  { to: '/admin/dashboard/settings', label: 'Settings' },
];

const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('ariop_admin_token');
    navigate('/admin/login');
  };
  return (
    <aside className="bg-[#154c79] text-white w-64 min-h-screen p-6 flex flex-col">
      <div className="text-2xl font-bold mb-8">Ariop Admin</div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded hover:bg-[#113a5c] transition ${isActive ? 'bg-[#113a5c] font-semibold' : ''}`
                }
                end
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-8 bg-gray-200 hover:bg-gray-300 text-[#154c79] py-2 rounded transition font-bold text-lg"
      >
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar; 