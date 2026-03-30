const exams = {
  // ================= JAVA =================
  java_basic: [
    {
      question: "What is JVM?",
      options: [
        "Java Virtual Machine",
        "Java Variable Method",
        "Java Very Much",
        "None",
      ],
      answer: 0,
    },
    {
      question: "Which keyword defines a class?",
      options: ["function", "class", "define", "object"],
      answer: 1,
    },
    {
      question: "Which is primitive type?",
      options: ["String", "int", "Array", "Object"],
      answer: 1,
    },
    {
      question: "Which symbol ends a statement?",
      options: [".", ";", ":", ","],
      answer: 1,
    },
    {
      question: "Java is ___ language?",
      options: ["compiled", "interpreted", "both", "none"],
      answer: 2,
    },
    {
      question: "Main method return type?",
      options: ["int", "void", "String", "double"],
      answer: 1,
    },
    {
      question: "Which is loop?",
      options: ["for", "while", "do-while", "all"],
      answer: 3,
    },
    { question: "Java supports OOP?", options: ["Yes", "No"], answer: 0 },
    {
      question: "Which is keyword?",
      options: ["this", "var", "obj", "main"],
      answer: 0,
    },
    {
      question: "Which package is default?",
      options: ["java.lang", "java.util", "java.io", "none"],
      answer: 0,
    },
  ],

  java_intermediate: [
    {
      question: "What is inheritance?",
      options: ["Reuse code", "Delete code", "Compile code", "None"],
      answer: 0,
    },
    {
      question: "Which is interface keyword?",
      options: ["interface", "class", "implements", "extends"],
      answer: 0,
    },
    {
      question: "Collection root interface?",
      options: ["List", "Set", "Collection", "Map"],
      answer: 2,
    },
    {
      question: "Which is not collection?",
      options: ["List", "Map", "Array", "Set"],
      answer: 2,
    },
    {
      question: "HashMap allows?",
      options: ["Duplicate keys", "Null key", "Ordered", "None"],
      answer: 1,
    },
    {
      question: "Overloading is?",
      options: [
        "Same name diff params",
        "Same params",
        "Different class",
        "None",
      ],
      answer: 0,
    },
    {
      question: "Override uses?",
      options: ["@Override", "@Over", "@Run", "None"],
      answer: 0,
    },
    {
      question: "Exception base class?",
      options: ["Error", "Throwable", "Exception", "Runtime"],
      answer: 1,
    },
    {
      question: "Access modifier private?",
      options: ["Class", "Package", "Same class", "World"],
      answer: 2,
    },
    {
      question: "Static means?",
      options: ["Instance", "Class level", "Runtime", "None"],
      answer: 1,
    },
  ],

  java_advanced: [
    {
      question: "Stream API used for?",
      options: ["Data processing", "UI", "DB", "None"],
      answer: 0,
    },
    {
      question: "Lambda syntax?",
      options: ["()->{}", "function()", "lambda()", "None"],
      answer: 0,
    },
    {
      question: "Thread creation?",
      options: ["Runnable", "Thread", "Both", "None"],
      answer: 2,
    },
    {
      question: "Spring Boot used for?",
      options: ["Web app", "Game", "OS", "None"],
      answer: 0,
    },
    {
      question: "JPA stands for?",
      options: ["Java Persistence API", "Java Process", "None", "All"],
      answer: 0,
    },
    {
      question: "Optional avoids?",
      options: ["NullPointer", "Compile error", "Runtime", "None"],
      answer: 0,
    },
    {
      question: "Synchronized means?",
      options: ["Thread safe", "Fast", "Static", "None"],
      answer: 0,
    },
    {
      question: "ExecutorService used for?",
      options: ["Thread pool", "UI", "DB", "None"],
      answer: 0,
    },
    {
      question: "Functional interface?",
      options: ["1 method", "2 methods", "3 methods", "None"],
      answer: 0,
    },
    {
      question: "Spring annotation for REST?",
      options: ["@RestController", "@Service", "@Bean", "@Entity"],
      answer: 0,
    },
  ],

  // ================= PYTHON =================
  python_basic: [
    {
      question: "Print function?",
      options: ["echo()", "print()", "log()", "write()"],
      answer: 1,
    },
    {
      question: "Python is?",
      options: ["Compiled", "Interpreted", "Both", "None"],
      answer: 1,
    },
    { question: "List syntax?", options: ["{}", "[]", "()", "<>"], answer: 1 },
    {
      question: "Comment symbol?",
      options: ["//", "#", "/*", "--"],
      answer: 1,
    },
    {
      question: "Variable declare?",
      options: ["var x", "int x", "x=5", "define x"],
      answer: 2,
    },
    { question: "Loop?", options: ["for", "while", "both", "none"], answer: 2 },
    {
      question: "Boolean values?",
      options: ["True/False", "Yes/No", "1/0", "None"],
      answer: 0,
    },
    {
      question: "Function keyword?",
      options: ["func", "def", "function", "lambda"],
      answer: 1,
    },
    {
      question: "Indentation used for?",
      options: ["Syntax", "Style", "None", "Optional"],
      answer: 0,
    },
    {
      question: "Type of x=5?",
      options: ["int", "string", "float", "bool"],
      answer: 0,
    },
  ],

  python_intermediate: [
    {
      question: "Tuple is?",
      options: ["Mutable", "Immutable", "Dynamic", "None"],
      answer: 1,
    },
    {
      question: "Dictionary key?",
      options: ["Unique", "Duplicate", "List", "None"],
      answer: 0,
    },
    {
      question: "Lambda is?",
      options: ["Anonymous func", "Class", "Loop", "None"],
      answer: 0,
    },
    {
      question: "List comprehension?",
      options: ["Short loop", "Function", "Class", "None"],
      answer: 0,
    },
    {
      question: "Exception keyword?",
      options: ["try", "catch", "except", "handle"],
      answer: 2,
    },
    {
      question: "Module import?",
      options: ["import", "include", "require", "using"],
      answer: 0,
    },
    {
      question: "len() does?",
      options: ["Length", "Sum", "Type", "None"],
      answer: 0,
    },
    {
      question: "Set 특징?",
      options: ["Unique", "Ordered", "Duplicate", "None"],
      answer: 0,
    },
    {
      question: "File open?",
      options: ["open()", "file()", "read()", "None"],
      answer: 0,
    },
    {
      question: "Class keyword?",
      options: ["class", "def", "struct", "object"],
      answer: 0,
    },
  ],

  python_advanced: [
    {
      question: "Decorator is?",
      options: ["Function wrapper", "Loop", "Class", "None"],
      answer: 0,
    },
    {
      question: "Generator uses?",
      options: ["yield", "return", "break", "pass"],
      answer: 0,
    },
    {
      question: "GIL means?",
      options: ["Global Interpreter Lock", "General Lock", "None", "All"],
      answer: 0,
    },
    {
      question: "Async keyword?",
      options: ["async/await", "thread", "run", "None"],
      answer: 0,
    },
    {
      question: "Numpy used for?",
      options: ["Math", "UI", "DB", "None"],
      answer: 0,
    },
    {
      question: "Pandas used for?",
      options: ["Data analysis", "Game", "OS", "None"],
      answer: 0,
    },
    {
      question: "Virtualenv?",
      options: ["Env isolate", "Thread", "DB", "None"],
      answer: 0,
    },
    {
      question: "Map function?",
      options: ["Apply func", "Loop", "Class", "None"],
      answer: 0,
    },
    {
      question: "Zip does?",
      options: ["Combine lists", "Split", "Sort", "None"],
      answer: 0,
    },
    {
      question: "PEP8?",
      options: ["Style guide", "Library", "Compiler", "None"],
      answer: 0,
    },
  ],

  // ================= C++ =================
  cpp_basic: [
    {
      question: "C++ extension?",
      options: [".c", ".cpp", ".java", ".py"],
      answer: 1,
    },
    {
      question: "Main return type?",
      options: ["int", "void", "string", "float"],
      answer: 0,
    },
    {
      question: "Print?",
      options: ["cout", "print", "echo", "log"],
      answer: 0,
    },
    {
      question: "Namespace keyword?",
      options: ["namespace", "space", "using", "define"],
      answer: 0,
    },
    { question: "Loop?", options: ["for", "while", "do", "all"], answer: 3 },
    { question: "Pointer symbol?", options: ["*", "&", "%", "@"], answer: 0 },
    { question: "Reference symbol?", options: ["&", "*", "#", "@"], answer: 0 },
    {
      question: "Header include?",
      options: ["#include", "#import", "#using", "#define"],
      answer: 0,
    },
    {
      question: "Data type?",
      options: ["int", "num", "var", "let"],
      answer: 0,
    },
    { question: "OOP supported?", options: ["Yes", "No"], answer: 0 },
  ],

  cpp_intermediate: [
    {
      question: "Class keyword?",
      options: ["class", "struct", "object", "def"],
      answer: 0,
    },
    {
      question: "Constructor?",
      options: ["Init object", "Delete", "Loop", "None"],
      answer: 0,
    },
    {
      question: "Destructor?",
      options: ["~class", "delete", "free", "None"],
      answer: 0,
    },
    {
      question: "Inheritance?",
      options: ["Reuse", "Delete", "Compile", "None"],
      answer: 0,
    },
    {
      question: "Polymorphism?",
      options: ["Many forms", "Single", "None", "All"],
      answer: 0,
    },
    {
      question: "Virtual keyword?",
      options: ["Override", "Static", "Const", "None"],
      answer: 0,
    },
    {
      question: "Encapsulation?",
      options: ["Hide data", "Expose", "Delete", "None"],
      answer: 0,
    },
    {
      question: "STL stands for?",
      options: ["Standard Template Library", "Simple Tool", "None", "All"],
      answer: 0,
    },
    {
      question: "Vector is?",
      options: ["Dynamic array", "Static", "Pointer", "None"],
      answer: 0,
    },
    {
      question: "Reference variable?",
      options: ["Alias", "Pointer", "Copy", "None"],
      answer: 0,
    },
  ],

  cpp_advanced: [
    {
      question: "Smart pointer?",
      options: ["auto_ptr", "shared_ptr", "unique_ptr", "All"],
      answer: 3,
    },
    {
      question: "Template used for?",
      options: ["Generic code", "UI", "DB", "None"],
      answer: 0,
    },
    {
      question: "Lambda?",
      options: ["Anonymous func", "Class", "Loop", "None"],
      answer: 0,
    },
    {
      question: "Move semantics?",
      options: ["Optimize", "Delete", "Copy", "None"],
      answer: 0,
    },
    {
      question: "RAII?",
      options: ["Resource mgmt", "Loop", "Thread", "None"],
      answer: 0,
    },
    {
      question: "Multithreading lib?",
      options: ["thread", "process", "fork", "None"],
      answer: 0,
    },
    {
      question: "Const keyword?",
      options: ["Immutable", "Mutable", "None", "All"],
      answer: 0,
    },
    {
      question: "Operator overloading?",
      options: ["Custom op", "Loop", "Class", "None"],
      answer: 0,
    },
    {
      question: "Exception?",
      options: ["try/catch", "if", "loop", "None"],
      answer: 0,
    },
    {
      question: "Memory mgmt?",
      options: ["new/delete", "malloc", "both", "None"],
      answer: 2,
    },
  ],
};
