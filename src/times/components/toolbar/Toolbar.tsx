import { IxCategoryFilter, IxButton } from '@siemens/ix-react';

const Toolbar = ({}) => {
  return (
    <div className="flex">
      <IxCategoryFilter
        className="w-1/2"
        placeholder="Filter by"
        suggestions={['a', 'b']}
      />
      <div className="w-1/2 flex justify-around">
        <IxButton
          variant="primary"
          ghost
          icon="calendar"
          onClick={() => {}}
          aria-label="select date range"
        >
          15.04.2025 - 16.04.2025
        </IxButton>
        <IxButton
          variant="primary"
          ghost
          icon="sort"
          onClick={() => {}}
          aria-label="select sort"
        >
          Desc
        </IxButton>
      </div>
    </div>
  );
};

export default Toolbar;
