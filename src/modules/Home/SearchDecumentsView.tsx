import { SearchInput } from '../../components/Inputs';
import { HomeLayout } from '../../layouts/HomeLayout';

const SearchDecumentsView = () => {
  return (
    <HomeLayout>
      <div className='m-5 flex flex-col  items-center justify-center  '>
        <h1 className='text-4xl font-bold dark:text-white'>
          Consultar tramites
        </h1>
        <div className='w-1/3'>
          <SearchInput
            labelButton='Buscar tramite'
            nameInput='tramite'
            placeholderInput='AA123456BC'
            key='tramite'
            titleInput='Ingrese un numero de tramite para buscar'
          />
        </div>
      </div>
    </HomeLayout>
  );
};

export { SearchDecumentsView };
