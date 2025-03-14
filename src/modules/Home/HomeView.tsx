import { HomeLayout } from '../../layouts/HomeLayout';
import { CardButtons } from '../../components/Buttons';
import { useNavigate } from 'react-router';

const HomeView = () => {
  const navigation = useNavigate();
  return (
    <HomeLayout>
      <div className=' m-5 flex items-center justify-center  '>
        <h1 className='text-4xl font-bold dark:text-white'>
          Ingresá al sistema
        </h1>
      </div>
      {/* <div className='grid grid-cols-2 place-items-center gap-4 md:grid-cols-2 '>
        <div className='flex size-full items-center justify-center'>
          <CardButtons
            label='Ingresar con AFIP'
            description='Para comenzar tu trámite necesitas Iniciar Sesión en AFIP con clave Fiscal nivel 2 o superior'
          />
        </div>
        <div className='flex size-full items-center justify-center'>
          <CardButtons
            onClick={() => navigation('/consultar-tramite')}
            label='Consulta tu trámite'
            description='Ingresa los datos de tu trámite, haz solicitudes, consulta su estado y solicita revisiones.'
          />
        </div>
      </div> */}
      <div className='grid grid-cols-2 place-items-center gap-4 md:grid-cols-2 '>
        <CardButtons
          label='Ingresar con AFIP'
          description='Para comenzar tu trámite necesitas Iniciar Sesión en AFIP con clave Fiscal nivel 2 o superior'
        />
        <CardButtons
          onClick={() => navigation('/consultar-tramite')}
          label='Consulta tu trámite'
          description='Ingresa los datos de tu trámite, haz solicitudes, consulta su estado y solicita revisiones.'
        />
        <CardButtons
          label='Dashboard'
          onClick={() => navigation('/dashboard')}
        />
        <CardButtons label='Otro más' description='Un botón adicional' />
      </div>
    </HomeLayout>
  );
};

export { HomeView };
