import { createStore } from "baby-redux";

function counter(state = 0, action) {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
}

const store = createStore(counter);

const unsubscribe = store.subscribe(() => {
	console.log("onChange");
	console.log(store.getState());
});

store.dispatch({
	type: "INCREMENT"
});

setTimeout(() => {
	store.dispatch({
		type: "INCREMENT"
	});

	unsubscribe();
}, 2000);

setTimeout(() => {
	store.dispatch({
		type: "DECREMENT"
	});
}, 5000);
