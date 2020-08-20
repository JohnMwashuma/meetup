<script>
  import Header from './UI/Header.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';

  let title = '';
  let subTitle = '';
  let imageUrl = '';
  let description = '';
  let email = '';
  let address = '';

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
      isFavourite: false
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
      isFavourite: false
    },
  ];

  function addMeetup(params) {
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
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={(event) => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="SubTitle"
      value={subTitle}
      on:input={(event) => (subTitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={(event) => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={(event) => (imageUrl = event.target.value)} />
    <TextInput
      id="email"
      label="Email"
      value={email}
      on:input={(event) => (email = event.target.value)}
      type="email" />
    <TextInput
      id="description"
      rows="3"
      controlType="textarea"
      label="Description"
      value={description}
      on:input={(event) => (description = event.target.value)} />
    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} on:togglefavourite={toggleFavourite} />
</main>
