import { usePathname } from 'next/navigation';

import { Bell, Briefcase, Home, Settings, User } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  const isNavItemActive = (pathname, nav) => pathname.includes(nav);

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/" className={pathname === '/' ? 'active' : ''}>
              <Home size={20} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className={isNavItemActive(pathname, '/profile') ? 'active' : ''}
            >
              <User size={20} />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a
              href="/notifications"
              className={isNavItemActive(pathname, '/notifications') ? 'active' : ''}
            >
              <Bell size={20} />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className={isNavItemActive(pathname, '/projects') ? 'active' : ''}
            >
              <Briefcase size={20} />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className={isNavItemActive(pathname, '/settings') ? 'active' : ''}
            >
              <Settings size={20} />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
