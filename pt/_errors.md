
# Avisos e erros

Se há uma característica que é muitas vezes esquecida pelos programadores de Sass, é a capacidade de enviar dinamicamente avisos e erros. Por acaso, Sass vem com três diretivas personalizadas para imprimir conteúdo no _standard output system_ (CLI, compilador...):

* `@debug`;
* `@warn`;
* `@error`.

Vamos colocar o `@debug` de lado, uma vez que se destina claramente a fazer _debug_ a SassScript, o que não é o nosso ponto aqui. Ficamos então com `@warn` and `@error` que são visivelmente idênticos, exceto que um para o compilador, enquanto que o outro não. Vocês podem idivinhar qual faz o quê.

Agora, há muito espaço num projecto de Sass para avisos e erros. Basicamente, qualquer _mixin_ ou função à espera de um tipo ou argumento específico poderia lançar um error se algo desse errado, ou mostrar um aviso ao fazer uma suposição.

###### Leitura adicional

* [_An Introduction To Error Handling_ (‘Uma Introdução À Manipulação De Erros’)](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996)
* [_Building a Logger Mixin_ (‘Construção de um _Logger Mixin_’)](http://webdesign.tutsplus.com/tutorials/building-a-logger-mixin-in-sass--cms-22070)
* [_SassyLogger_](https://github.com/HugoGiraudel/SassyLogger)

## Avisos

Considerem esta função de [Sass-MQ](https://github.com/sass-mq/sass-mq) a tentar converter um valor em `px` para `em`, por exemplo:

{% include snippets/errors/01/index.html %}

Se o valor fornecido não possuir unidade, a função assume que o valor está expresso em píxeis. Neste ponto, uma suposição poderá ser arriscada, pelo que o utilizador deverá ser avisado que o software fez algo que poderá ser considerado inesperado.

## Erros

Erros, ao contrário de avisos, previnem o compilador de ir mais além. Basicamente, param o compilador e mostram uma mensagem no _output stream_ tal como o _stack trace_, o que é útil para _debugging_. Por causa disto, erros deverão ser lançados quando não há mais forma do programa continuar a correr. Sempre que possível, tentem antes contornar o problema e mostrar um aviso em seu lugar.

Como exemplo, digamos que querem construir uma função _getter_ para aceder a valores de um _map_ específico. Poderiam lançar um erro se a chave pedida não existir no _map_.

{% include snippets/errors/02/index.html %}
