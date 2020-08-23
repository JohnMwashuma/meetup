import { writable } from 'svelte/store';

const meetups = writable([
  {
    id: 'm1',
    title: 'Coding Bootcamp',
    subTitle: 'Learn to code in 2 hours',
    description:
      'In this meetup, we will have some experts that teach you how to code',
    imageUrl:
      'https://image.shutterstock.com/image-vector/meetup-concept-illustration-young-people-260nw-571989925.jpg',
    address: 'One Padmore, Geoge Padmore Road, Nairobi',
    contactEmail: 'code@ona.io',
    isFavourite: false,
  },
  {
    id: 'm2',
    title: 'Rails Meetup',
    subTitle: 'Learn to code in 2 hours',
    description:
      'In this meetup, we will have some experts that teach you how to code in rails',
    imageUrl:
      'https://image.shutterstock.com/image-vector/meetup-concept-illustration-young-people-260nw-571989925.jpg',
    address: 'One Padmore, Geoge Padmore Road, Nairobi',
    contactEmail: 'code@ona.io',
    isFavourite: false,
  },
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (data) => {
    const meetupData = {
      ...data,
      isFavourite: false,
      id: Math.random().toString(),
    };

    meetups.update((items) => {
      return [meetupData, ...items];
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
