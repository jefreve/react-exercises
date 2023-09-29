import React, { useState } from "react";
import { CarDetails } from "./CarDetails";

export function App() {
  return (
    <div>
      <CarDetails
        initialData={{ model: "Ford Mustang", year: "2021", color: "Black" }}
      />
    </div>
  );
}
