<template>
	<nav class="bg-gray-900 border-gray-200">
		<div
			class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
		>
			<a
				href="https://flowbite.com/"
				class="flex items-center space-x-3 rtl:space-x-reverse"
			>
				<img
					src="https://flowbite.com/docs/images/logo.svg"
					class="h-8"
					alt="Flowbite Logo"
				/>
				<span
					class="self-center text-2xl font-semibold whitespace-nowrap text-white"
					>Flowbite</span
				>
			</a>
			<button
				data-collapse-toggle="navbar-default"
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
				aria-controls="navbar-default"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul
					class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700"
				>
					<li v-for="(item, index) in data">
						<NuxtLink
							:to="item.to"
							class="block py-2 px-3 rounded hover:text-blue-300"
							:class="isActive(item.to)"
						>
							{{ item.text }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script setup>
const data = [
	{ text: 'Home', to: '/' },
	{ text: 'Breeds', to: '/breeds' },
	{ text: 'State Breed', to: '/state-breed' },
	{ text: 'Gallery', to: '/gallery' },
]

const route = useRoute()

const routePath = computed(() => {
	return route.path
})

const isActive = payload => {
	return routePath.value === payload ? 'text-blue-500' : 'text-white'
}
</script>
<style lang=""></style>
