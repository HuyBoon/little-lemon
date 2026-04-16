import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("date input has required attribute", () => {
    render(
        <BookingForm
            availableTimes={[]}
            dispatch={() => {}}
            submitForm={() => {}}
        />,
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
});

test("guests input has min value", () => {
    render(
        <BookingForm
            availableTimes={[]}
            dispatch={() => {}}
            submitForm={() => {}}
        />,
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
});
test("submit button is disabled when form is invalid", () => {
    render(
        <BookingForm
            availableTimes={["17:00"]}
            dispatch={() => {}}
            submitForm={() => {}}
        />,
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
});

test("submit button is enabled when form is valid", () => {
    render(
        <BookingForm
            availableTimes={["17:00"]}
            dispatch={() => {}}
            submitForm={() => {}}
        />,
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const button = screen.getByRole("button");

    fireEvent.change(dateInput, { target: { value: "2026-04-14" } });

    expect(button).not.toBeDisabled();
});
test("form submits correct data", () => {
    const mockSubmit = jest.fn();

    render(
        <BookingForm
            availableTimes={["17:00"]}
            dispatch={() => {}}
            submitForm={mockSubmit}
        />,
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
        target: { value: "2026-04-14" },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(mockSubmit).toHaveBeenCalled();
});
