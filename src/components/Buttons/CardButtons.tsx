import { ButtonHTMLAttributes } from 'react';

interface CardButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  description?: string;
}

const CardButtons = ({
  label = 'Ingresar',
  description = 'Haz click aqui para ingresar',
  onClick,
}: CardButtonsProps) => {
  return (
    <div className='m-4 flex size-full min-h-[80px] min-w-[300px] max-w-2xl flex-col items-center justify-center rounded-lg border border-solid p-4'>
      <button
        onClick={onClick}
        className='m-2 w-full rounded-full bg-info p-4 font-semibold text-white hover:bg-darknessPrimary'
      >
        {label}
      </button>
      <div className='text-center text-parragraph dark:text-white'>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export { CardButtons };
