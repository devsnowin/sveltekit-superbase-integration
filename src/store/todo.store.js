import { writable } from 'svelte/store';
import { superbase } from '../superbase';

export const todos = writable([]);

export const loadData = async () => {
	const { data, error } = await superbase.from('todos').select();

	if (error) return console.error(error);
	todos.set(data);
};

export const addTodo = async (text, user_id) => {
	const { data, error } = await superbase.from('todos').insert([{ text, user_id }]);

	if (error) return console.error(error);

	todos.update((prev) => [...prev, data[0]]);
};

export const deleteTodo = async (id) => {
	const { error } = await superbase.from('todos').delete().match({ id });

	if (error) return console.error(error);

	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoComplete = async (id, currentState) => {
	const { error } = await superbase
		.from('todos')
		.update({ completed: !currentState })
		.match({ id });

	if (error) {
		return console.error(error);
	}

	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
