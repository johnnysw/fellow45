export default {
	data() {
		return {
			firstName: 'li',
			lastName: 'si',
			random: 0
		}
	},
	computed: {
		name() {
			return this.firstName + this.lastName;
		}
	},
	methods: {
		clickMe() {
			this.random = Math.random();
		}
	}
}
