import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userProfileGetInfo } from "./userProfileApi";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useAuth } from "@/context/authContext";

export const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const [apiProgress, setApiProgress] = useState();
  const { auth } = useAuth();

  useEffect(() => {
    async function getProfile() {
      setApiProgress(true);
      try {
        const response = await userProfileGetInfo(username);
        setUser(response.data);
      } catch (axiosError) {
        setErrorMessage(axiosError.response.data.message);
      } finally {
        setApiProgress(false);
      }
    }
    getProfile();
  }, []);
  return (
    <>
      <div className="mt-24 h-96">
        {apiProgress && (
          <div className="w-full h-full items-center justify-center flex flex-col">
            <CircularProgress
              size={70}
              sx={{
                color: "#609966",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};
