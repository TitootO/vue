<template>
  <div class="users-table">
    <div class="users-table__row">
      <div class="users-table__cell">id</div>
      <div class="users-table__cell">Имя</div>
      <div class="users-table__cell">Почта</div>
      <div class="users-table__cell">Дата создания</div>
    </div>
    <div v-for="user in users" :key="user.id" class="users-table__row">
      <div class="users-table__cell">{{ user.id }}</div>
      <div class="users-table__cell">{{ user.name }}</div>
      <div class="users-table__cell">{{ user.email }}</div>
      <div class="users-table__cell">{{ user.created }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type UserType = {
  id: number
  name: string
  email: string
  created: string | Date
}

const currentDate = new Date()

const createdMockDate = computed(() => {
  return `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`
})

const users = ref<UserType[]>([
  {
    id: 0,
    name: 'Ann',
    email: 'alex@alex.alex',
    created: createdMockDate.value,
  },
  {
    id: 1,
    name: 'Alex',
    email: 'ann@ann.ann',
    created: createdMockDate.value,
  },
  {
    id: 2,
    name: 'Art',
    email: 'art@art.art',
    created: createdMockDate.value,
  },
  {
    id: 3,
    name: 'you',
    email: 'you@you.you',
    created: createdMockDate.value,
  }
])
</script>

<style scoped>
.users-table {
  display: flex;
  flex-direction: column;
}

.users-table__row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.users-table__cell {
  min-width: 120px;
  background-color: #c36c6c;
  border: 1px solid cornsilk;
  text-align: center;
  padding: 4px;
  
}
</style>