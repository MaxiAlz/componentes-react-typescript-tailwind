import { MdSearch } from 'react-icons/md';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmit?: () => void;
  labelButton?: string;
  titleInput?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>; // Props para el botón
}

const SearchInput = ({
  onSubmit,
  name,
  placeholder = 'Ingrese un texto',
  labelButton = 'Buscar',
  titleInput = 'Ingrese un texto',
  icon: Icon = MdSearch,
  className,
  buttonProps,
  ...inputProps
}: SearchInputProps) => {
  return (
    <div
      className={`flex flex-col rounded-lg bg-white dark:border-boxdark dark:bg-boxdark ${className}`}
    >
      <div className='text-start text-parragraph dark:text-white'>
        <p className='ml-1'>{titleInput}</p>
      </div>
      <div className='md:w-1/2'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
          className='flex w-full'
        >
          <div className='relative my-2 w-full'>
            {Icon && (
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>
                <Icon className='size-5' />
              </span>
            )}
            <input
              type='text'
              name={name}
              placeholder={placeholder}
              className='w-full rounded-lg border p-2 pl-10 dark:bg-boxdark dark:text-white'
              {...inputProps}
            />
          </div>
          <button
            type='button'
            className='my-2 ml-2 rounded-md bg-info p-2 px-4 font-semibold text-white hover:bg-darknessPrimary'
            {...buttonProps}
          >
            {labelButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export { SearchInput };
