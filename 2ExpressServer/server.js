// ========== IMPORTS ==========
// const express = require('express');

// const path = require('path');

// const port = 8001;

// ========== SERVER ==========
// const server = express();

// const gateKeeper = (req, res, next) => {
//     // Add middleware that returns a 401 status every 3 seconds
//     const time = new Date().getSeconds();
//     console.log(time)

//     if (time % 3 === 0) {
//         res.status(401).json({ message: 'You shall not pass' })
//     } else {
//         next()
//     }

// }

// server.use(gateKeeper);

// server.get('/', (req, res) => res.status(200).send('Hello from basic express server'))

// server.get('/download', (req, res, next) => {
    // const filePath = path.join(__dirname, 'index.html');
    // res.sendFile(filePath, err => {
        // if (err) {
            // next(err);
        // } else {
            // console.log('file sent successfully')
        // }
    //  });
// })

// server.use((err, req, res, next) => {
    // console.log(err);
    // res.status(404).json({ message: 'There was an error performing the required action', error: err })
// })

// server.listen(port, () => console.log(`\n\t\t***Server is listening on ${port}***\n`))




// ===== IMPORTS =====
const express = require("express");

// ===== VARIABLES =====
const PORT = 3002;
const characters = [
	{
		id: 1,
		name: "Spawn",
	},
	{
		id: 2,
		name: "Shaggy",
	},
];

// ===== SERVER =====
const server = express();

server.get("/", (req, res) => {
	console.log(req);
	// res.send(`<h1>Hello World 4/12</h1>`);
	res.json(characters);
});

server.get("/characters", (req, res) => {
	const characters = [
			{
				id: 1,
				name: "Riddick",
			},
			{
				id: 2,
				name: "Kung Lao",
			},
	];
	res.status(200).json(characters);
})

server.listen(PORT, () => {
	console.log(`\n\n\t***** Server listening on port ${PORT}\n\n`);
});

