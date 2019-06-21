## W3D3 AJAX and jQuery

### HTTP

Http is the underlying way that different computers talk to each other over the internet. It works off of the basic idea:

1. I (the client) asks for information
2. You (the server) gives me information

### CRUD

CRUD stands for the four actions that we can trigger in a database:

- Create
- Read
- Update
- Delete

Let's look at a liberary example to understand CRUD. 

Create — This would consist of a function which we would call when a new library book is being added to the catalog. 

Read — This would consist of a function which would be called to see all of the books currently in the catalog. 

Update — There should be a function to call when information about a book must be changed. 

Delete — There should be a function to call to remove a library book from the catalog. 

### AJAX

AJAX stands for Asynchronous Javascript and XML
This allows us to talk to our database and get data back without having to refresh our page

### JSON

Javascript Object Notation!
This is the format that we expect to get data back from an HTTP request:
[Here's](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) a link to the MDN docs on JSON

Here's an example of JSON:

```JSON
{
 "horoscope":"lorem ipsum dolor sit amet.",
  "date":"Thursday, February 1, 2018",
  "sign":"scorpio"
}
```

### PARAMS

Short for query parameters which lets you narrow down a 'search'. These are separated by `&` in your url.

### Get Request with jQuery

To 'get' information with jQuery, we use a get request:

```JavaScript
$.get('https://myfakestocks.com/stocks?stock=AAPL&range=year', function(data) {
  console.log(data);
});
```

First talk about JSON and Ajax


####JSON
What is an object? 

```
var myCat = {
"name": "Mita"
"species": "cat"
"favFood": "tune"
}

myCat.favFood will give us tuna
```

What is Arrays

```
var myFavColors = ["blue", "green", "purple"]

myFavColors[1] gives green
```
What is Array of Objects

```
var thePets = [
{"name": "Marta"
 "species": "dog"
 "favFood": "firfir"},
{"name": "Eman"
 "species": ""
 "favFood": "tune"}
]

thePets[1].favFood
```

