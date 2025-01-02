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

    async def create_user(self, user_name: str, user_email: str, user_phone_no: str, user_password: str):
        """
        Create a new user in the database.

        :param user_name: User's full name
        :param user_email: User's unique email address
        :param user_phone_no: User's phone number
        :param user_password: User's hashed password
        :return: The created user object
        """
        return await self.db.users.create(
            data={
                'user_name': user_name,
                'user_email': user_email,
                'user_phone_no': user_phone_no,
                'user_password': user_password,
            }
        )


    async def get_user_by_id(self, user_id: str):
        """
        Retrieve a user by their ID.

        :param user_id: The unique ID of the user
        :return: The user object or None if not found
        """
        return await self.db.users.find_unique(where={'user_id': user_id})


    async def update_user(self, user_id: str, **kwargs):
        """
        Update a user's details.

        :param user_id: The unique ID of the user
        :param kwargs: Fields to update (e.g., name='New Name')
        :return: The updated user object
        """
        return await self.db.users.update(
            where={'user_id': user_id},
            data=kwargs,
        )

    async def delete_user(self, user_id: str):
        """
        Delete a user by their ID.

        :param user_id: The unique ID of the user
        :return: The deleted user object or None if not found
        """
        return await self.db.users.delete(where={'user_id': user_id})


