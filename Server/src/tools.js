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
    },
    writeJson: async function(filePath, data) {
        try {
            const jsonData = JSON.stringify(data, null, 2);
            await fs.writeFile(filePath, jsonData, 'utf8');
            console.log("File has been saved.");
        } catch (error) {
            console.log("Error writing file", error);
            throw error;
        }
    },
    appendJson: async function(filePath, data, existingData, field) {
        try {

            const jsonData = JSON.stringify(data, null, 2);

            await fs.writeFile(filePath, jsonData, 'utf8');
            console.log("File has been saved.");
        } catch (error) {
            console.log("Error writing file", error);
            throw error;
        }
    },
    generateUUID: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}