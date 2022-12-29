import { seedData } from './seed';
import { reactive } from 'vue';

export const store = {
  state: {
    data: reactive(seedData),
  },
  getActiveDay() {
    return this.state.data.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.data.map((d) => {
      d.id === dayId ? (d.active = true) : (d.active = false);
    });
  },
};
