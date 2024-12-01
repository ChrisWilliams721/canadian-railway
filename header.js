export default function Header({ title }) {
  return (
    <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40" // Replace with your profile image
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover border border-gray-200 shadow-sm"
        />
        <span className="font-medium text-gray-900">Tom Cook</span>
      </div>
    </header>
  );
}
