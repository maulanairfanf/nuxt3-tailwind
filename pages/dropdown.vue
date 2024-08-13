<template>
	<Dropdown
		buttonText="Options"
		:menuItems="[
			{ text: 'Dashboard', href: '#' },
			{ text: 'Settings', href: '#' },
			{ text: 'Earnings', href: '#' },
			{ text: 'Sign out', href: '#' },
		]"
	/>
	<Dropdown
		buttonText="Options"
		:menuItems="[
			{ text: 'Dashboard', href: '#' },
			{ text: 'Settings', href: '#' },
			{ text: 'Earnings', href: '#' },
			{ text: 'Sign out', href: '#' },
		]"
	/>
</template>

<script setup>
import Dropdown from '@/components/Dropdown.vue'
</script>
