const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('build'));

app.get('/api/portfolio', (req, res) => {
	const projects = [
		{
			id: 1,
			project_name: 'first project',
			link: 'www.google.com',
		},
		{
			id: 2,
			project_name: 'second project',
			link: 'www.google.com',
		},
		{
			id: 3,
			project_name: 'third project',
			link: 'www.google.com',
		},
	];
	res.json(projects);
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
