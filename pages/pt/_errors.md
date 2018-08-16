
# Avisos e erros

Se há uma característica que é muitas vezes esquecida pelos programadores de Sass, é a capacidade de enviar dinamicamente avisos e erros. Por acaso, Sass vem com três diretivas personalizadas para imprimir conteúdo no *standard output system* (CLI, compilador…):

* `@debug`;
* `@warn`;
* `@error`.

Vamos colocar o `@debug` de lado, uma vez que se destina claramente a fazer *debug* a SassScript, o que não é o nosso ponto aqui. Ficamos então com `@warn` and `@error` que são visivelmente idênticos, exceto que um para o compilador, enquanto que o outro não. Vocês podem adivinhar qual faz o quê.

Agora, há muito espaço num projecto de Sass para avisos e erros. Basicamente, qualquer *mixin* ou função à espera de um tipo ou argumento específico poderia lançar um error se algo desse errado, ou mostrar um aviso ao fazer uma suposição.

## Avisos

Considerem esta função de [Sass-MQ](https://github.com/sass-mq/sass-mq) a tentar converter um valor em `px` para `em`, por exemplo:

{% include snippets/errors/01/index.html %}

Se o valor fornecido não possuir unidade, a função assume que o valor está expresso em píxeis. Neste ponto, uma suposição poderá ser arriscada, pelo que o utilizador deverá ser avisado que o software fez algo que poderá ser considerado inesperado.

## Erros

Erros, ao contrário de avisos, previnem o compilador de ir mais além. Basicamente, interrompem o compilador e mostram uma mensagem no *output stream* tal como o *stack trace*, o que é útil para *debugging*. Por causa disto, erros deverão ser lançados quando não há mais forma do programa continuar a correr. Sempre que possível, tentem antes contornar o problema e mostrar um aviso em seu lugar.

Como exemplo, digamos que querem construir uma função *getter* para aceder a valores de um mapa específico. Poderiam lançar um erro se a chave pedida não existir no mapa.

{% include snippets/errors/02/index.html %}

Para mais informações de como usar a diretiva `@error` eficientemente, [esta introdução sobre controle de erros](http://webdesign.tutsplus.com/tutorials/an-introduction-to-error-handling-in-sass--cms-19996) deve ajudar você.