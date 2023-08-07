# Shipment Assignment App

This Node.js application efficiently assigns shipment destinations to drivers while maximizing the total suitability score. The suitability score is calculated based on the lengths of shipment destination street names and drivers' names, considering vowels, consonants, and common factors.

## Features

-   Assigns shipments to drivers based on suitability scores.
-   Maximizes total suitability score through optimal assignments.
-   Considers even/odd street name lengths and common factors in suitability calculation.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Running the Application](#running-the-application)
-   [Usage](#usage)

## Getting Started

Follow these instructions to set up and run the application on your local machine.

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from the official website: [Node.js](https://nodejs.org/)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/alnavarroh/shipment-assignment-app.git
```

2. Navigate to the project directory:

```bash
cd shipment-assignment-app
```

3. Place the _drivers.txt_ and _addresses.txt_ files in the project directory. Each file should contain data separated by newline characters.

## Running the Application

1. In the terminal, make sure you're in the project directory where _assignment.js_, _drivers.txt_, and _addresses.txt_ are located.

2. Run the following command to execute the app:

```bash
node assignment.js
```

3. After running the app, you will see the total suitability score and the matching between shipment destinations and drivers in the terminal

## Usage

-   The application calculates suitability scores for each shipment and driver combination based on the algorithm described.
-   It assigns shipments to drivers in a way that maximizes the total suitability score.
-   The _drivers.txt_ and _addresses.txt_ files should be formatted with each name/address on a new line.
