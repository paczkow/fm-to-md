# Welcome to fm-to-md generator 🙌



> CLI that generates a Markdown file from your notes of any frontendmasters.com course.
>
> Get your notes and use it anywhere! 🚀

## ✨ Demo 

`fd-to-md generator` eases creating Markdown files with your notes from any frontendmaster.com course.

![demo.gif](./assets/demo.gif)

## 🚀 Usage

### 1. Start from installing needed packages: 

```bash
npm install
```
### 2. Get data from `frontendmasters.com`

You'll need:
- Link to main page of the course
- File with course JSON data
- File with notes JSON data

To get JSON data you need to (testing on Chrome):
1. Open DevTools and move to `Network` tab and filter requests by `Fetch/XHR`, refresh the page with course content. 
2. You will see 2 requests which name is same like course slug e.g for https://frontendmasters.com/courses/javascript-hard-parts-v2 you should see request `javascript-hard-parts-2`. Click on each of the request and select `Copy` -> `Copy Response`. Create files and copy content to them, paths to these files you use as parameters.

> If you don't know request is about notes or course you can check properties. Request related with your notes has `notes` property iniside. 

![how-to-copy-data.gif](./assets/how-to-copy-data.gif)

### 3. Run script

```bash
node index.js -n data/notes.json -c data/course.json -l https://frontendmasters.com/courses/ -o javascript-hard-parts-v2.md
```

- `-n` - path to your JSON file with notes data (required)
- `-c` - path to you JSON file with course data (required)
- `-l` -  link to the main page of the course (Page without concrete lessons e.g https://frontendmasters.com/courses/javascript-hard-parts-v2) (required)
- `o` - full path to your output file (default: `output.md`)

## 👨🏻‍💻 Author

### Michał Paczków
- Twitter: https://twitter.com/_paczkow
- Github: https://github.com/paczkow