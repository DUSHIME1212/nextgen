import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f7f7f7"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 0 }}>We're sorry!</h1>
      <div style={{ margin: "32px 0" }}>
        {/* <img 
          src="/404-broken-connection.png" 
          alt="Broken connection" 
          style={{ maxWidth: 380, width: "100%", marginBottom: 16 }}
        /> */}
      </div>
      <p style={{ fontSize: "1.25rem", marginBottom: 24 }}>
        We couldn't find the page you're looking for.
      </p>
      <Link href="/" passHref>
        <button style={{
          padding: "12px 32px",
          background: "#2574fb",
          color: "#fff",
          border: "none",
          borderRadius: 22,
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          letterSpacing: 1
        }}>
          GO HOME
        </button>
      </Link>
    </div>
  );
}