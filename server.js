var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [
	{
		id: 1,
		description: 'Do Node Tutorial',
		completed: false
	},
	{
		id: 2,
		description: 'Go to the store',
		completed: false
	},
	{
		id: 3,
		description: 'Eat lunch',
		completed: true
	}
]

app.get('/', function(req, res) {
	res.send('ToDo API Root');
});

app.get('/todos', function(req, res) {
	res.json(todos);
});

app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.map(function(todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	});

	if(matchedTodo) {
		res.json(matchedTodo);
	} else{
		res.sendStatus(404);
	}
});

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
});