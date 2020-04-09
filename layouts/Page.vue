<template>
  <div class="card mb-1">
    <article class="p-1-5">
      <header class="card-title">
        <h1 class="m-0 mb-0-8 font-size-2 font-normal">{{ $page.title }}</h1>
      </header>
      <div class="mt-1 mb-1 ">
        <Content />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Post',
};
</script>
