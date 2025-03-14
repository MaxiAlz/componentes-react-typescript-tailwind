import { FormElements } from '../../components/Forms';
import { AppLayout } from '../../layouts/AppLayout';

const FormsView = () => {
  return (
    <AppLayout pageTitle='Forms'>
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 '>
        <div className='m-5 flex flex-col gap-9'>
          <FormElements />
        </div>
      </div>
    </AppLayout>
  );
};

export { FormsView };
