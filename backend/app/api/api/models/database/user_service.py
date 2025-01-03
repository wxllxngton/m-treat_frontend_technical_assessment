import asyncio
from prisma import Prisma


class UserService:
    def __init__(self):
        self.db = Prisma()

    async def connect(self):
        """Connect to the database."""
        await self.db.connect()

    async def disconnect(self):
        """Disconnect from the database."""
        await self.db.disconnect()

    async def create_user(self, name: str, email: str, phone_no: str, password: str):
        """
        Create a new user in the database.

        :param name: User's full name
        :param email: User's unique email address
        :param phone_no: User's phone number
        :param password: User's hashed password
        :return: The created user object
        """
        return await self.db.users.create(
            data={
                'name': name,
                'email': email,
                'phone_no': phone_no,
                'password': password,
            }
        )


    async def get_user_by_id(self, id: str):
        """
        Retrieve a user by their ID.

        :param id: The unique ID of the user
        :return: The user object or None if not found
        """
        return await self.db.users.find_unique(where={'id': id})


    async def update_user(self, id: str, **kwargs):
        """
        Update a user's details.

        :param id: The unique ID of the user
        :param kwargs: Fields to update (e.g., name='New Name')
        :return: The updated user object
        """
        return await self.db.users.update(
            where={'id': id},
            data=kwargs,
        )

    async def delete_user(self, id: str):
        """
        Delete a user by their ID.

        :param id: The unique ID of the user
        :return: The deleted user object or None if not found
        """
        return await self.db.users.delete(where={'id': id})


