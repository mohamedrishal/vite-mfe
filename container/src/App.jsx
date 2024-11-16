import "./App.css";
import React, { Suspense } from "react";
import ErrorBoundary from "./common/ErrorBoundary";

const RemoteComponent1 = React.lazy(() => import("user/UserDetail"));
const RemoteComponent2 = React.lazy(() => import("user2/UserDetail2"));

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center", padding: "2rem", color: "red" }}>
        This is Container app
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly ",
          alignItems:'center',
          margin: "1.5rem",
          height:'70vh'
        }}
      >
        <ErrorBoundary>
          <Suspense fallback={<div>Loading Remote 1...</div>}>
            <RemoteComponent1 colorText={"gray"} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<div>Loading Remote 2...</div>}>
            <RemoteComponent2 colorText={"pink"} />
          </Suspense>
        </ErrorBoundary>
        
      </div>
    </div>
  );
}

export default App;
