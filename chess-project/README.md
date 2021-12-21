**Chess project**

Diego Bonilla - JALA LAT02 Bootcamp

*Description*

    This is a chess project that made in order to implement SOLID and more concepts learned from the backend class.

Develop tools: NodeJs, MongoDB
Testing tools: Jest



**How to run the project**

For deployment:
```npm start```

For development:
```npm run dev```



**How to run the tests**
```npm run test```



***How to create a game***
Perform a POST request to the following URL: http://localhost:5000/api/games with the following body:
```
{
    name: "game name"
}
```

game name could be anything you want.



**How to get all the games**
Perform a GET request to the following URL: http://localhost:5000/api/games

It should return a list of JSON with all the games, something like:
```
[
	{
		"_id": "61c24cde4f7c3493ae1a7d63",
		"name": "game 1",
		"status": "N",
		"turn": "White",
		"check": false,
		"checkMate": false,
		"__v": 0
	}, {...}
]
```



**How to interact with the game**
Perform a GET request to the following URL: http://localhost:5000/api/games/{game_id}

It should return a JSON with the complete information about the game, something like:
```
{
    "game": {
		"_id": "61c2465d429c861e90bbd767",
		"name": "game 1",
		"status": "N",
		"turn": "White",
		"check": false,
		"checkMate": false,
		"__v": 0
	},
	"board": [here is the board with the pieces setted]
    }
}
```


**How to move a piece**
Perform a POST request to the following URL: http://localhost:5000/api/pieces/{piece_id} with the following body:
```
{
	"newPosition": [positionX,positionY]
}
```

It should returns all the information of the piece moved

Implemented:
- Move all pieces
- Move pieces only when its their turn to move
- Not allow to move a piece if it is dead
- Kill a piece
- Moves only until blocked by another piece
- Knight able to go over pieces

Not implemented:
- Check
- Checkmate
- Promotion


