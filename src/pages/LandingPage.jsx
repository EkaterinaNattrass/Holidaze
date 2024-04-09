import React from "react";
import { CssBaseline } from "@mui/material";
import LandingImageSection from "../components/landingImageSection";
import LandingTextSection from "../landingTextSection";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <LandingImageSection />
      <LandingTextSection />
    </>
  );
}
