import React from "react";
import { ISources } from "../App";
import { Button } from "./Button";

interface IMainLayout {
  sources: ISources[];
  setModal(modal: boolean): void;
}
const MainLayout: React.FC<IMainLayout> = ({ sources }) => {
  return (
    <div className="container__sources">
      <Button />
      {sources.map((item: ISources) => (
        <div className="item__source" key={item.id}>
          <p>
            First Name:
            <span>{item.firstName}</span>
          </p>

          <p>
            Last Name:
            <span>{item.lastName}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export { MainLayout };
