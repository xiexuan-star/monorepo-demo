import { isString } from 'lodash-es';
import { App, Component } from 'vue';

export function safeComponentRegister(
	app: App,
	component: Component,
	cName: string | undefined = component.name,
	scheduler?: () => void
) {
	if (!cName) throw new Error(`[CUI]: invalid component name for ${component}`);
	const { components = {} } = app._context;
	if (components[cName]) {
		// console.warn(`[CUI]: You are trying to register a component named ${ cName } multiple times`);
		return;
	}
	if (scheduler) {
		scheduler();
	} else {
		app.component(cName, component);
	}
}

export function generateTimeFormat(format: string) {
	if (!isString(format)) return;

	const matched = format.match(/[Hms:]+/);
	if (!matched) return;

	return matched[0];
}
