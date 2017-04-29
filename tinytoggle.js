(() => {
	'use strict';

	const canGetStyles = typeof window.getComputedStyle === 'function';

	document.addEventListener('DOMContentLoaded', () => {
		const toggles = document.querySelectorAll('[data-toggle-class]');
		for (const toggle of toggles) {
			const classesToToggle = toggle.getAttribute('data-toggle-class').split(/[,\s]+\s*/);
			const targetElements = !!toggle.getAttribute('data-toggle-target')? document.querySelectorAll(toggle.getAttribute('data-toggle-target')) : toggle;
			const toggleEvents = !!toggle.getAttribute('data-toggle-event')? toggle.getAttribute('data-toggle-event').split(/[,\s]+\s*/) : ['click'];
			for (const targetElement of targetElements) {
				for (const toggleEvent of toggleEvents) {
					toggle.addEventListener(toggleEvent.trim(), () => {
						const styles = canGetStyles? window.getComputedStyle(targetElement) : false;
						for (const classToToggle of classesToToggle) {
							targetElement.classList.toggle(classToToggle.trim());
						}
						if (styles) {
							targetElement[(styles.display === 'none' || styles.visibility === 'hidden' || parseFloat(styles.opacity) === 0)? 'setAttribute' : 'removeAttribute']('hidden', 'hidden');
						}
					});
				}
			}
		}
	});
})();
