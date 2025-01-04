import React from 'react';
import { formatPhoneNumber } from '../config/helpers';

const PhoneInputComp = ({
    phoneNo,
    setPhoneNo,
}: {
    phoneNo: string;
    setPhoneNo: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const formattedInput = formatPhoneNumber(input);
        setPhoneNo(formattedInput); // Updating phone number state
    };

    return (
        <input
            type="tel"
            id="phone_no"
            name="phone_no"
            className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="254-741-852-963"
            value={phoneNo} // Bound to phone number state
            onChange={handleChange}
            pattern="254-[0-9]{3}-[0-9]{3}-[0-9]{3}"
            required
        />
    );
};

export default PhoneInputComp;
