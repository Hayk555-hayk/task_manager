let front_data = [
    `<div>(angular)
    Ангуляр имеет CLI, для его устоновки нужна комманда npm install -g @angular/cli <br/>
    После чего можно вводить следующие команды <br />
    ng new app-name <br/>
    ng serve <br />
    Компонент в angular имеет .css, .html, .js или .ts файлы <br />
    .html отвечает за каркас компонента, интерполяция происходит при помощи {{name}} <br />
    .module.ts производятся разнородные импорты <br />
    .component.ts в этом файле прописывается логика, в експортном обьекте можно обьявлять переменные 
    </div>`,
    `<div>(react)
    Изменения в представлении происходят быстро благодаря virtual dom, для ее изменения не нужна императивное программирование,
    а нужно декларативное <br />
    React можно установить и командной строкой и с cdn <br />
    Компоненты бывают классовыми и функциональными 
    <pre>
        class App extends React.Component {
            state = {
                name: 'Hayk',
                age: 28
            }
            render() {
                return (
                    &ltdiv className="smt"&gt 
                        &ltdiv className="smt"&gt jsx &lt/div&gt
                        &ltdiv className="smt"&gt {this.state.name} &lt/div&gt
                        &ltdiv className="smt"&gt {this.state.age} &lt/div&gt
                    &lt/div&gt
                )
            }
        }

        ReactDOM.render(&ltApp /&gt, document.getElementById('root'));
        // do not use class use className as class is reserved word
    </pre>
    </div>`
]