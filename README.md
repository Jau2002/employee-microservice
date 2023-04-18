# EMPLOYEE MICROSERVICE

The API is a microservice that provides information about employees and departments. It allows users to retrieve, create, update, and delete employee and department data. The API supports various operations, such as searching for employees by name, retrieving a list of departments, and adding a new employee to a department. It also provides authentication and authorization mechanisms to ensure that only authorized users can access the data. The API is designed to be scalable, reliable, and easy to use, making it a useful tool for managing employee and department information in any organization.

## Table of contents

- [Setup](#setup-installation)
  - [Prerequisites](#prerequisites)
  - [Installation](#installing-dependencies)
  - [variables environment](#get-variables-environment)
  - [Connection](#configure-the-connection)
  - [Run](#running-the-api)
- [Documentation](#documentation-api)

## Setup installation

### Prerequisites

Before using this application, make sure you have the following prerequisites installed on your system:

### Mandatory Prerequisites

- [Node.js](https://nodejs.org/en/download/): This is a JavaScript _runtime environment_ that is required to run the application. Follow the instructions on the official Node.js website to download and install the latest version for your operating system.

- [PostgreSQL](https://www.postgresql.org/download/): This is an open-source relational database management system that is required to store and manage the data for the application. Follow the instructions on the official PostgreSQL website to download and install the latest version for your operating system.

### Optional Prerequisites

- **PNPM**: This is a fast, disk space efficient alternative to the default npm client used by Node.js. While it is not required to use this client, it is recommended for faster installations and better disk usage. To install PNPM, run the following command:

```bash
npm install -g pnpm
```

Once you have installed all of the mandatory prerequisites and optionally installed _PNPM_, you are ready to use the application.

#### Installing Dependencies

1. Open a terminal window and navigate to the root directory of the application.

2. Run the following command to install the necessary dependencies using npm:

```bash
npm install
```

Alternatively, if you have installed _PNPM_, you can run the following command:

```bash
pnpm install
```

### Get variables environment

#### Dot env vault

- [Dot env vault](https://www.dotenv.org/docs) dotenv vault from project recommended extensions.

It provides a secure way to store sensitive information, such as API keys and database passwords, in a ".env.vault" file, which can be easily loaded into your application's environment variables.

- Or you can use this command to get you the environment variables.

```bash
  npx --yes dotenv-vault@latest login --yes
```

- Register in the app and then run this other command to get the environment variables.

```bash
  npx --yes dotenv-vault@latest pull --yes
```

#### Script generator

- Or another option you can create the environment variables executing a script, but first we must raise the execution permissions.

```bash
chmod +x scripts/generate.sh
```

You just have to change the value of the environment variables to your need.

### Configure the Connection

If you followed the previous steps you just have to change the value of the environment variables to your need.

```dotenv
PORT=1234
```

### Running the API

#### Docker compose

After installing the dependencies.

- [Docker](https://www.docker.com): Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc.

The **docker-compose** command is used to manage multi-container Docker applications. It allows you to define and run multiple containers as a single service using a _YAML_ configuration file.

- Builds, (re)creates, starts, and attaches to containers for a service.

```bash
docker-compose -f docker-compose.yml up
```

#### Manager

Run the following command to start the backend server using npm:

```bash
npm run dev
```

If you have installed PNPM, run the following command instead:

```bash
pnpm dev
```

- This will start the backend server on <http://localhost:***>.

## Documentation API

Depending on the port that the server is up, in this example we will use **1234**. Open the browser and insert this url **/api-docs**.

```http
http://localhost:1234/api-docs
```

You will find documentation of the API, the paths it uses, the type of request, short descriptions, status responses, response descriptions and much more.
