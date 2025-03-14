import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logoOscuro from '../../assets/logos/logo_CATACAPI_oscuro.png';

const AppFooter = () => {
  return (
    <footer className='bg-gray-app py-8'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div>
            <ul className='space-y-2 text-sm'>
              <li>Palacio Municipal | La Rioja 631</li>
              <li>SFV de Catamarca | Catamarca</li>
              <li>República Argentina | CP K4700EMV</li>
            </ul>
          </div>
          <div className='text-center text-xl font-semibold text-primary'>
            <p>Proveedores del estado </p>
            <p>S.I.P.R.O.M</p>
          </div>
          <div className='text-right'>
            <h2 className='mb-2 text-lg font-semibold'>¡Seguinos!</h2>
            <div className='flex justify-end space-x-4'>
              <a
                href='https://twitter.com/MuniSFVC'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter className='text-2xl hover:text-blue-400' />
              </a>
              <a
                href='https://www.facebook.com/catamarcatucapital'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook className='text-2xl hover:text-blue-600' />
              </a>
              <a
                href='https://www.youtube.com/channel/UCMAeIcE5sQa7chR-J13zlDw'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaYoutube className='text-2xl hover:text-red-500' />
              </a>
              <a
                href='https://www.instagram.com/catamarcacapital'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram className='text-2xl hover:text-pink-500' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 border-t border-gray-700 pt-4 text-center text-sm'>
        <p>
          © 2025 Municipalidad de San Fernando del Valle de Catamarca -
          Argentina | Secretaría de Modernización y Gabinete
        </p>
        <a
          href='https://catamarcaciudad.gob.ar'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='mx-auto mt-2 w-48'
            src={logoOscuro}
            alt='Argentina Unida'
          />
        </a>
      </div>
    </footer>
  );
};

export { AppFooter };
