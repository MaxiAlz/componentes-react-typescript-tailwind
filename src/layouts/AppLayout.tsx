import { ReactNode, useEffect, useState } from 'react';
import { AppNavbar, AppSidebar } from '../components/Navigatios';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const AppLayout = ({ children, pageTitle }: LayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    document.title = `${pageTitle}| COMPONENTES MAXI `;

    return () => {
      document.title = 'SFV Catamarca';
    };
  }, [pageTitle]);

  return (
    <div className='flex h-screen bg-gray-100'>
      <AppSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className='flex flex-1 flex-col'>
        <AppNavbar />
        <main className='flex-1 overflow-auto px-10 pt-5 dark:bg-black'>
          {children}
        </main>
      </div>
    </div>
  );
};
export { AppLayout };
