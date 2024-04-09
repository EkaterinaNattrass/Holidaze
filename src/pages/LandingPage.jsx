import React from "react";
import { CssBaseline } from "@mui/material";
import LandingImageSection from "../components/landingImageSection";
import LandingClientSection from "../components/landingClientSection";
import LandingOwnerSection from "../components/landingOwnerSection.jsx";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <LandingImageSection />
      <LandingClientSection />
      <LandingOwnerSection />
    </>
  );
}
