import React from "react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <article id="error">
      <h1 className="error-code">
        404 <span style={{ color: "#d4af37" }}>!</span>
      </h1>
      <h2 className="error-title">Page Not Found</h2>
      <p className="error-text">
        The page you were looking for has moved or no longer exists. Browse the projects we handle
        in Ghaziabad and Delhi NCR, or head back to the homepage.
      </p>
      <Link href="/" className="button primary errorbtn">
        <span className="errorSpan">Go Back Home</span>
      </Link>
    </article>
  );
}
