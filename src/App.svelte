<script>
  import Header from './UI/Header.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';

  let meetups = [
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
  ];

  let editMode = null;

  function addMeetup(event) {
    const newMeetup = {
      id: Math.random().toString(),
      title: event.detail.title,
      subTitle: event.detail.subTitle,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      address: event.detail.address,
      contactEmail: event.detail.email,
    };

    meetups = [newMeetup, ...meetups];
  }

  function toggleFavourite(event) {
    const id = event.detail;
    const updateMeetup = { ...meetups.find((m) => m.id === id) };
    updateMeetup.isFavourite = !updateMeetup.isFavourite;

    const meetupIndex = meetups.findIndex((m) => m.id === id);
    const updateMeetups = [...meetups];
    updateMeetups[meetupIndex] = updateMeetup;
    meetups = updateMeetups;
  }

  function cancelEdit() {
    editMode = null;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
  {/if}
  <MeetupGrid {meetups} on:togglefavourite={toggleFavourite} />
</main>
