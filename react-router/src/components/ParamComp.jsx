import React from "react";
import { useParams } from "react-router";

function ParamComp() {
  const { id } = useParams();
  return <div>Params {id}</div>;
}

export default ParamComp;
