<script setup>
import { marked } from "marked";
const dayjs = useDayjs()
const media = useStrapiMedia()

const posts = useList("posts", {
  populate: '*',
});

await posts.load();
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="font-medium text-3xl uppercase tracking-tight mb-12">Nustra</h1>

    <section>
      <loading :loading="posts.loading" />

      <article v-for="{ id, attributes } in posts.data" :key="id">

        <div class="h-72 rounded-lg overflow-clip mb-12">
          <img class="w-full h-full object-cover" :src="media + attributes.cover.data.attributes.url" />
        </div>

        <header>
          <h1 class="text-4xl mb-6 lg:text-5xl font-bold">
            <nuxt-link :to="`/posts/${id}`">{{ attributes.title }}</nuxt-link>
          </h1>
          <span class="text-md text-gray-500">
            {{  dayjs(attributes.date).format('YYYY-MM-DD') }}
          </span>
        </header>

        <div class="prose py-20" v-html="marked.parse(attributes.content)"></div>
      </article>

      <pagination :pagination="posts.meta.pagination" />
    </section>
  </div>
</template>
