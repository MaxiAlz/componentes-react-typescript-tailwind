import { Sidebar, Tooltip } from 'flowbite-react';
import { BiJoystickButton } from 'react-icons/bi';

import {
  HiArrowSmRight,
  HiChartPie,
  HiMenu,
  HiShoppingBag,
  HiTable,
  HiUser,
} from 'react-icons/hi';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const appSidebarItems = [
  { icon: HiChartPie, label: 'Dashboard', path: '/Dashboard' },
  { icon: HiShoppingBag, label: 'Formularios UI', path: '/Forms' },
  { icon: BiJoystickButton, label: 'Buttons ', path: '/buttons' },
  // { icon: HiInbox, label: 'Ingresos', path: '/Ingresos' },
  { icon: HiUser, label: 'Usuarios', path: '/Usuarios' },
  { icon: HiArrowSmRight, label: 'Sign In', path: '/Sign-In' },
  { icon: HiTable, label: 'Sign Up', path: '/Sign-Up' },
];

const AppSidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  return (
    <div
      className={`hidden h-screen transition-all duration-300 md:block ${isCollapsed ? 'w-16' : 'w-64'} flex flex-col bg-white shadow-md `}
    >
      <div
        className={`flex-1 overflow-hidden ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}
      >
        <Sidebar aria-label='Sidebar' className='h-screen'>
          <button
            className='flex items-center gap-2 p-3 text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white'
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <HiMenu size={24} />
            {!isCollapsed && (
              <span className='transition-all duration-300'>Menú</span>
            )}
          </button>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {appSidebarItems.map((item) => (
                <Tooltip
                  content={item.label}
                  key={item.label}
                  placement='right'
                  className={`${isCollapsed ? '' : 'hidden'} bg-primary text-white`}
                >
                  <Sidebar.Item href={item.path} icon={item.icon}>
                    {!isCollapsed && item.label}
                  </Sidebar.Item>
                </Tooltip>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export { AppSidebar };
