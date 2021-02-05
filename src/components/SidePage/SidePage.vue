<template>
  <aside class="sidePage__container">
    <details open>
      <summary class="sidePage__detailsHeader">Kruszec</summary>
      <p>Srebro (2)</p>
      <p>Białe złoto (3)</p>
      <p>Złoto (5)</p>
    </details>
    <details>
      <summary class="sidePage__detailsHeader">Rodzaj</summary>
      <p>Łańcuszki (2)</p>
      <p>Pierścionki (3)</p>
      <p>Kolczyki (5)</p>
    </details>
  </aside>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidePage__container {
  position: absolute;
  min-height: 80vh;
  width: 15%;
top: 100px;
padding: 25px;
}
.sidePage__detailsHeader{
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    margin-top: 8px;
}
</style>
