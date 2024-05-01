import React from "react";

import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import {
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
  FormHelperText,
} from "@mui/material";

export const Input = ({
  error,
  name,
  onChange,
  label,
  labelError,
  color,
  type,
  showPassword,
  setShowPassword,
}) => {
  return (
    <>
      <div className="w-full mb-3">
        {name == "password" ? (
          <FormControl
            sx={{ width: "100%", color:"#008972" }}
            color={color}
            error={error != null ? true : false}
            name={name}
            onChange={onChange}
          >
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
              type={showPassword == true ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
            />
            {error != null ? <FormHelperText>{labelError}</FormHelperText> : ""}
          </FormControl>
        ) : (
          <TextField
            error={error != null ? true : false}
            type={type}
            sx={{ width: "100%", color:"" }}
            name={name}
            color={color}
            onChange={onChange}
            label={label}
            helperText={error != null ? labelError : ""}
            variant="outlined"
            
          />
        )}
      </div>
    </>
  );
};
