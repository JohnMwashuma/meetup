import { writable } from 'svelte/store';

const meetups = writable([]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  setMeetups: (meetupArray) => {
    meetups.set(meetupArray);
  },
  addMeetup: (data) => {
    const meetupData = {
      ...data,
    };

    meetups.update((items) => {
      return [meetupData, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update((items) => {
      const meetupIndex = items.findIndex((m) => m.id === id);
      const updatedMeetup = { ...items[meetupIndex], ...meetupData };
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  removeMeetup: (id) => {
    meetups.update((items) => {
      return items.filter((item) => item.id !== id);
    });
  },
  toggleFavourite: (id) => {
    meetups.update((items) => {
      const updateMeetup = { ...items.find((m) => m.id === id) };
      updateMeetup.isFavourite = !updateMeetup.isFavourite;

      const meetupIndex = items.findIndex((m) => m.id === id);
      const updateMeetups = [...items];
      updateMeetups[meetupIndex] = updateMeetup;
      return updateMeetups;
    });
  },
};
export default customMeetupsStore;
