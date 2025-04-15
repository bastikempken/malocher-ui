interface Props {}

export const ListHeader = ({}: Props) => {
  return (
    <div className="border-b-1 p-2 flex items-center">
      <div className="w-1/5">
        <b>Day</b>
      </div>
      <div className="w-1/5">
        <b>Start</b>
      </div>
      <div className="w-1/5">
        <b>Stop</b>
      </div>
      <div className="w-1/5">
        <b>Tags</b>
      </div>
      <div className="w-1/5">
        <b>Actions</b>
      </div>
    </div>
  );
};

export default ListHeader;
