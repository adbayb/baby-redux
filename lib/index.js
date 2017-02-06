class BabyRedux {
	constructor(reducer) {
		this.onChange = null;
		this.reducer = reducer;
		this.state = reducer(undefined, {});
	}

	static createStore(reducer) {
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

		return () => this.onChange = null;
	}
}

const createStore = BabyRedux.createStore;

export {
	createStore
};
export default BabyRedux;
