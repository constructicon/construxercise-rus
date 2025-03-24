# Intro to yaml

The data for the website is stored in .yml-files, which are used for dynamic generation of website pages. [YAML](https://yaml.org/) (Yet Another Markup Language) is a markup language with a relatively simple syntax. 

## File structure
Each yaml file begins with ```---```. In our case, yaml files are organized as lists of exercises. Each exercise begins as a number, starting with 1:

```
---
1:
```

All attributes related to this exercise will need to be indented with whitespace, showing that they are part of the respective exercise. Some attributes always present in exercises are **lesson_id**, **ex_number**, and **title**. For example:

```
---
1:
  lesson_id: 1
  ex_number: 1
  title: Послушайте тексты и заполните пропуски. Запишите ответы через запятую.
```

The [Tag overview](https://constructicon.github.io/construxercise-rus/docs/#/data/tag-overview) page contains an overview of all attributes in yaml files, their possible values, and example of usage. In this section, we will give examples of different types of attributes and how to properly format them.

## Attributes and values
As mentioned above, yaml files are organized as pairs of keys (attributes) and values. For instance, in the example above **lesson_id** is a key with value **1**. 

The yaml syntax requires that keys are followed by a colon (:) and a space before the value begins. Every attribute must begin on a new line, i.e. it is not possible to have multiple attributes on one line.

There is a predefined set of attributes the JavaScript code looks for when generating pages (see section [Tag overview](https://constructicon.github.io/construxercise-rus/docs/#/data/tag-overview)). This means that if an attribute is misspelled or a new one is created, the code will ignore the value attached to it, as the key is not defined in the JavaScript file.

## Value types
There are only three types of values used in our code. 

- Integers (e.g. 1, 2, 43, 1091): used for **lesson_id** and **ex_number** attributes
- Strings (e.g. "Составьте предложения."): used for exercise titles, task texts, answers, etc.
- Lists (e.g. a, b, c): used for table rows and multiple correct answers.

### Strings

Although integers are straight-forward and don't require any special attention (simply type the number you want), strings are a bit trickier. When the string is short and does not contain special characters, it can be used as is:

```
  title: Составьте предложения.
```

However, if the text contains symbols that yaml uses for its syntax, the string **must** be contained in "".

```
  difficult_words:
    word3: "звёзды* — EN: celebrities; NO: kjendiser"
```
<div style="display: flex; gap: 20px;">
  <div style="flex: 1; background: #e8f5e9; padding: 10px; border-radius: 5px;">
    <strong>✅ Do This:</strong>
    <pre><code class="language-js">  difficult_words:
    word3: "звёзды* — EN: celebrities"</code></pre>
  </div>
  <div style="flex: 1; background: #ffebee; padding: 10px; border-radius: 5px;">
    <strong>❌ Don't Do This:</strong>
    <pre><code class="language-js">  difficult_words:
    word3: звёзды* — EN: celebrities</code></pre>
  </div>
</div>
In the example above, the string contains characters that would break yaml's syntax if not contained in quotation marks, specifically - and :. By enclosing the text in quotation marks we signal to yaml that this is a string and should not be treated as part of yaml's syntax.

Finally, if the string is very long, complex, contains special characters and spans over multiple lines, a different formatting rule must be used:

```
  constr_info: |
    Kонструкция ^кроме того, ...@ вводит дополнительную информацию. Часто
    перед этой конструкцией стоит союз «а» : ^а кроме того, ...@
    <ul><li> Я учусь в университете. ^Кроме того,@ я играю в футбол.</li>
     <li>Я учусь в университете, ^а кроме того,@ я играю в футбол.</li></ul>

```

Here a **|** symbol is added along with newline to signal to yaml that the string will take over multiple lines. All text must then be indented relative to the attribute:

<div style="display: flex; gap: 20px;">
  <div style="flex: 1; background: #e8f5e9; padding: 10px; border-radius: 5px;">
    <strong>✅ Do This:</strong>
    <pre><code class="language-js"> 
    constr_info: | 
        Текст
        на несколько
        строк.
    </code></pre>
  </div>
  <div style="flex: 1; background: #ffebee; padding: 10px; border-radius: 5px;">
    <strong>❌ Don't Do This:</strong>
    <pre><code class="language-js">
    constr_info: | 
    Текст
    на несколько
    строк.
    </code></pre>
  </div>
</div>

### Lists
Finally, lists of elements can be used as values for some attributes. Lists are formatted using **-**:

```
  answer_options: 
   - а
   - б
   - в
   - г
   - д
```

## String formatting
The most important way to format strings is highlighting constructions. This is done with a custom 'annotate' function in the `build_lessons.js` script that generates exercises. The script searches for strings that start with a special ^ symbol and end with @. Such strings are formatted in semi-bold and blue color, then the special characters are removed. For example, if the exercise title contains constructions:

```
3:
  lesson_id: 1
  ex_number: 3
  title: Переформулируйте предложения, используя конструкцию ^не только ..., но и ...@. Любое ли предложение можно переделать? (Если нельзя, напишите нельзя переделать)
```

The result:

![annotated-construction](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/annotate-eg.png)

Very often the text needs to be formatted for the website page, for example, organized in a numbered list, italicised, etc. Since Yaml does not support such formatting, we use HTML tags inside the strings. When the website is later generated by JavaScript, the HTML files will format the text properly on the page.

```
  title: |
    Бонусное упражнение
    Заполните пропуски словами из списка. Объясните, почему другие варианты не подходят. Правильных ответов может быть несколько.
    <ul>
    <li>^Кстати@</li>
    <li>^Кроме того@</li>
    <li>^К тому же@</li>
    </ul>
```

Result:
![html-formatting-result](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/html-formatting-eg.png)

Here, the ```<ul></ul>``` tag formats the content as an unordered list (to do ordered list, change to ```<ol></ol>```). Each bullet point should then be contained in ```<li></li>``` tags. 

In addition, a ```<br>``` tag is often used to add linebreaks in the text:

```
  constr_info: |
    Kонструкция ^кстати, ...@ вводит мысль, которая неожиданно появилась у
    говорящего в момент речи и немного отклоняется от этой темы разговора:<br><br>
    – Я начал заниматься спортом и чувствую себя лучше.<br>
    – Как хорошо! ^Кстати,@ ты слышал о новом спортзале на улице Чехова?<br><br>
    У этой конструкции есть варианты:
    <ul>
    <li> ^кстати, …@ </li>
    <li> ^и кстати, …@ </li>
    <li> ^кстати говоря, …@</li>
    <li> ^и кстати говоря, …@ </li>
    </ul>
    Варианты ^и кстати@ и ^и кстати говоря@ не используются в середине предложения.
```
Result:
![linebreak-result](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/br-eg.png)

Here ```<br>``` tags are used to ensure proper paragraphs structure, and two ```<br>``` tags are used when blocks of text need to be separated by an empty line.

In theory, any HTML and CSS formatting can be used in such a way. The general style, however, is defined in the script already, so global styles such as font do not need to be defined expicitly in yaml.


## Troubleshooting

It is easy to catch a bug when working with a markup language, since it has strictly defined syntax rules. Even an extra space can break the code, leading to an error on the website's generated page. It is thus recommended to **check the validity of yaml** that has been altered before pushing changes to github. This can be done with a [Yaml Validator](https://www.yamllint.com/). 

In order to validate yaml, the contents of the file need to be copied and pasted into the window. To run validation, press the 'Go' button. If the file is formatted correctly, 'Valid YAML!' will appear. If there are issues in the file, they will be listed. For instance:

![yamlissue-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/yamllint-eg.png)

Although the error messages can be quite confusing themselves, they will give an idea of what the issue could be. Here we see that line 9 is highlighted in red, and the error message points to line 9, column 3 (i.e. third symbol in the line). This is due to incorrect indentation: values should not be on the same level as tags. 

![valid-yaml](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/correct-yaml-eg.png)

After the indentation is fixed and the 'Go' button is pressed again, the error is gone. This code is thus safe to upload.

If the data has already been pushed and the page has stopped loading, there are likely syntax errors in the yaml. The same debugging procedure can then be run with a yaml validator by copying and pasting the contents of the corresponding file. Alternatively, the error can be inspected in the browser console. The error message will contain the line number, which might help identify the issue faster.