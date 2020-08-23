<script>
  import meetups from './meetups-store';
  import { createEventDispatcher } from 'svelte';
  import TextInput from '../UI/TextInput.svelte';
  import Button from '../UI/Button.svelte';
  import Modal from '../UI/Modal.svelte';
  import { isEmpty, isValidEmail } from '../helpers/validation.js';

  export let id = null;

  let title = '';
  let subTitle = '';
  let imageUrl = '';
  let description = '';
  let contactEmail = '';
  let address = '';

  if (id) {
    const unsubscribe = meetups.subscribe((items) => {
      const selectedMeetup = items.find((item) => item.id === id);
      title = selectedMeetup.title;
      subTitle = selectedMeetup.subTitle;
      imageUrl = selectedMeetup.imageUrl;
      description = selectedMeetup.description;
      contactEmail = selectedMeetup.contactEmail;
      address = selectedMeetup.address;
    });

    unsubscribe();
  }

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subTitleValid = !isEmpty(subTitle);
  $: imageUrlValid = !isEmpty(imageUrl);
  $: descriptionValid = !isEmpty(description);
  $: emailValid = isValidEmail(contactEmail);
  $: addressValid = !isEmpty(address);
  $: formIsValid =
    titleValid &&
    subTitleValid &&
    imageUrlValid &&
    descriptionValid &&
    emailValid &&
    addressValid;

  function submitForm() {
    const meetupData = {
      title: title,
      subTitle: subTitle,
      description: description,
      imageUrl: imageUrl,
      address: address,
      contactEmail: contactEmail,
    };

    if (id) {
      meetups.updateMeetup(id, meetupData);
    } else {
      meetups.addMeetup(meetupData);
    }
    dispatch('save');
  }

  function cancel() {
    dispatch('cancel');
  }

  function deleteMeetup() {
    meetups.removeMeetup(id);
    dispatch('save');
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      valid={titleValid}
      validityMessage="Please enter a valid title."
      on:input={(event) => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="SubTitle"
      value={subTitle}
      valid={subTitleValid}
      validityMessage="Please enter a valid sub title."
      on:input={(event) => (subTitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      valid={addressValid}
      validityMessage="Please enter a valid address."
      on:input={(event) => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      valid={imageUrlValid}
      validityMessage="Please enter a valid image url."
      on:input={(event) => (imageUrl = event.target.value)} />
    <TextInput
      id="email"
      label="Email"
      value={contactEmail}
      valid={emailValid}
      validityMessage="Please enter a valid email address."
      on:input={(event) => (contactEmail = event.target.value)}
      type="email" />
    <TextInput
      id="description"
      rows="3"
      controlType="textarea"
      label="Description"
      valid={descriptionValid}
      validityMessage="Please enter a valid description."
      bind:value={description} />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>
      Save
    </Button>
    {#if id }
      <Button type="button" on:click={deleteMeetup}>
      Delete
    </Button>
    {/if}
  </div>
</Modal>
