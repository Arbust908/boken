<template>
  <main class="mx-auto prose">
    <ContentDoc>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<style>
@media print {
  main {
    margin: 10mm 15mm;
  }
  .page_break {
    page-break-after: always;
  }
}
</style>
