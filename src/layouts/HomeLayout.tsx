import { ReactNode } from 'react';
import { AppFooter, AppNavbar } from '../components/Navigatios';

interface HomeLayoutProps {
  children: ReactNode;
}
const HomeLayout = ({ children }: HomeLayoutProps) => {
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
