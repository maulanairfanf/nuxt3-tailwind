<template>
	<div class="grid grid-cols-1 gap-4 container mx-auto my-4">
		<div v-if="breedImagesPending">Loading..</div>
		<div v-else-if="breedImagesError">{{ breedImagesError }}</div>
		<div v-for="(item, index) in breedImagesList" :key="index">
			<img class="rounded-lg w-full fit min-h-96 object-cover" />
			<!-- :src="item.url"
				:alt="item.id"
				loading="lazy" -->
		</div>
	</div>
</template>
<script setup>
const {
	breedImagesList,
	breedImagesError,
	breedImagesPending,
	fetchBreedImages,
} = useBreedImages()
</script>
