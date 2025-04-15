import { IxContentHeader, IxButton, IxPagination } from '@siemens/ix-react';
import { useTimesStore } from '../stores/times.store';
import { useShallow } from 'zustand/shallow';
import TimeList from './TimeList';
import Toolbar from './Toolbar';
import { useEffect } from 'react';

interface Props {}

export const Times = ({}: Props) => {
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
        <TimeList />
        <IxPagination count={20} />
      </div>
    </>
  );
};

export default Times;
