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

In the last two cases (radio buttons and checkboxes) the options for buttons are predefined and stored in the `answer_options` attribute [link].

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

The `task` attribute is perhaps the most important as it is responsible for the exercise contents.