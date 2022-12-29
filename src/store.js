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
  /**
   * Adds new event to active day events
   *
   * @param {String} eventDetails Description of the event
   */
  submitEvent(eventDetails) {
    const day = this.getActiveDay();
    day.events.push({
      details: eventDetails,
      edit: false,
    });
  },
};
