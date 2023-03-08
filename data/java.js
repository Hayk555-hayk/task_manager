let java_data = [
    `<div>(java)
    Для работы нам нужна JDK (Java Development Kit) src: java.oracle.com <br/>
    intelige ide удобна для разработки на java <br />
    После на панеле управления в система, дополнительные параметры системы, переменные среды добавить JAVA_HOME: file jdk
    </div>`,
    `<div class="checkpoint">(java)
    Создание новой программы и написание кода происходит в папке src <br />
    На src нажимаем new jaca class и вводим имя класса  <br />
    Расширение файлов java - ClassName.java
    <pre>
    public class ClassName
    {
        public static void main(String[] args) {
            System.out.println("hello world");
        }
    }
    </pre>
    javac отвечает за компеляцию кода (javac ClassName.java) <br />
    После компеляции можно запускать код java ClassName, после всяких изменений нужно компилировать и перезапускать код <br />
    Можно компелировать и перезапускать код не только в ручном режиме но и автоматически кликнув правую кнопку мышки и нажав на run <br />
    IDE создаст каталог out и разместит скомпелированный код там
    <pre>
    public class SaveStudent
    {
        public static void main(String[] args) {
            saveStudentOrder();
        }

        static void saveStudentOrder() {
            System.out.println("saving...");
        }
    }

    // Another class in another file
    public class SaveStudentValidator
    {
        public static void main(String[] args) {
            validating();
        }

        static void validating() {
            checkAge();
            checkData();
        }

        static void checkAge() {
            System.out.println("checking age...");
        }

        static void checkData() {
            System.out.println("checking data...");
        }
    }
    </pre>
    </div>`,
    `<div>(java)
    Определение и типы переменных 
    <pre>
    byte varName = 1; (1bit)
    short varName = 1; (2bit)
    int varName = 1; (4bit)
    long varName = 1; (bigest number)

    float varName = 1.1
    double varName = 1.1

    char varName = 'c'

    boolean varName = true

    string varName = "kjj"

    //usage example 1
    public class SaveStudentValidator
    {
        public static void main(String[] args) {
            NameData full_name; 
            full_name = new NameData();
            full_name.family = "ttt";
            full_name.name = "ppp";

            another_full_name = readNameData();

            long num = getNum(full_name)
            System.out.println(num)
        }

        static NameData readNameData() {
            NameData names = new NameData();
            return names;
        }

        static long getNum(NameData name) {
            System.out.printl(name.family);
            System.out.printl(name.name);

            long x = 15456;
            return x;
        }
    }

    // Another file
    public class NameData
    {
        string family;
        string name;
    }
    </pre>
    </div>`,
    `<div>(java)
    Выполнения кода можно разделить на три группы 
    1) Последовательное выполнение <br />
    2) Выполнение по условию <br />
    3) Цикличное выполнение <br />
    <pre>
    if(condition) {
        // some code
    } else {
        // some code
    }

    while(condiotion) {
        // do some code many time while condition is true
        // to skip loop use continue, to stop loop use break
    }
    </pre>
    </div>`,
    `<div>(java)
    В java нет подобия namespace, все классы видят и распознают друг друга глобально <br />
    SOLID - это акроним, который описывает пять базовых принципов объектно-ориентированного программирования (ООП): <br />
    1 - Принцип единственной ответственности (Single Responsibility Principle - SRP) - каждый класс должен иметь только одну <br />
    ответственность и выполнять только одну задачу.<br />
    2 - Принцип открытости/закрытости (Open/Closed Principle - OCP) - классы должны быть открыты для расширения,<br />
    но закрыты для модификации. Это означает, что новая функциональность должна добавляться через расширение класса,<br />
    а не изменение его кода.<br />    
    3 - Принцип подстановки Барбары Лисков (Liskov Substitution Principle - LSP) - объекты одного типа могут быть<br />
    заменены объектами другого типа, если все свойства и функции, используемые в коде совместимы с этим типом.<br />    
    4 - Принцип разделения интерфейса (Interface Segregation Principle - ISP) - клиенты не должны зависеть от интерфейсов,<br />
    которые они не используют. Интерфейсы должны быть максимально маленькими и специализированными для конкретных<br />
    задач.<br />    
    5 - Принцип инверсии зависимостей (Dependency Inversion Principle - DIP) - модули высокого уровня не должны зависеть<br />
    от модулей низкого уровня. Вместо этого они должны зависеть от абстракций. Абстракции не должны зависеть от <br />
    деталей реализации, а детали реализации должны зависеть от абстракций. Это позволяет создавать гибкую архитектуру<br />
    и легко заменять компоненты системы при необходимости. <br />
    Уровни доступа данных у классов следующии public(доступна всем), protected, private(доступна только в классе)
    </div>`,
    `<div>(java)
    Пакеты это по сути директории где распологается тот или иной класс, но файлы в таких пакетах больше не глобальны<br />
    и их нужно зарекваерить <br />
    package path.to.file; говорит что класс находится в пакете (namespace in php)<br />
    import path.to.file.class; импортирует логику определенного класса (use in php)
    </div>`
]


let list = document.getElementById('list');

list.innerHTML = java_data.join('');
