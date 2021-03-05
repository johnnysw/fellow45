import Vue from 'vue'
import VueI18n from 'vue-i18n'
import langEn from './en.json'
import langZh from './zh-CN.json'

Vue.use(VueI18n)

const DEFAULT_LANG = 'zh-CN'
const LOCALE_KEY = 'CURRENT_LANG'

const locales = {
	'zh-CN': langZh,
	en: langEn,
}

const i18n = new VueI18n({
	locale: DEFAULT_LANG,
	messages: locales,
})

i18n.setTabbar = () => {
	uni.setTabBarItem({
		index: 0,
		text: i18n.t('index.tabbar.home')
	});
	uni.setTabBarItem({
		index: 1,
		text: i18n.t('index.tabbar.cart')
	});
	uni.setTabBarItem({
		index: 2,
		text: i18n.t('index.tabbar.account')
	});
}

i18n.changeLocale = (lang) => {
	uni.showLoading({
		title: "loading",
		mask: true,
		success: () => {
			setTimeout(() => {
				uni.setStorageSync(LOCALE_KEY, lang);
				i18n.locale = lang;
				i18n.setTabbar();
				uni.hideLoading();
			}, 100);
		}
	});
}

/**
 * 设置系统的语言环境
 */
const setup = () => {
	// 1. 获取localStorage中的CURRENT_LANG
	// localStorage.getItem() // 不用使用这个，在真机中不好使
	let lang = uni.getStorageSync(LOCALE_KEY)
	// 2. 如果获取不到CURRENT_LANG
	if (!lang) {
		// 3. 那么再尝试获取当前浏览器的默认语言环境
		let {
			language
		} = uni.getSystemInfoSync();
		// 4. 如果也获取不到浏览器的默认语言环境，那么就使用DEFAULT_LANG
		lang = language || DEFAULT_LANG;
	}

	// 5. 将lang存入localStorage中
	uni.setStorageSync(LOCALE_KEY, lang);
	// 6. 设置app语言
	i18n.locale = lang;
}

setup();



export default i18n
