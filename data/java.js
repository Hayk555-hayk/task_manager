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
    </div>`
]