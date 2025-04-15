import { useShallow } from 'zustand/shallow';
import { useTimesStore } from '../stores/times.store';
import TimeListHeader from './TimeListHeader';
import TimeListItem from './TimeListItem';

interface Props {}

const TimeList = ({}: Props) => {
  const { times } = useTimesStore(
    useShallow((state) => ({ times: state.times })),
  );

  return (
    <div className="flex flex-col flex-1 shrink-1 basis-0 gap-0">
      <TimeListHeader />
      <div className="flex-1 shrink-1 basis-0 overflow-auto">
        {times.map((t) => (
          <TimeListItem time={t} key={t.id} />
        ))}
      </div>
    </div>
  );
};

export default TimeList;
