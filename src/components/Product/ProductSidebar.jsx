import React, { useState } from "react";
import "./styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const AccordionSection = ({ title, content }) => (
  <li className="mt-2 pt-4 border-t">
    <Accordion
      style={{ boxShadow: "none", border: "none" }}
      className={`${title == "Size" && "mb-20"} `}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h7" className="font-bold">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  </li>
);

const CheckboxItem = ({ id, label }) => (
  <div className="selector mb-1">
    <input type="checkbox" className="modiefied-check mr-2" name={id} id={id} />
    <label htmlFor={id} className="fs-6">
      {label}
    </label>
  </div>
);

const PriceFilter = () => (
  <>
    <CheckboxItem id="price1" label="Under ₹ 2 500.00" />
    <div className="selector mb-1 d-flex">
      <CheckboxItem id="price2" label="₹ 2 501.01 - ₹ 7 500.00" />
    </div>
    <div className="selector mb-1 d-flex">
      <CheckboxItem id="price3" label="₹ 7 501.01 - ₹ 12 999.00" />
    </div>
    <CheckboxItem id="price4" label="Over ₹ 13 000" />
  </>
);

const SaleFilter = () => <CheckboxItem id="sale" label="Sale" />;

const SizeFilter = ({ sizes }) => (
  <div className="grid grid-cols-3 gap-x-6 hover:border-black hover:pointer">
    {sizes.map((size) => (
      <div key={size} className="size-box mb-1">
        {size}
      </div>
    ))}
  </div>
);

const Sidebar = ({ places }) => {
  const [isNavOpen, setNavOpen] = useState(true);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const links = [
    "Jordan",
    "Running",
    "Basketball",
    "Training & Running",
    "Skateboarding",
    "Goalf",
    "Tennis",
    "Athletics",
    "Walking",
  ];

  const sizes = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];

  return (
    <>
      {/* ... Button code remains unchanged ... */}
      <aside
        id="product-sidebar"
        className="fixed top-20 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-5 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2  font-medium">
            {links.map((link, index) => (
              <li key={index} className="font-normal">
                <Link to="/">{link}</Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 pt-4">
            <AccordionSection
              title="Gender"
              content={
                <>
                  <CheckboxItem id="male" label="Male" />
                  <CheckboxItem id="women" label="Women" />
                  <CheckboxItem id="unisex" label="Unisex" />
                </>
              }
            />

            <AccordionSection title="Shop By Price" content={<PriceFilter />} />

            <AccordionSection title="Sale & Offer" content={<SaleFilter />} />

            <AccordionSection
              title="Size"
              content={<SizeFilter sizes={sizes} />}
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
