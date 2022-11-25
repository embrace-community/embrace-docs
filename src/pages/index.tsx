import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// Before we have a proper landing page, redirect to the docs
export default function RedirectToDocs() {
  const history = useHistory();

  useEffect(() => {
    history.push("/docs/intro");
  }, []);

  return <div>index</div>;
}
