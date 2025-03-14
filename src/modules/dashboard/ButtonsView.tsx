import { CardButtons } from '../../components/Buttons';
import { AppLayout } from '../../layouts/AppLayout';

const ButtonsView = () => {
  return (
    <AppLayout pageTitle='Buttons'>
      <section className='m-10'>
        <h2 className='text-center text-2xl'>CardButtons</h2>

        <div className='grid grid-cols-2 place-items-center gap-4 md:grid-cols-2'>
          <CardButtons
            label='Ingresar con AFIP'
            description='Para comenzar tu trámite necesitas Iniciar Sesión en AFIP con clave Fiscal nivel 2 o superior'
          />
          <CardButtons
            onClick={() => {}}
            label='Consulta tu trámite'
            description='Ingresa los datos de tu trámite, haz solicitudes, consulta su estado y solicita revisiones.'
          />
        </div>
      </section>
    </AppLayout>
  );
};

export { ButtonsView };
