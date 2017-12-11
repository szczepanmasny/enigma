<template>
  <div>
    <p>
      <h2>Parking {{content.name}}</h2>
      <h4>{{content.description}}</h4>
    </p>
    <p>
      <div>Miejsca:
        <strong>{{content.spacesCount}}</strong>
      </div>
      <div>Wolne miejsca:
        <strong>{{content.availableSpacesCount}}</strong>
      </div>
    </p>
    <p>Adres:
      <strong>{{content.address.street}}{{content.address.house ? ' ' + content.address.house : ''}}, {{content.address.city}}</strong>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'parking',
    props: [
      'content'
    ],
    data() {
      return {};
    },
  };

</script>

<style scoped>
  strong {
    font-weight: bold;
  }

</style>
