<script>
  import { createEventDispatcher } from 'svelte';
  import TextInput from '../UI/TextInput.svelte';
  import Button from '../UI/Button.svelte';
  import Modal from '../UI/Modal.svelte';
  import { isEmpty, isValidEmail } from '../helpers/validation.js';

  let title = '';
  let subTitle = '';
  let imageUrl = '';
  let description = '';
  let email = '';
  let address = '';

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subTitleValid = !isEmpty(subTitle);
  $: imageUrlValid = !isEmpty(imageUrl);
  $: descriptionValid = !isEmpty(description);
  $: emailValid = isValidEmail(email);
  $: addressValid = !isEmpty(address);
  $: formIsValid =
    titleValid &&
    subTitleValid &&
    imageUrlValid &&
    descriptionValid &&
    emailValid &&
    addressValid;

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
      value={email}
      valid={emailValid}
      validityMessage="Please enter a valid email address."
      on:input={(event) => (email = event.target.value)}
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
  </div>
</Modal>
