console.log('App.js is running!');

// JSX - JavaScript XML
const appInfo = {
    title: 'Decider App',
    subtitle: 'Let the machine decide!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value;

    if (option) {
        appInfo.options.push(option)
        e.target.elements.option.value = '';
        render()
    }
}

const onRemoveAll = () => {
    appInfo.options = [];
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appInfo.options.length);
    const option = appInfo.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{appInfo.title}</h1>
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    appInfo.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render()