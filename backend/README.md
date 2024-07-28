# Backend Task

Submitted by: Sebastian M . Villavicencio

## Requirements

1. Node.js
2. npm (Node Package Manager)

## Installation

1.  Ensure you have Node.js and npm installed. You can download them from Node.js official website.
2.  Install all dependencies by running:

```bash
npm install
```

## Usage

To run the application, use the following command in your terminal:

```bash
node index.js -n <number of times to fetch the API> -f <format>
```

### Parameters

- `-n <number>`: Specify the number of times to fetch the API.
- `-f <format>`: Specify the output format.

### Available formats

- `console`: Outputs the data to the console.
- `csv`: Saves the data as a CSV file.
- `json`: Saves the data as JSON file.

## Example

To fetch the API 5 times and output the data to the console, you would run:

```bash
node index.js -n 5 -f console
```

To fetch the API 10 times and save the data as a JSON file, you would run:

```bash
node index.js -n 10 -f json
```
