import { Avatar, DarkThemeToggle, Dropdown, Navbar } from 'flowbite-react';
import logoBlanco from '../../assets/logos/logo_CATACAPI_claro.png';

const AppNavbar = () => {
  return (
    <Navbar className='bg-primary text-white '>
      <div className='flex w-full justify-between'>
        <Navbar.Brand>
          <img
            src={logoBlanco}
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite React Logo'
          />
        </Navbar.Brand>
        <div className='flex'>
          <DarkThemeToggle className='mx-2' />
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt='User settings'
                img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </div>
    </Navbar>
  );
};

export { AppNavbar };
