# Database and Prisma Setup

This README provides step-by-step instructions for configuring the database and Prisma for your project.

---

## Prerequisites

Before proceeding, ensure you have the following tools installed:

-   **PostgreSQL**: For creating and managing the database.
-   **Poetry**: For dependency management and running Python commands.
-   **Prisma**: For ORM integration.

---

## Step 1: Configure the Database

### 1.1 Create the Database

Ensure you have a PostgreSQL user with appropriate permissions. Run the following command to create the database and its schema:

```bash
sudo -u postgres psql -f auth_database.sql
```

-   The `auth_database.sql` file contains the SQL commands for creating the database and necessary tables.
-   Make sure the SQL file is in the root directory of your project.

### 1.2 Verify the Database

Log in to PostgreSQL and confirm the database setup:

```bash
sudo -u postgres psql
\c auth_database
\dt
```

-   `\c auth_database`: Connects to the `auth_database`.
-   `\dt`: Lists all tables in the database.

---

## Step 2: Initialize Prisma

### 2.1 Install Dependencies

Ensure all project dependencies are installed using Poetry:

```bash
poetry install
```

This installs Prisma and other required libraries listed in the `pyproject.toml` file.

### 2.2 Apply Database Migrations

Run the following command to apply migrations to the database:

```bash
poetry run prisma migrate dev --name update_id_to_uuid
```

-   **Explanation:**
    -   `migrate dev`: Applies migrations in development mode.
    -   `--name update_id_to_uuid`: Names the migration, describing the changes (e.g., updating `id` to UUID).

### 2.3 Generate Prisma Client

Generate the Prisma client for Python:

```bash
poetry run prisma generate
```

-   This creates a Python client that allows you to interact with the database programmatically.
-   Ensure `prisma-client-py` is correctly configured in your `schema.prisma` file.

---

## Step 3: Verify the Setup

### 3.1 Connect to the Database Programmatically

Test the Prisma client by connecting to the database and running a query:

```python
import asyncio
from prisma import Prisma

async def main():
    prisma = Prisma()
    await prisma.connect()

    # Example Query
    users = await prisma.users.find_many()
    print(users)

    await prisma.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
```

-   Save the script and run it using:

```bash
poetry run python script_name.py
```

### 3.2 Check for Errors

If you encounter issues, verify:

1. Database connection string in `schema.prisma`:

    ```prisma
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
    ```

    Ensure `DATABASE_URL` is correctly set in your `.env` file.

2. Migrations:
   Confirm the migrations were applied by checking the database tables.

3. Prisma Client:
   Regenerate the Prisma client if changes were made:
    ```bash
    poetry run prisma generate
    ```

---

## Additional Notes

-   **Environment Variables:**
    Store sensitive information like the database URL in a `.env` file:

    ```env
    DATABASE_URL="postgresql://username:password@localhost:5432/auth_database"
    ```

-   **Prisma Commands:**

    -   `poetry run prisma db push`: Pushes the schema to the database without creating migrations while `db pull` does the opposite.
    -   `poetry run prisma studio`: Launches Prisma Studio for database visualization.

-   **Testing:**
    Use test databases and run migrations separately for testing purposes.

---

This setup ensures a smooth configuration of your database and Prisma ORM for seamless application development. If you encounter any issues, consult the Prisma and PostgreSQL documentation or reach out for further assistance.
