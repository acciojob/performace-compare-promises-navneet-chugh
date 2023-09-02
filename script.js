// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchData(url) {
            return fetch(url)
                .then(response => response.json());
        }

        // Measure time taken for Promise.all
        const startTimeAll = Date.now();
        Promise.all(apiUrls.map(url => fetchData(url)))
            .then(() => {
                const timeTakenAll = Date.now() - startTimeAll;
                document.getElementById("output-all").textContent = timeTakenAll + "ms";
            })
            .catch(error => console.error(error));

        // Measure time taken for Promise.any
        const startTimeAny = Date.now();
        Promise.any(apiUrls.map(url => fetchData(url)))
            .then(() => {
                const timeTakenAny = Date.now() - startTimeAny;
                document.getElementById("output-any").textContent = timeTakenAny + "ms";
            })
            .catch(error => console.error(error));