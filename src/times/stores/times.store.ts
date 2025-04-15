import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Time } from '../types/time.model';
import { TimeResponse } from '../types/time-response.model';

export interface TimesStore {
  currentPage: number;
  loading: boolean;
  error: boolean;
  times: Time[];
}

export interface TimesAction {
  load: () => void;
}

const defaultStore: TimesStore = {
  currentPage: 1,
  loading: false,
  error: false,
  times: [],
};

export const useTimesStore = create<TimesStore & TimesAction>()(
  devtools((set) => ({
    ...defaultStore,
    load: async () => {
      try {
        set({ loading: true, error: false });
        const response = await fetch('/data.json');
        console.log(response);
        if (response.ok) {
          const times = <TimeResponse[]>await response.json();
          console.log(times);
          set({ times });
        } else {
          set({ error: false });
        }
      } catch (error: unknown) {
        set({ error: false });
      } finally {
        set({ loading: false });
      }
    },
  })),
);
