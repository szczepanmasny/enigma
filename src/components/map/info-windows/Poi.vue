<template>
  <div>
    <p>
      <h2>{{content.name}}</h2>
    </p>
    <p>
      <h4>{{content.description}}</h4>
    </p>
    <p>Kategoria:
      <strong>{{content.category}}</strong>
    </p>
    <p>Adres:
      <strong>{{content.address.street}}{{content.address.house ? ' ' + content.address.house : ''}}, {{content.address.city}}</strong>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'poi',
    props: [
      'content'
    ],
    data: () => ({}),
  };

</script>

<style scoped>
  strong {
    font-weight: bold;
  }
</style>
