import { useShallow } from 'zustand/shallow';
import { useTimesStore } from '../../stores/times.store';
import ListHeader from '../list-header';
import ListItem from '../list-item';

interface Props {}

const List = ({}: Props) => {
  const { times } = useTimesStore(
    useShallow((state) => ({ times: state.times })),
  );

  return (
    <div className="flex flex-col flex-1 shrink-1 basis-0 gap-0">
      <ListHeader />
      <div className="flex-1 shrink-1 basis-0 overflow-auto">
        {times.map((t) => (
          <ListItem time={t} key={t.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
