<script>
  import { createEventDispatcher } from 'svelte';
  import TextInput from '../UI/TextInput.svelte';
  import Button from '../UI/Button.svelte';
  import Modal from '../UI/Modal.svelte';

  let title = '';
  let subTitle = '';
  let imageUrl = '';
  let description = '';
  let email = '';
  let address = '';
  const dispatch = createEventDispatcher();

  function submitForm() {
    dispatch('save', {
      title,
      subTitle,
      imageUrl,
      description,
      email,
      address,
    });
  }

  function cancel() {
    dispatch('cancel');
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
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm}>Save</Button>
  </div>
</Modal>
