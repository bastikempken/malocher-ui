import { IxContentHeader, IxButton, IxPagination } from '@siemens/ix-react';
import { useTimesStore } from '../../stores/times.store';
import { useShallow } from 'zustand/shallow';
import List from '../list/List';
import Toolbar from '../toolbar';
import { useEffect } from 'react';

interface Props {}

export const Page = ({}: Props) => {
  const { load } = useTimesStore(useShallow((state) => ({ load: state.load })));

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <IxContentHeader slot="header" headerTitle="Times">
        <IxButton
          variant="primary"
          ghost
          icon="add-circle"
          onClick={() => {}}
          aria-label="add time"
        >
          Add Time
        </IxButton>
      </IxContentHeader>
      <div className="flex flex-col gap-2 h-full">
        <Toolbar />
        <List />
        <IxPagination count={20} />
      </div>
    </>
  );
};

export default Page;
