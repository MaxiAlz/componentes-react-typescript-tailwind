import { Badge, Button, Tooltip } from 'flowbite-react';
import { IoMdAdd } from 'react-icons/io';
import { MdEdit, MdOutlineRemoveRedEye } from 'react-icons/md';

interface EntriesTableProps {
  title: string;
  buttonLabel?: string;
  onClick?: () => void;
}
const vehiclesData = [
  {
    fecha: '2025-03-14',
    patente: 'ABC123',
    área: 'Tránsito',
    responsable: 'Juan Pérez',
    estado: 'Ingresado',
  },
  {
    fecha: '2025-03-10',
    patente: 'DEF456',
    área: 'Policía',
    responsable: 'María González',
    estado: 'Egresado',
  },
  {
    fecha: '2025-03-16',
    patente: 'DER456',
    área: 'Policía',
    responsable: 'María González',
    estado: 'Ingresado',
  },
];

const EntriesTable = ({ title, buttonLabel, onClick }: EntriesTableProps) => {
  return (
    <div className='rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
      <div className='mb-4 flex items-center justify-between'>
        <h4 className='text-2xl font-semibold text-black dark:text-white'>
          {title}
        </h4>
        {buttonLabel && (
          <Button className='bg-primary text-2xl' onClick={onClick}>
            <IoMdAdd size={20} />
            {buttonLabel}
          </Button>
        )}
      </div>

      <div className='flex flex-col'>
        <div className='grid grid-cols-4 rounded-sm bg-gray-300 dark:bg-meta-4 dark:text-white sm:grid-cols-5'>
          <div className='p-2.5 xl:p-5'>
            <h5 className='xsm:text-base text-sm font-medium uppercase'>
              Patente
            </h5>
          </div>
          <div className='p-2.5 text-center xl:p-5'>
            <h5 className='xsm:text-base text-sm font-medium uppercase'>
              Estado
            </h5>
          </div>
          <div className='p-2.5 text-center xl:p-5'>
            <h5 className='xsm:text-base text-sm font-medium uppercase'>
              Fecha de ingreso
            </h5>
          </div>
          <div className='hidden p-2.5 text-center sm:block xl:p-5'>
            <h5 className='xsm:text-base text-sm font-medium uppercase'>
              Are responable
            </h5>
          </div>

          <div className='hidden p-2.5 text-center sm:block xl:p-5'>
            <h5 className='xsm:text-base text-sm font-medium uppercase'>
              Acciones
            </h5>
          </div>
        </div>

        {vehiclesData.map((vehicle, key) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-5 ${
              key === vehiclesData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
              <p className='hidden uppercase text-black dark:text-white sm:block'>
                {vehicle.patente}
              </p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='text-black dark:text-white'>{vehicle.estado}</p>
            </div>

            <div className='flex items-center justify-center p-2.5 dark:text-white xl:p-5'>
              <p>{vehicle.fecha}</p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <p className='text-black dark:text-white '>
                <Badge color='info'>{vehicle.área} </Badge>
              </p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <Tooltip content='Ver'>
                <Button pill size={300} className='mx-1'>
                  <MdOutlineRemoveRedEye className='size-5' />
                </Button>
              </Tooltip>
              <Tooltip content='Editar'>
                <Button pill color='success' size={300} className='mx-1'>
                  <MdEdit className='size-5' />
                </Button>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { EntriesTable };
