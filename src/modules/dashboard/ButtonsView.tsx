import { IoDocumentSharp } from 'react-icons/io5';
import { CardButtons, FilledStuffCard } from '../../components/Buttons';
import { AppLayout } from '../../layouts/AppLayout';

const ButtonsView = () => {
  return (
    <AppLayout pageTitle='Buttons'>
      <section className='m-10'>
        <h2 className='text-center text-2xl'>CardButtons</h2>

        <div className='grid grid-cols-2 place-items-center gap-4 md:grid-cols-2'>
          <div>
            <p>CardButtons</p>
            <CardButtons
              label='Ingresar con AFIP'
              description='Para comenzar tu trámite necesitas Iniciar Sesión en AFIP con clave Fiscal nivel 2 o superior'
            />
          </div>
          <div>
            <p>FilledStuffCard</p>
            <FilledStuffCard
              // onClick={() => {}}
              title='Consulta tu trámite'
              color='warning'
              icon={IoDocumentSharp}
            />
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export { ButtonsView };
