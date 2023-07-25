# Lesson

- Author: Wes Bos
- Description: Great Source
- Link: https://frontendmasters.com/courses/javascript-hard-parts-v2

## Notes

### Functions
- [78s](https://frontendmasters.com/courses/javascript-hard-parts-v2/functions/?t=78) Execution Context = Thread of Execution (line by line) + Memory to store data.Tworzony jest przy każdym wywołaniu funkcji. Innymi słowy każda funkcja tworzy swój własny Execution Context. 

### Retaining Function Memory
- [415s](https://frontendmasters.com/courses/javascript-hard-parts-v2/retaining-function-memory/?t=415) Przy zwracaniu funkcji jako rezultatu do naszej zmiennej przypisujemy nie tylko samą funkcję, ale też dostęp do zmiennych, do których ta funkcja miała dostęp (określone jest na podstawie tego **"gdzie"** funkcja została zadeklarowana) 

### Function Closure
- [144s](https://frontendmasters.com/courses/javascript-hard-parts-v2/function-closure/?t=144) Kolejność wyszukiwania zmiennych: Local Memory (part of Execution Context) -> Closure of Function -> External Context ... -> Global Context. 

### Closure Q&A
- [291s](https://frontendmasters.com/courses/javascript-hard-parts-v2/closure-q-a/?t=291) JavaScript inteligentnie optymalizuje domknięcia (closures) wrzucając do nich tylko elementy, których referencje pojawiają się w zwracanej funkcji, chroni nas to przed Memory Leak. 

### Closure Technical Definition & Review
- [333s](https://frontendmasters.com/courses/javascript-hard-parts-v2/closure-technical-definition-review/?t=333) "Lexical" means the physical positioning on the page. 

### Factory Functions Example
- [523s](https://frontendmasters.com/courses/javascript-hard-parts-v2/factory-functions-example/?t=523) Przykład działania Closure. Mimo usunięcia Execution Context w ramach których zostały zadeklarowane zmienne, one wciąż są dostępne w "plecaku" funkcji (Closure). 

### Prototype Chain Example: Prototypal Link
- [559s](https://frontendmasters.com/courses/javascript-hard-parts-v2/prototype-chain-example-prototypal-link/?t=559) __proto__ używane jest przez Javascript do znalezienia zmiennej lub funkcji, jeśli nie ma go w lokalnym "Variable Environment". 

### Prototype Chain Example: Implicit Parameters
- [232s](https://frontendmasters.com/courses/javascript-hard-parts-v2/prototype-chain-example-implicit-parameters/?t=232) Jednym z kroków budowania Execution Context jest bindowanie słówka kluczowego "this" do określonego obiektu (jest to zależne od tego w jaki sposób wywołujemy funkcję). 

### this Keyword
- [262s](https://frontendmasters.com/courses/javascript-hard-parts-v2/this-keyword/?t=262) "this" has been assigning scope during Execution Context creation. 

### Arrow Function Scope & this
- [51s](https://frontendmasters.com/courses/javascript-hard-parts-v2/arrow-function-scope-this/?t=51) The arrow function doesn't have dynamic this. keyword. It's determined by where the function was saved/declared/created.Jeśli w momencie tworzenia funkcji słowo kluczowe "this." wskazuje na obiekt user1 to do tego obiektu będzie odnosić się "this." w ramach tej funkcji. 

- [183s](https://frontendmasters.com/courses/javascript-hard-parts-v2/arrow-function-scope-this/?t=183) Przykład tego w jaki sposób "bindowane" jest this. dla funkcji strzałkowych. 

### new Keyword
- [448s](https://frontendmasters.com/courses/javascript-hard-parts-v2/new-keyword/?t=448) W Javascript funkcja to tak naprawdę: (1) funkcja, czyli zbiór instrukcji do wykonania + (2) obiekt zawierający pola związane z funkcji np. arguments. Jednym z takich pól jest prototype. 

### new Keyword Example
- [457s](https://frontendmasters.com/courses/javascript-hard-parts-v2/new-keyword-example/?t=457) Rola słowa kluczowego "new":1. Stworzenie pustego obiektu2. Przypisanie słowa kluczowego this do tego obiektu.2a. Przypisanie __proto__ obiektu do prototype funkcji kreatora.3. Wykonanie ciała funkcji - kreatora i przypisanie wartości pól do obiektu poprzez this.4. Zwrócenie obiektu. 

