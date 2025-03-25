# Structure of yaml files

The website is dynamically generated from information stored in .yml-files found in the [data](https://github.com/constructicon/construxercise-rus/tree/main/data) subdirectory. 

The structure of our /data subdirectory is as follows:

```
data
│   lessons.yml
│   functions.yml   
│
└───lessons
│   │   lesson1.yml
│   │   lesson2.yml
│   │   lesson3.yml
│   │    ...
│   
└───functions
    │   function1.yml
    │   function2.yml
    │   function3.yml
    │    ...
```

The individual files data/lessons.yml and data/functions.yml contain information for loading the **construction overview tables** in the beggining of each lesson, while the yaml files inside the subdirectories /data/lessons and /data/functions contain **exercises**. 

## Overview tables

The overview tables are generated at the beginning of every lesson (except for lesson 5 and 12, which don't have a specific topic in focus and instead use constructions from previous lessons).

![overview-table](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/overview_table.png)

Although the table consists of only two columns, there is quite a lot of information that goes into generating them.

- Construction ID: needed to generate link to RusCon (e.g. [172](https://constructicon.github.io/russian/#172))
- Construction formula: the construction itself (e.g. 'кроме того...')
- Illustration: the example provided in the second column
- Formula equivalents:
  - English (e.g. 'in addition...')
  - Norwegian (e.g. 'i tillegg...')
- Illustration equivalents:
  - English (e.g. 'In addition I play football.')
  - Norwegian (e.g. 'Dessuten spiller jeg fotball')

The formula and illustration equivalents are displayed at the same time upon pressing the EN or NO buttons in the right side of the table.

![equivalents](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/equivalents-eg.png)

All of this information is stored in the data/lessons.yml file, which is a list of all lessons. Just like the rest of the files, it starts with a special `---` line designating the beginning of the file. It then starts numbering lessons starting with 1.

```
---
1:
  lesson_id: 1
```
The `lesson_id` attribute usually has the same value, and signifies the ID of the current lesson. This is the only attribute that is usually set, while the others are a bit trickier. Here is an example of an instance in the lessons.yml file:

```
1:
  lesson_id: 1
  lesson_name: Урок 1. Знакомство
  lesson_name_eng: Introducing yourself
  construction_table_rows:
    - - 170
      - кроме того ...
      - Я учусь в университете. ^Кроме того@, я играю в футбол.
      - - In addition, ...
        - Besides, …
      - - Dessuten ...
      - - I study at the university. In addition, I play football.
        - Jeg studerer ved universitetet. Dessuten spiller jeg fotball.
    - - 1093
      - к тому же ...
      - Я часто хожу на кинофестивали, ^к тому же@ веду свой блог.
      - - In addition, ...
      - - I tillegg ... 
      - - I often go to film festivals; in addition, I run my own blog.
        - Jeg går ofte på filmfestivaler, i tillegg driver jeg min egen blogg.
    - - 410
      - не только ..., но и ...
      - Я изучаю ^не только@ русский язык, ^но и@ экономику.
      - - not only ..., but also ...
      - - ikke bare ... men også ...
      - - I study not only Russian, but also economics.
        - Jeg studerer ikke bare russisk, men også økonomi.
    - - 1867
      - плюс ко всему, ...
      - ^Плюс ко всему@, я люблю путешествовать.
      - - In addition, …
      - - I tillegg til alt dette, ...
      - - In addition, I like to travel.
        - I tillegg til alt dette, liker jeg å reise.
    - - 1872
      - кстати, ...
      - ^Кстати,@ мой брат по профессии тоже экономист.
      - - By the way, ...
      - - Forresten ...
      - - By the way, my brother is also an economist by profession.
        - Forresten, min bror er også økonom av yrke.
```
### `lesson_name` 
This attribute is responsible for the title in the top of the page.

### `lesson_name_eng` 
This attribute provides a translation of the lesson title to English. Although not visible on the lesson page, it is necessary for loading the dropdown menu in the navbar:

![dropdown](https://raw.githubusercontent.com/constructicon/construxercise-rus/main/docs/images/lesson-dropdown.png)

### `construction_table_rows`
This attribute's value is a list, and it has a very strict structure. The elements of the list are **rows of the overview table**, and each row contains elements for it in a very specific order:

```
- ID
- Formula
- Illustration
- - English formula equivalent 1
  - English formula equivalent 2
  - ...
- - Norwegian formula equivalent 1
  - Norwegian formula equivalent 2
  - ...
- - Illustration translation to English
  - Illustration translation to Norwegian
```

In the example above, the first row of the table is represented as such:

```
    - - 170
      - кроме того ...
      - Я учусь в университете. ^Кроме того@, я играю в футбол.
      - - In addition, ...
        - Besides, …
      - - Dessuten ...
      - - I study at the university. In addition, I play football.
        - Jeg studerer ved universitetet. Dessuten spiller jeg fotball.
```

Since one overview table can contain however many constructions, there is no limit on the number of rows in the table.