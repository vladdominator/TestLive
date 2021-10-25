import React, { useState } from "react";
import "./App.scss";
import { MainLayout } from "./components/MainLayout";
import { Modal } from "./components/Modal";
import { ContextModal } from "./context/contextModal";

export interface ISources {
  firstName: string;
  lastName: string;
  id: string;
}

const App: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [sources, setSources] = useState<ISources[]>([]);

  return (
    <main className="main-content">
      <Modal isVisible={modal} setVisible={setModal} setSources={setSources} />
      <h2 className="main-content__text">Data Sources</h2>
      <ContextModal.Provider value={{ setModal }}>
        <MainLayout sources={sources} setModal={setModal} />
      </ContextModal.Provider>
    </main>
  );
};

export { App };
