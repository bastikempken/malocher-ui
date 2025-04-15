import { IxTypography, IxIconButton, IxTooltip } from '@siemens/ix-react';

interface Props {}

export const TimeListHeader = ({}: Props) => {
  return (
    <div className="border-b-1 p-2 flex items-center">
      <div className="w-1/5">
        <IxTypography>
          <b>Day</b>
        </IxTypography>
      </div>
      <div className="w-1/5">
        <IxTypography>
          <b>Start</b>
        </IxTypography>
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

export default TimeListHeader;
