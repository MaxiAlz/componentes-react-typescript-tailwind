import { MdSearch } from 'react-icons/md';

interface SearchInputProps {
  onSubmit?: () => void | undefined;
  nameInput: string;
  placeholderInput: string;
  labelButton: string;
  titleInput: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
}

const SearchInput = ({
  onSubmit,
  nameInput,
  placeholderInput = 'Ingrese un texto',
  labelButton = 'Buscar',
  titleInput = 'Ingrese un texto',
  icon: Icon = MdSearch,
}: SearchInputProps) => {
  return (
    <div className='m-4 flex w-full flex-col items-center justify-center rounded-lg border border-solid p-4'>
      <div className='text-center text-parragraph dark:text-white'>
        <p>{titleInput}</p>
      </div>
      <form onSubmit={onSubmit} className='w-full'>
        <div className='relative m-2 w-full'>
          {Icon && (
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>
              <Icon className='size-5' />
            </span>
          )}
          <input
            type='text'
            name={nameInput}
            placeholder={placeholderInput}
            className={`w-full rounded-lg border p-2 pl-10`}
          />
        </div>
        <button
          type='submit'
          className='m-2 w-full rounded-full bg-info p-2 font-semibold text-white hover:bg-darknessPrimary'
        >
          {labelButton}
        </button>
      </form>
    </div>
  );
};

export { SearchInput };
