import React from "react";
import { TextField } from "@mui/material";
export const Input = ({ error, name, onChange, label, labelError }) => {
  return (
    <>
      <div className="w-full mb-3">
        <TextField
          error={error != null ? true : false}
          sx={{ width: "100%" }}
          name={name}
          onChange={onChange}
          label={label}
          helperText={error != null ? labelError : ""}
          variant="outlined"
          color="success"
        />
      </div>
    </>
  );
};
