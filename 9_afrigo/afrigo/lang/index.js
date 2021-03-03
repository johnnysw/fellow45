import Vue from 'vue'
import VueI18n from 'vue-i18n'
import langEn from './en.json'
import langZh from './zh-CN.json'

Vue.use(VueI18n)

const DEFAULT_LANG = 'zh'
const LOCALE_KEY = 'CURRENT_LANG'

const locales = {
	'zh': langZh,
	en: langEn,
}

const i18n = new VueI18n({
	locale: DEFAULT_LANG,
	messages: locales,
})

// 对外可以暴露setup方法
export const setup = lang => {
	if (lang === undefined) {
		lang = uni.getStorageSync(LOCALE_KEY)
		if (locales[lang] === undefined) {
			lang = DEFAULT_LANG
		}
	}
	uni.setStorageSync(LOCALE_KEY, lang)
	i18n.locale = lang
}

setup()

// window.i18n = i18n.t('index') //直接的解决办法就是将i18n挂到window下，变成全局变量

export default i18n
