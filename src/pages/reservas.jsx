/* eslint-disable react/prop-types */
// import React from "react";

import FormReservas from "../components/FormReservas";
// {menu}
const ReservasPage = ({menu} ) => {
  return (
  <>
    <FormReservas />
    {menu}
  </>
  )
};

export default ReservasPage;
