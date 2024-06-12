<script>
export default {
  name: "ResultSection",
  props: {
    results: Object,
  },
};
</script>
<template>
  <div class="my-container">
    <div>
      <h6>WHAT ARE WE DOING</h6>
      <h3>Results in Numbers</h3>
      <p>
        Our goal is to exceed expectations by delivering the best job possible.
      </p>
    </div>
    <ul>
      <li>
        <span>128</span>
        <span>Certifications</span>
      </li>
      <li>
        <span>230</span>
        <span>Employees</span>
      </li>
      <li>
        <span>517</span>
        <span>Customers</span>
      </li>
      <li>
        <span>94</span>
        <span>Countries Served</span>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
section {
  width: 100%;
}
</style>
