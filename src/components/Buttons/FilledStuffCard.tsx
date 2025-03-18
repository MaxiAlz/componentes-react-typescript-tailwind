import { MdSearch } from 'react-icons/md';

interface FilledStuffCardProps {
  title: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
  color: 'primary' | 'secondary' | 'info' | 'warning';
}

const FilledStuffCard: React.FC<FilledStuffCardProps> = ({
  title,
  icon: Icon = MdSearch,
  color = 'primary',
}) => {
  return (
    <div
      className={`bg-${color} border-stroke  shadow-default rounded-sm    border  px-4  py-6 text-white hover:opacity-95 dark:border-white`}
    >
      <div className='h-15  flex items-center justify-center rounded-full'>
        <Icon size={50} className='dark:text-white' />
      </div>

      <div className='mt-4 flex w-full flex-col items-center justify-center'>
        <span className='text-center  font-medium dark:text-white'>
          {title}
        </span>
      </div>
    </div>
  );
};

export { FilledStuffCard };
