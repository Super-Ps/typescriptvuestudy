<script setup  lang="ts">
import { reactive, ref } from 'vue'

defineProps<{ msg: string ,text:string}>()

const count = ref(0)

const user = reactive({
  name: 'Anna',
  age: 20,
})

function clickcount(){
  return count.value++
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="clickcount">count is {{ count }}</button>
    <code>{{text}}</code>
  <div>
    {{ user.name }}
  </div>
  <div>
    {{ user.age }}
  </div>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
