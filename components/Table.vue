<template>
	<div>
		<table class="w-full text-sm text-left rtl:text-right text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th v-for="header in headers" :key="header.key" class="px-6 py-3">
						{{ header.text }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(item, index) in data"
					:key="item.id"
					:class="
						index % 2 === 0
							? 'bg-slate-400 text-white'
							: 'bg-white text-gray-900'
					"
					class="border-b"
				>
					<td
						v-for="key in keys"
						:key="key"
						class="px-6 py-4 font-medium whitespace-nowrap"
					>
						{{ item[key] }}
					</td>
					<td class="px-6 py-4 font-medium whitespace-nowrap">
						<NuxtLink :to="`/breeds/${item.id}`">See Details</NuxtLink>
					</td>
					<td
						class="px-6 py-4 font-medium whitespace-nowrap cursor-pointer"
						@click="handleAction(item)"
					>
						See Details By State
					</td>
				</tr>
			</tbody>
		</table>

		<div v-if="!pending" class="mt-4 flex gap-4 justify-center">
			<button class="button-primary" :disabled="page === 0" @click="handlePrev">
				Previous
			</button>
			<button class="button-primary" @click="handleNext">Next</button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
	headers: {
		type: Array,
		required: true,
	},
	keys: {
		type: Array,
		required: true,
	},
	data: {
		type: Array,
		required: true,
		default: () => [],
	},
	pending: {
		type: Boolean,
		default: false,
	},
	page: {
		type: Number,
		default: 0,
	},
	limit: {
		type: Number,
		default: 10,
	},
})

const emit = defineEmits(['save-bread', 'page-changed'])

function handlePrev() {
	if (props.page > 0) {
		emit('page-changed', props.page - 1)
	}
}

function handleNext() {
	emit('page-changed', props.page + 1)
}

function handleAction(item) {
	emit('save-bread', item)
}
</script>
