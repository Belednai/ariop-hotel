import React from 'react';

const DashboardHome: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Welcome to the Ariop Hotel Admin Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Placeholder for summary cards */}
      <div className="bg-white p-6 rounded shadow">Reservations: --</div>
      <div className="bg-white p-6 rounded shadow">Rooms: --</div>
      <div className="bg-white p-6 rounded shadow">Messages: --</div>
    </div>
  </div>
);

export default DashboardHome; 