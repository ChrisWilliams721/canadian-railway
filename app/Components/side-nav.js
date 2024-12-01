export default function SideNav() {
  return (
    <aside className="w-64 h-screen bg-indigo-600 text-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 bg-indigo-700">
        <span className="text-xl font-bold">Canadian Railway</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 rounded-md hover:bg-indigo-500"
            >
              <span className="text-base font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 rounded-md hover:bg-indigo-500"
            >
              <span className="text-base font-medium">Team</span>
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>

      {/* Settings Link */}
      <div className="px-4 py-4">
        <a
          href="#"
          className="flex items-center px-4 py-2 rounded-md hover:bg-indigo-500"
        >
          <span className="text-base font-medium">Settings</span>
        </a>
      </div>
    </aside>
  );
}
