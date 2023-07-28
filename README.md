# Welcome to fm-to-md generator 🙌



> CLI that generates a Markdown file from your notes of any frontendmasters.com course.
>
> Get your notes and use them anywhere! 🚀

## ✨ Demo 

`fd-to-md generator` eases creating Markdown files with your notes from any frontendmaster.com course.

https://github.com/paczkow/fm-to-md/assets/16765560/7cb39650-b5a8-4925-a3f0-736db889c8cc


## 🚀 Usage

### 1. Download the repo and install packages: 

```bash
npm install
```
### 2. Get data from `frontendmasters.com`

You'll need:
- Link to the main page of the course
- File with course JSON data
- File with notes JSON data

To get JSON data you need to (testing on Chrome):
1. Open DevTools and move to `Network` tab and filter requests by `Fetch/XHR`, refresh the page with course content. 
2. You will see 2 requests whose name is the same as the course slug e.g. for https://frontendmasters.com/courses/javascript-hard-parts-v2 you should see request `javascript-hard-parts-2`. Click on each of the requests and select `Copy` -> `Copy Response`. Create files and copy content to them, paths to these files you use as parameters.

> If you don't know the request is about notes or a course you can check properties. Request related to your notes has `notes` property inside. 

https://github.com/paczkow/fm-to-md/assets/16765560/eaa313ec-f77c-4079-b5a9-d89d07dd7bbb


### 3. Run script

```bash
node index.js -n data/notes.json -c data/course.json -l https://frontendmasters.com/courses/ -o javascript-hard-parts-v2.md
```

- `-n` - path to your JSON file with notes data (required)
- `-c` - path to your JSON file with course data (required)
- `-l` -  link to the main page of the course (Page without concrete lessons e.g https://frontendmasters.com/courses/javascript-hard-parts-v2) (required)
- `o` - full path to your output file (default: `output.md`)

## 👨🏻‍💻 Author

### Michał Paczków
- Twitter: https://twitter.com/_paczkow
- Github: https://github.com/paczkow
