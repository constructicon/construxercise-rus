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

The title attribute contains the title of the exercise. 