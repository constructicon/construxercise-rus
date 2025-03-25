# Overview of all tags used in yaml files

The resourse mostly consists of uniform tasks, although there are some variations in both the content and how a user can interact with the task. These differences are defined in yaml files by providing different values to different attributes. This page provides an overview of possible attributes, the values they assume, and examples of usage.

## All possible attributes
When a new exercise is added, we usually start with a placeholder such as the one below. It contains all possible attributes which we can then fill out with necessary values. For now, all attributes have a value **~**, which is simply a NA-value, meaning the code will treat it as an empty attribute. If the attribute is optional, it can be removed altogether, but it might be more convenient to keep all attributes in even if some of them are not used, in case some elements are added later.

```
1:
  lesson_id: ~
  ex_number: ~
  title: ~
  instructions: ~
  exercise_type: ~
  title_eng: ~
  title_nor: ~
  comment: ~
  constr_info: ~
  example: ~
  model: ~
  image: ~
  task: ~
  answer_to_show: ~
  answer_key: ~
  difficult_words: ~
  table: ~
  answer_options: ~
```

## Lesson_id

The lesson id attribute for any exercise should be the same as the number in the name of the file being edited. For instance, if the name of the file you are working with is `lesson9.yml`, then `lesson_id` for all exercises in this file should be 9.

## Ex_number

The exercise number is simply it's order in the lesson, starting from 1. Note that this number will be the same as the number of exercise in yaml file:

```
10:                 # this number
  lesson_id: 1
  ex_number: 10     # is the same as this number
```

## Title

The title attribute contains the title of the exercise. The title text should not contain the exercise number, as it is added automatically when the pages are generated:

```
9:
  lesson_id: 1
  ex_number: 9
  title: Соедините части предложений, подобрав логичное продолжение.
```

![title-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/title-eg.png)

Most lessons also contain a bonus exercise, which is formatted in green. The title attribute in yaml should then begin with the word "Бонусное".

```
15:
  lesson_id: 4
  ex_number: 15
  title: "Бонусное упражнение<br>Обсудите с собеседником, согласны ли вы с советами из таблицы в задании 13 и следуете ли вы им."
```

![bonus-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/bonus-eg.png)


## Instructions

Instructions is an obsolete attribute that is no longer in use. It used to have clarifications of some grammatical tags (e.g. Cl = Clause) which have since been simplified. The attribute has not yet been removed from all data files altogether, but can be safely ignored.

## Exercise_type

Exercise type is an important tag which only has 4 valid values:

1. ~ (no user input)
2. text_input (user can input text)
3. multichoice_singleanswer (radio buttons)
4. multishoice_multianswer (checkboxes)

The value of exercise_type attribute directly affects whether the user will be able to input an answer.

If the `text_input` option is passed, a simple text input form will be added to the task which the user can type the answer into: 

![text-input-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/text-input-eg.png)

If the `multichoice_singleanswer` option is passed, radio buttons are generated which allow the user to choose **one** correct option:

![radio-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/radio-eg.png)

Finally, if the `multichoice_multianswer` option is passed, checkboxes are generated which allow the user to choose **multiple** correct answers:

![checkbox-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/checkbox-eg.png)

In the last two cases (radio buttons and checkboxes) the options for buttons are predefined and stored in the `answer_options` attribute: [Answer_options](https://constructicon.github.io/construxercise-rus/docs/#/data/tag-overview?id=answer_options).

## Title_eng

This attribute contains a translation of the task title to English. The translation is displayed when the user presses the 'EN' button under the task title.

## Title_nor

This attribute contains a translation of the task title to Norwegian. The translation is displayed when the user presses the 'NO' button under the task title.

## Comment

The comment attribute contains comments for teachers. It's contents are usually short, simple strings and are displayed when the user presses the 'Comment for language teachers' button under the task title.

```
  comment: "Формат задания: в парах. = Task format: in pairs."

```

## Constr_info
 
The `constr_info` attribute is passed when a special 'construction info' field needs to be generated. The field is automatically formatted to have a light peach background, an icon and a title 'Информация о конструкции'.

The values for this attribute are often multiline text and thus need to be formatted with a special | symbol:

```

  constr_info: |
    Kонструкция ^кроме того, ...@ вводит дополнительную информацию. Часто
    перед этой конструкцией стоит союз «а» : ^а кроме того, ...@
    <ul>
        <li> Я учусь в университете. ^Кроме того,@ я играю в футбол.</li>
        <li>Я учусь в университете, ^а кроме того,@ я играю в футбол.</li>
    </ul>

```

![constr-info-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/constr-info-eg.png)

## Example

The `example` tag contains examples to how an exercise can be completed. The contents are shown under the exercise title in a separate field with 'Образец' as the title:

![example-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/example-eg.png)

## Model

This attribute usually contains a template or scheme of how the exercise shouls be completed. The contents are shown under the exercise title in a separate field with 'Модель' as the title:

![model-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/model-eg.png)

## Image

The `image` attribute is used to add images to the exercise. It is usually done by passing the `link` attribute (attributes can be nested, like in this case). In addition, a `width` attribute can be passed to specify size in pixels. 

```
    image: 
        link: "https://github.com/constructicon/construxercise-rus/raw/main/images/2/packing.jpg"
        width: 400
```

The URL provided to the image is the **raw** image in the github repository. Any new image should be uploaded to the [images](https://github.com/constructicon/construxercise-rus/tree/main/images) subdirectory in the repository, which contains subdirectories for all lessons. For instance, if the image needs to be added for the 10th lesson, it should be uploaded to the https://github.com/constructicon/construxercise-rus/tree/main/images/10 subdirectory.

<div style="border-left: 5px solid #f39c12; background: #fff3cd; padding: 10px; border-radius: 5px;">
  <strong>⚠️ Important!</strong><br><br>

  After uploading the image, select the URL in your browser, for instance:

  https://github.com/constructicon/construxercise-rus/blob/main/images/5/interview.jpg
  
  This link WILL NOT WORK if pasted into the yaml file as is. After you have selected the URL, change 'blob' to 'raw':

  https://github.com/constructicon/construxercise-rus/raw/main/images/5/interview.jpg

  Press enter to reload the window. The link will then change to something like this:

  https://raw.githubusercontent.com/constructicon/construxercise-rus/main/images/5/interview.jpg

  This URL is ready to use!
</div>

Note that since links often contain special characters that can mess up yaml syntax, it is best to provide them in quotation marks.

## Task

The `task` attribute is perhaps the most important as it is responsible for the exercise contents. The way this attribute is used depends on whether there are subtasks in the exercise. 

To add text to an exercise, use `text` attribute. 

```
  task: 
    text: |
        В этом году я поступил в университет на филологический факультет. _________________________, учиться здесь сложно. _________________________, преподаватель по литературе, задаёт очень много домашних заданий на неделю. _________________________, к сегодняшнему занятию нам нужно было прочитать роман \"Идиот\" целиком и написать эссе. __________________________ меня, ___________ я люблю учить иностранные языки: английский и испанский. А вот литература мне уже не очень нравится."
```

If the task contains multiple subtasks, they are added as attributes with their order number, for example:

```
  task:
    task1: ~
    task2: ~
    task3: ~
```

Just like with regular tasks, subtasks can can different contents along with text, such as images, audio, tables. 
```
  task:
    task1:
      text: "а. Познакомьтесь! Матвей Белов –  ________________  медицинского факультета. ^Кроме того,@ Матвей занимается каратэ и  ________________  плавает. Матвей ^не только@ учится, ^но и@  ________________  санитаром в больнице. Это полезный опыт, ^к тому же@ неплохая зарплата. ^Кстати говоря,@ в этой больнице лежала  ________________  тëтя. Она говорит, что Матвей – замечательный санитар и, ^плюс ко всему,@ у него  ________________  хорошее чувство юмора."
      audio: a
      image: 
        link: "https://github.com/constructicon/construxercise-rus/raw/main/images/1/nurse.jpg"
        width: "400"
    task2:
      text: "б. Это Ирина.  ________________  талантливая певица. Ирина ^не только@ отлично поет, ^но и@ прекрасно  ________________  на гитаре. ^Кстати говоря,@  ________________  Ирине подарил отец."
      audio: b
      image:
        link: "https://github.com/constructicon/construxercise-rus/raw/main/images/1/guitar.jpg"
        width: "400"
```
Audios must be added to the `voiceovers` subdirectory. Similarly to images, it contains subdirectories for each lesson. For example: https://github.com/constructicon/construxercise-rus/tree/main/voiceovers/1 contains audios for the first lesson. 

The naming convention for the audios is: less{lesson_id}ex{ex_number}{identifier}.wav. For example, the first audio in lesson 1 has the name `less1ex1a.wav`, the second -- `less1ex1b.wav`, etc. As you can see in the example yaml above, we only need to input the identifier in the yaml file (a, b, c, etc.).

## Answer_to_show
This attribute contains answers that are displayed to the user upon pressing the 'Answer key' button. The value does not have to be exactly the correct answer, it can also contain clarifications, formatting, etc. This attribute is NOT used to check the correctness of the user input. 

If the task does not have subtasks, `answer_to_show` assumes the value of a string, for instance:

```
  answer_to_show: "1. Честно говоря <br>2. К примеру / Так, <br>3. К примеру / Так, <br>4. Что касается <br>5. то"
```

![ans-to-show-eg](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/ans-to-show-eg.png)

If the task has multiple subtasks, this attribute's value is contains multiple attributes, one for each subtask, for example:

```
  task: 
    task1:
      text: "1"
    task2:
      text: "2"
    task3:
      text: "3"
  answer_to_show: 
    answer1: "У бабушки болят глаза. Ей нужен врач, который лечит болезни глаз, ^другими словами,@ / ^то есть@ окулист."
    answer2: "Маша каталась на сноуборде и сломала ногу. Ей нужен врач, который лечит переломы, ^другими словами,@ / ^то есть@ хирург."
    answer3: "У Степана болит зуб. Ему нужен врач, который лечит зубы, ^другими словами,@ / ^то есть@ стоматолог."
```

## Answer_key
This attribute is almost exactly the same as the previous one, except its value is used to check user's input. Its value must thus be exactly the same as we expect from the user in the task. 

For instance, in the example above the answer that is shown to the user is very different from the one we use to check for correctness: 
```
  task: 
    task1:
      text: "1"
    task2:
      text: "2"
    task3:
      text: "3"
  answer_to_show: 
    answer1: "У бабушки болят глаза. Ей нужен врач, который лечит болезни глаз, ^другими словами,@ / ^то есть@ окулист."
    answer2: "Маша каталась на сноуборде и сломала ногу. Ей нужен врач, который лечит переломы, ^другими словами,@ / ^то есть@ хирург."
    answer3: "У Степана болит зуб. Ему нужен врач, который лечит зубы, ^другими словами,@ / ^то есть@ стоматолог."
  answer_key:
    answer1: "б"
    answer2: "в"
    answer3: "а"
```

Sometimes multiple answers are correct. The `answer_key` attribute can then be defined as a list, each element in which is a variant of correct answer. For example:

```
  answer_key:
    answer1: 
      - "Мне уже лучше, да и вообще, я вас совсем не знаю!"
      - "Мне уже лучше, и вообще, я вас совсем не знаю!"
    answer2: 
      - "И вообще, тебе надо найти другую работу!"
      - "Да и вообще, тебе надо найти другую работу!"
    answer3: 
      - "И вообще, я уже не помню..."
      - "Да и вообще, я уже не помню..."
    answer4: 
      - "И вообще, у меня всё болит."
      - "Да и вообще, у меня всё болит."
```

Here there are 4 subtasks, and each of them has 2 potentially correct answers. The script will then search for the user's answer in this list, and if it is found, display the user answer as correct.

## Difficult_words

...

## Table

The `table` attribute allows to add a table to both a task and a subtask. This means that both this:

```
task:
  table:
    ...
```
and this:
```
task:
  task1:
    table:
      ...
```
is possible.

It is one of the most extensive attributes, mostly because of the need to have options for different formatting, headings, text alignment, etc. Here is the list of all possible attributes in `table`:

```
table: 
    heading: ~
    vertical_align: ~
    horizontal_align: ~
    width: ~
    row1:
      - "this is the first column"
      - "and this is the second"

    row2: 
      - "this is the first column but second row"
      - "and this is the second column second row"

```

The `heading` attribute allows to add a heading which will be visually separated from the rest of the content. For instance:

```
table:
    heading: 
      - Вопрос
      - Ответ
    vertical_align: ~
    horizontal_align: ~
    width: ~
    row1:
      - 1. В каких ещё компаниях вы проходите собеседование?
      - а. Честно говоря, я не очень амбициозный человек. Через пять лет я хочу продолжать работать в вашей компании на должности руководителя отдела*.
    ...
```

## Answer_options
...