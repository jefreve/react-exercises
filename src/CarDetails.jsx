import React, { useState, useRef, useEffect } from "react";

export function CarDetails({ initialData }) {
  const formRef = useRef();

  useEffect(() => {
    resetForm();
    console.log("initialData value changed. Form reset completed.");
  }, [initialData]);

  function resetForm() {
    formRef.current.model.value = initialData.model;
    formRef.current.year.value = initialData.year;
    formRef.current.color.value = initialData.color;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const model = formRef.current.model.value;
    const year = formRef.current.year.value;
    const color = formRef.current.color.value;

    const carDetails = { model, year, color };

    console.log(carDetails);
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          Model: <input name="model" defaultValue={initialData.model}></input>
        </label>

        <label>
          Year: <input name="year" defaultValue={initialData.year}></input>
        </label>

        <label>
          Color: <input name="color" defaultValue={initialData.color}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
