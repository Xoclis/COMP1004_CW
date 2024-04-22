const fs = require('fs').promises;

module.exports = {
    getJson: async function (filePath) {
        try {
            const data = await fs.readFile(filePath, 'utf8'); // Read the file asynchronously
            return JSON.parse(data); // Parse and return the JSON data
        } catch (error) {
            console.error("Error reading file", error);
            throw error; // Rethrow the error for handling upstream
        }
    }
}