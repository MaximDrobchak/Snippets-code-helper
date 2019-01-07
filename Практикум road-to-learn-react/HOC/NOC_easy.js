//https://www.robinwieruch.de/gentle-introduction-higher-order-components/

//\	принимает компонент и пропертю состояния и возвращает
// или компонент загрузки или компонент с параметрами и отрисовкой
/**
 * В зависимости от значения свойства isLoading вы можете 
 * применить условную отрисовку. Функция вернёт компонент Loading или входной компонент.
 * @param {*} Component 
 */
const withFoo = (Component) => (props) =>
	props.isLoading
		? <Loading />
		: <Component {...props} />
/**
 *  Однако входной компонент может 
 * не поддерживать свойство isLoading, 
 * тогда вы можете использовать
 *  деструктуризацию оставшихся свойств из 
 * ES6 для решения этой проблемы.
 */

const withLoading = (Component) => ({ isLoading, ...rest }) =>
	isLoading
		? <Loading />
		: <Component {...rest} />
// деструктуризация свойств перед их передачей
const { foo, bar } = props;
<SomeComponent foo={foo} bar={bar} />

	// но можно использовать оператор расширения для передачи всех свойств объекта
	<SomeComponent {...props} />