<script>
  import Header from './UI/Header.svelte';
  import MeetupItem from './Meetups/MeetupItem.svelte';

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
  #meetups {
    margin-top: 5rem;
  }
</style>

<Header />

<section id="meetups">
  {#each meetups as meetup, _ (meetup.id)}
    <MeetupItem
      title={meetup.title}
      subTitle={meetup.subTitle}
      imageUrl={meetup.imageUrl}
      description={meetup.description}
      email={meetup.contactEmail}
      address={meetup.address} />
  {/each}
</section>
