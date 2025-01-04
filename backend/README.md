# Backend - M-TREAT Full-Stack Developer Takeaway Assessment

## Setup Instructions

### Prerequisites

-   **PostgreSQL**: For creating and managing the database.
-   **Poetry**: For dependency management and running Python commands.
-   **Prisma**: For ORM integration.

### Step 1: Configure the Database

1. Create the Database:

    ```sh
    (cd ./app/api/api/models/database && sudo -u postgres psql -f auth_database.sql)
    ```

2. Verify the Database:
    ```sh
    sudo -u postgres psql
    \c auth_database
    \dt
    ```

### Step 2: Initialize Prisma

1. Install Dependencies:

    ```sh
    poetry install
    ```

2. Apply Database Migrations:

    ```sh
    poetry run prisma migrate dev --name init
    ```

3. Generate Prisma Client:
    ```sh
    poetry run prisma generate
    ```

### Step 3: Start the Django Server

1. Navigate to the backend directory:

    ```sh
    cd backend/app
    ```

2. For migrations upon changing model:

    ```sh
    poetry run python manage.py makemigrations authentication
    poetry run python manage.py --fake
    poetry run python manage.py
    ```

3. Start the Django server:
    ```sh
    poetry run python manage.py runserver
    ```

## Usage

1. Register a new user through the frontend registration form.
2. Log in using the registered credentials.
3. View and update user details on the home page.

---
