<template>
	<view>
		<radio-group @change="radioChange">
			<label class="radio">
				<radio value="en" name="lang" /><text>English</text>
				<radio value="zh-CN" name="lang" /><text>Simple Chinese</text>
			</label>
		</radio-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			radioChange: function(evt) {
				let lang = evt.target.value;
				this._i18n.changeLocale(lang);
			}
		}
	}
</script>

<style>

</style>
