<template>
	<div class="w-full">
		<ol
			:class="[
				'flex items-center w-full font-medium text-center',
				textColor,
				sizeClass,
			]"
		>
			<li
				v-for="(step, index) in steps"
				:key="index"
				:class="[
					'flex items-center',
					index < steps.length - 1 ? 'md:w-full' : '',
					index === currentStep ? activeColor : '',
					index < currentStep ? completedColor : '',
					index < steps.length - 1
						? 'after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10'
						: '',
				]"
			>
				<span
					:class="[
						'flex items-center',
						index < steps.length - 1
							? 'after:content-[\'/\'] sm:after:hidden after:mx-2 after:text-gray-200'
							: '',
					]"
				>
					<template v-if="index < currentStep">
						<svg
							:class="iconSizeClass"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
							/>
						</svg>
					</template>
					<template v-else>
						<span class="me-2">{{ index + 1 }}</span>
					</template>
					<span>{{ step }}</span>
				</span>
			</li>
		</ol>
		<div v-if="$slots.default">
			<slot :currentStep="currentStep"></slot>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
	steps: {
		type: Array,
		required: true,
	},
	currentStep: {
		type: Number,
		required: true,
	},
	textColor: {
		type: String,
		default: 'text-gray-500',
	},
	activeColor: {
		type: String,
		default: 'text-blue-600',
	},
	completedColor: {
		type: String,
		default: 'text-blue-600',
	},
	size: {
		type: String,
		default: 'md', // Can be 'sm', 'md', 'lg'
	},
})

const sizeClass = computed(() => {
	switch (props.size) {
		case 'sm':
			return 'text-xs sm:text-sm'
		case 'md':
			return 'text-sm sm:text-base'
		case 'lg':
			return 'text-lg sm:text-xl'
		default:
			return 'text-sm sm:text-base'
	}
})

const iconSizeClass = computed(() => {
	switch (props.size) {
		case 'sm':
			return 'w-3.5 h-3.5 sm:w-4 sm:h-4'
		case 'md':
			return 'w-4 h-4 sm:w-5 sm:h-5'
		case 'lg':
			return 'w-5 h-5 sm:w-6 sm:h-6'
		default:
			return 'w-4 h-4 sm:w-5 sm:h-5'
	}
})
</script>

<style scoped>
/* Custom styling if needed */
</style>
