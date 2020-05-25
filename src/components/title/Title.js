import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="com-10 mx-auto my-2 text-center">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
