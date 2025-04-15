import { Time } from '../types/time.model';
import { IxTypography, IxIconButton, IxTooltip } from '@siemens/ix-react';

interface Props {
  time: Time;
}

export const TimeListItem = ({ time }: Props) => {
  return (
    <div className="border-b-1 p-2 flex items-center hover:bg-[var(--theme-color-secondary--hover)]">
      <div className="w-1/4">
        <IxTypography>{time.id} / day</IxTypography>
      </div>
      <div className="w-1/4">
        <IxTypography>{time.id} / start</IxTypography>
      </div>
      <div className="w-1/4">{time.id} / stop</div>
      <div className="w-1/4">{time.id} / tags</div>
      <div className="w-1/4">
        <IxIconButton
          class={`delete-tooltip-${time.id}`}
          aria-describedby="delete-tooltip"
          icon="trashcan"
          variant="secondary"
          ghost
          onClick={() => {}}
        />
        <IxTooltip id={time.id} for={`.delete-tooltip-${time.id}`}>
          Delete
        </IxTooltip>
        <IxIconButton
          class={`edit-tooltip-${time.id}`}
          aria-describedby="edit-tooltip"
          icon="pen"
          variant="secondary"
          ghost
          onClick={() => {}}
        />
        <IxTooltip id={time.id} for={`.edit-tooltip-${time.id}`}>
          Edit
        </IxTooltip>
      </div>
    </div>
  );
};

export default TimeListItem;
