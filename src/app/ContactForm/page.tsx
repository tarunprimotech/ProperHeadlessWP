"use client";

import React from "react";

const FormEmbed = () => {
  return (
    <div className="ifram-cls" style={{ width: "100%", maxWidth: "100%" }}>
      <iframe
        src="https://demo1.primotech.ai/form/"
        title="Contact Form"
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "auto" }}
        allowFullScreen
      />
    </div>
  );
};

export default FormEmbed;
