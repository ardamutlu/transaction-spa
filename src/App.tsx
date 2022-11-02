import React, { Suspense } from "react";
import Content from "./layout/Content";
import Layout from "./layout/Layout";
import Router from "./router/Router";

const App: React.FC = () => (
  <Layout>
    <Content>
      <Suspense fallback="">
        <Router />
      </Suspense>
    </Content>
  </Layout>
);

export default App;
