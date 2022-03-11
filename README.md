<h1 align="center">
    Contacts Application
</h1>

<a id="tech-stack"></a>

## ⚙️ Tech Stack

- Express.js
- Reactjs
- MongoDB

<a id="setup-run"></a>

## 🔨 Setup and Run

<a id="setup-repo"></a>

### Setup local repo

Let's setup the server on your local machine.

### 0. Prerequisites

- Make sure you have [Node.js](http://nodejs.org) installed on your machine.

### 1. Fork repo

Fork this repo to your GitHub account

### 2. Clone repo

Clone the forked repo to your local machine

```bash
git clone https://github.com/<YOUR-GITHUB-USERNAME>/Contacts-App.git
```

Navigate to project directory using Command Prompt

```bash
cd Contacts-App
```

### 3. Install Dependencies

Make sure you are in the Contacts-App directory and then run the following commands:-

```bash
npm install
cd client
npm install
```

### 4. 📌 Setting up .env file :

1. Create a new file `.env` in the root directory.
2. Copy all the default content from the `sample.env` file to the `.env` file.

<a id="setup-database"></a>

### 5. 📡 Setup database

- Follow this blog to setup the Database and get the MONGO_URI:- https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/
- Now you have the MONGO_URI. Replace it with `PASTE_YOUR_MONGO_URI` in `.env` file.

<a id="run-app"></a>

### 6. Running the app

- Navigate to Contacts-App directory in the command prompt and enter the following command.
  ```bash
  npm start
  ```
  The server has now started.
- Open a new command prompt and navigate to Contacts-App directory and enter the following commands:-
  ```bash
  cd client
  npm start
  ```
  The client has started running as well.
- In the browser enter http://localhost:3000/
