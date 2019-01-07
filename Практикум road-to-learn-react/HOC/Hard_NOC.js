//https://www.robinwieruch.de/gentle-introduction-higher-order-components/

import { compose } from 'recompose';

const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
	conditionalRenderingFn(props)
		? null
		: <Component {...props} />

const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
	conditionalRenderingFn(props)
		? <EitherComponent />
		: <Component {...props} />

const EmptyMessage = () =>
	<div>
		<p>You have no Todos.</p>
	</div>

const LoadingIndicator = () =>
	<div>
		<p>Loading todos ...</p>
	</div>

const isLoadingConditionFn = (props) => props.isLoadingTodos;
const nullConditionFn = (props) => !props.todos;
const isEmptyConditionFn = (props) => !props.todos.length

const withConditionalRenderings = compose(
	withEither(isLoadingConditionFn, LoadingIndicator),
	withMaybe(nullConditionFn),
	withEither(isEmptyConditionFn, EmptyMessage)
);

const TodoListWithConditionalRendering = withConditionalRenderings(TodoList);

function App(props) {
	return (
		<TodoListWithConditionalRendering
			todos={props.todos}
			isLoadingTodos={props.isLoadingTodos}
		/>
	);
}

function TodoList({ todos }) {
	return (
		<div>
			{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
		</div>
	);
}