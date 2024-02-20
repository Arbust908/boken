<script setup lang='ts'>
const { data, pending, error } = await useAsyncData(
  'tables',
  () => $fetch('/api/tables'),
)
</script>

<template>
  <main class="grid gap-3 lg:grid-cols-3 md:grid-cols-2">
    <section v-if="pending">
      Loading...
    </section>
    <section v-else-if="error">
      {{ error.message }}
    </section>
    <template v-else-if="data">
      <section v-for="(table, tableName) in data.body" :key="`${table.length}length${tableName}index`">
        <h2 class="mb-6 text-xl uppercase">
          {{ tableName }}
        </h2>
        <table>
          <thead>
            <tr>
              <th>
                d{{ table.length }}
              </th>
              <th>
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in table" :key="`${value}length${key}index`" class="divide-y divide-slate-500/50">
              <td class="border-r pr-2 text-right">
                {{ key + 1 }}
              </td>
              <td class="pl-2 font-bold">
                {{ value }}
              </td>
            </tr>
          </tbody>
          <!--
      -->
        </table>
      </section>
    </template>
    <p v-else>
      No data
    </p>
  </main>
</template>
