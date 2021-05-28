	Create simple todo app.
a)	You should implement the following functions:

•	Add – add new unique note (note should have 2 properties – title and body);

•	List – list all notes;

•	Read – read one note by its title;

•	Remove – remove one note by its title.

b)	Notes should be stored in .json file. 
Simple example of .json file with notes:
```[
  {
    "title": "to buy",
    "body": "food"
  },
  {
    "title": "things to do",
    "body": "Go to the post office"
  }
]
```

c)	title and body  should be passed through command line arguments (function to call, title, body)

d)	You can use synchronic methods for reading/writing to file.

e)	You can use any packages you want.

a)	Create your own local module (e.g. for storing all methods for working with notes – add, remove, list and etc.).

f)	Play around with package.json properties (scripts, dependencies sections).

g)	Add some error handling (e.g. when you try to add note with the same title)

h)	Add come comments to your code.

