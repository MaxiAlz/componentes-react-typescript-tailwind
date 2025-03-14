import { MdPersonOutline } from 'react-icons/md';
import { StatsData } from '../../components/Cards';
import { AppLayout } from '../../layouts/AppLayout';

import { LiaCarSolid } from 'react-icons/lia';
import { IoDocumentTextOutline } from 'react-icons/io5';

const AppDashboard = () => {
  return (
    <AppLayout pageTitle='Dashboard'>
      <div className='m-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <StatsData
          title='Vehiculos totales'
          key={'Total de Vehiculos'}
          total='1,3 K'
          icon={LiaCarSolid}
        />
        <StatsData
          title='Actas realizadas'
          key={'Actas realizadas'}
          total='1,3 K'
          icon={IoDocumentTextOutline}
        />
        <StatsData
          title='Usuarios'
          key={'Usuarios'}
          total='1,3 K'
          icon={MdPersonOutline}
        />
        <StatsData
          title='Otros datos'
          key={'Usuarios'}
          total='2 K'
          icon={MdPersonOutline}
        />
      </div>
    </AppLayout>
  );
};

export { AppDashboard };
