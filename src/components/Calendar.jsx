import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Text25w400 } from "../style/style";
import { formatCurrency } from "./formatCurrency";

export default function HotelBooking({ price }) {
    const [checkInDate, setCheckInDate] = React.useState(null);
    const [checkOutDate, setCheckOutDate] = React.useState(null);

    // Calculate the total nights between two dates
    const getTotalNights = (checkIn, checkOut) => {
        if (checkIn && checkOut) {
            const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
        // console.log(checkIn, checkOut);
        return 0;
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Check-in"
                value={checkInDate}
                onChange={(newValue) => {
                    setCheckInDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
                label="Check-out"
                value={checkOutDate}
                minDate={checkInDate}
                onChange={(newValue) => {
                    setCheckOutDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <Text25w400 sx={{ margin: "30px 0" }}>
                Tổng số đêm: {getTotalNights(checkInDate, checkOutDate)}
            </Text25w400>
            <Text25w400>
                Giá tiền:{" "}
                {formatCurrency(
                    getTotalNights(checkInDate, checkOutDate) * price
                )}
            </Text25w400>
        </LocalizationProvider>
    );
}
