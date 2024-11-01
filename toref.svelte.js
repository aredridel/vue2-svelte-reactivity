import {customRef, effectScope, getCurrentScope, onScopeDispose} from "vue";

/*
 * Assumes we're in a vue effect scope; starts a new root svelte effect scope,
 * and disposes of it when the vue scope ends
 */
export function toRef(obj) {
	let dispose;
	onScopeDispose(() => dispose());
	const ref = customRef((track, trigger) => {
		const tracked = {
			get() {
				track();
				return obj;
			},
			set(value) {
				Object.assign(obj, value);
			}
		}
		dispose = $effect.root(() => {
			$effect(() => {
				// subscribe to it all
				for (let k in obj) obj[k];
				trigger();
			});
		});
		return tracked;
	});
	return ref;
}

