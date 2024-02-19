<template>
  <div class="relative p-4 bg-adaptive text-adaptive">
    <Header />
    <slot />
    <Footer />
    <aside class="background-gradient absolute absolute inset-y-0 left-0 h-full w-2" />
  </div>
</template>

<style scoped>
/*
fff1f0
ffd18d
ff7b7c
8c60d3
8b09a4
5201a3
*/
.background-gradient {
  background: linear-gradient(
    180deg,
    #fff1f0,
    #ffd18d,
    #ff7b7c,
    #8c60d3,
    #8b09a4,
    #5201a3
  );
}
</style>
