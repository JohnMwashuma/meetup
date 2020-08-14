<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';

  const meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subTitle: 'Learn to code in 2 hours',
      description:
        'In this meetup, we will have some experts that teach you how to code',
      imageUrl:
        'https://www.freecodecamp.org/news/content/images/2019/08/meetup-talk.jpg',
      address: 'One Padmore, Geoge Padmore Road, Nairobi',
      contactEmail: 'code@ona.io',
    },
    {
      id: 'm2',
      title: 'Rails Meetup',
      subTitle: 'Learn to code in 2 hours',
      description:
        'In this meetup, we will have some experts that teach you how to code in rails',
      imageUrl:
        'https://blogs.mulesoft.com/wp-content/uploads/2017/11/mulesoft-developer-meetups.png',
      address: 'One Padmore, Geoge Padmore Road, Nairobi',
      contactEmail: 'code@ona.io',
    },
  ];
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <MeetupGrid {meetups} />
</main>
