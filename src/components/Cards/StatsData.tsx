import { MdSearch } from 'react-icons/md';

interface CardDataStatsProps {
  title: string;
  total: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
}

const StatsData: React.FC<CardDataStatsProps> = ({
  title,
  total,
  icon: Icon = MdSearch,
}) => {
  return (
    <div className='rounded-sm border border-stroke bg-white px-1 py-6 shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='flex h-15 items-center justify-center rounded-full dark:bg-boxdark'>
        <Icon size={50} className='dark:text-info' />
      </div>

      <div className='mt-4 flex w-full flex-col items-center justify-center'>
        <h4 className='text-center text-xl font-bold text-primary dark:text-white'>
          {total}
        </h4>
        <span className='text-center  font-medium dark:text-white'>
          {title}
        </span>
      </div>
    </div>
  );
};

export { StatsData };
