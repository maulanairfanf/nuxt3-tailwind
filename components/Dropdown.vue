<template>
	<div ref="wrapper">
		<button
			@click="toggleDropdown"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
			type="button"
		>
			{{ buttonText }} {{ visible }}
			<svg
				class="w-2.5 h-2.5 ms-3"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 6"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 4 4 4-4"
				/>
			</svg>
		</button>

		<!-- Dropdown menu -->
		<div
			v-if="visible"
			class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
		>
			<ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
				<li v-for="(item, index) in menuItems" :key="index">
					<a
						:href="item.href"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>
						{{ item.text }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
defineProps({
	buttonText: {
		type: String,
		default: 'Dropdown button',
	},
	menuItems: {
		type: Array,
		default: () => [],
	},
})

const emit = defineEmits(['show', 'hide'])

const visible = ref(false)

function toggleDropdown() {
	visible.value = !visible.value
}

watch(visible, isVisible => {
	if (isVisible) {
		emit('show')
	} else {
		emit('hide')
	}
})
const wrapper = ref()

onClickOutside(wrapper, () => {
	if (!visible.value) return
	visible.value = false
})
</script>
