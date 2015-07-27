
# Extend

Direktiva `@extend` je přávě jedna z funkcí Sassu, co jej udělalo tak populárním již několik zpátky. Jen připomenu, že to umožňuje říci Sassu, aby nastyloval element A tak, aby to odpovídalo selektoru B. Netřeba asi dodávat, že to může ztratit svou hodnotu, pokud píšete modulární CSS.

Každopádně mám pocit, že vás musím před toutu funkcí varovat. Stejně tak, jak je to chytré, tak je `@extend` stále ošemetný koncept, který by mohl udělat více škody, než-li užitku, zvláště když se špatně použije. Věc se má tak, že když extendujete selektor, nemůžete zodpovědět následující otázky bez toho, aniž byste měli nějakou hlubokou znalost celé codebase:

* kde se můj aktuální selektor připojí?
* mohu způsobovat nežádnoucí efekty?
* jak velké CSS vyjde z tohoto jednoho extendu?

Všichni víte, že výsledek se může pohybovat od 'nic to nedělá' až po katastrofální vedlejší účinky. A právě proto je moje první rada vyhnout se nadobro `@extend` direktivě. Může to znít brutálně, ale na konci dne to může ušetřit nějaké ty bolesti hlavy a potíže. 

Jak již bylo řečeno, znáte rčení:

> Nikdy neříkej nikdy.<br>
> &mdash; Zřejmě [ne Beyonce](https://github.com/HugoGiraudel/sass-guidelines/issues/31#issuecomment-69112419).

Samozřejmě existují případy, kde by edtendování serektorů mohlo být k užitku, přesto ale vždy mějte na paměti, že tyto pravidla, abyste se nedostali do potíží:

* Použijte extend z modulu, ne napříč různými moduly.
* Použijte extend na samostatné placeholdery, nikoli na skutečné selektory.
* Ujistěte se, že placeholdre, který extendujete, je ve stylech přítomný co možná nejméně.

Pokud se rozhodnete použít extend, dovolte mi přopomenout, že si to moc dobře nerozumí s `@media` bloky. Jak asi víte, Sass není schopen extendnout vnější selektor z media query. Pokud tak učiníte, kompilátor se jednoduše zhroutí a řekne vám, že takovéto věci nemůžete dělat. Nic moc, zejména proto, že media queries téměř všichni známe.

{% include snippets/extend/01/index.html %}

> Nemůžete @extend z vnějšího selektoru v rámci @media.<br>
> Můžete pouze @extend selektory v rámci stejné direktivy.

<div class="note">
  <p>Často se říká, že <code>@extend</code> pomáhá s velikostí souboru, jelikož kombinuje selektory a neduplikuje vlastnosti. To je pravda, nicméně jakmile použijete <a href="http://en.wikipedia.org/wiki/Gzip">Gzip</a>, který provede svou kompresi, rozdíl je zanedbatelný.</p>
  <p>Jak bylo řečeno, pokud nemůžete použít Gzip (nebo žádnou ekvivalentu), pak používání <code>@extend</code> přístupu nemusí být až tak špatný, dokud víte, co děláte.</p>
</div>

Abych to shrnul, **nedoporučoval bych používat `@extend` direktivu**, mimo nějaké specifické okolnosti, ale nezajdu až tak daleko, abych ji zakázal.

###### Další četba

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
