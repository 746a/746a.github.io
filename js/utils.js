// Fetch the JSON data
fetch('../assets/projects.JSON')
    .then(response => response.json())
    .then(data => {
        // Get the tbody element of the table
        const tableBody = document.querySelector('#projectTable tbody');

        // Loop through each project and create a row
        data.forEach(project => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            const descriptionCell = document.createElement('td');
            const yearCell = document.createElement('td');
            const genreCell = document.createElement('td');

            // Set text for each cell
            nameCell.textContent = project.name;
            descriptionCell.textContent = project.description;
            yearCell.textContent = project.year;   // Added Year
            genreCell.textContent = project.genre; // Added Genre

            // Append the cells to the row
            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(yearCell);
            row.appendChild(genreCell);

            // Make the project name an A tag linking to the URL
            const link = document.createElement('a');
            link.href = project.url;
            link.textContent = nameCell.textContent; // Keep the existing text
            nameCell.textContent = ''; // Clear the existing text
            nameCell.appendChild(link);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching the projects:', error);
    });