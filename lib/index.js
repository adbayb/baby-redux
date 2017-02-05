class BabyRedux {
	constructor(reducer) {
		this.onChange = null;
		this.reducer = reducer;
		// Undefined to allow default value for first parameter (not working with null )
		this.state = reducer(undefined, {});
	}

	static createStore(reducer) {
		// Quick reminder on javascript context:

		// console.log(this);
		// return new this(reducer); <-- Avoid this line
		// since the context "this" is determined by how the function is invoked.
		// For reminder, When a function is called as a method of an object,
		// "this" is set to the object the method is called on (so, usually,
		// context is given by the left side from the dot).
		// When called as an unbound function (no left side object), "this" will default
		// to the global context or window object in the browser. However, if the function
		// is executed in strict mode, the context will default to undefined.
		// Generally new this(reducer) will be ok if we call createStore via BabyRedux.createStore()
		// But via : const externalCall = BabyRedux.createStore;
		// the context this is determined when we call externalCall
		// So we will have undefined for this (in strict mode (by default in ES2015
		// and upper) else window object in a non strict mode browser environment)
		// inside createStore function when we call externalCall: const store = externalCall();
		return new BabyRedux(reducer);
	}

	dispatch(action) {
		this.state = this.reducer(this.state, action);
		if (typeof this.onChange === "function") {
			this.onChange();
		}
	}

	getState() {
		return this.state;
	}

	subscribe(listener) {
		this.onChange = listener;

		// Returns a function that unsubscribes the change listener:
		return () => this.onChange = null;
	}
}

const createStore = BabyRedux.createStore;

export {
	createStore
};
export default BabyRedux;
