import { ReactNode, useEffect } from 'react';
import { AppFooter, AppNavbar } from '../components/Navigatios';

interface HomeLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}
const HomeLayout = ({ children, pageTitle }: HomeLayoutProps) => {
  useEffect(() => {
    document.title = `${pageTitle} | COMPONENTES MAXI  `;
    return () => {
      document.title = 'COMPONENTES MAXI';
    };
  }, [pageTitle]);

  return (
    <div className='flex h-screen bg-gray-100'>
      <div className='flex flex-1 flex-col'>
        <AppNavbar />
        <main className='flex-1 dark:bg-gray-800'>{children}</main>
        <AppFooter />
      </div>
    </div>
  );
};

export { HomeLayout };
