import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Heading, Paragraph } from "@digdir/design-system-react";

import cn from "classnames";

type CardProps = {
  color: string;
};

export const Card = ({ color }: CardProps) => {
  const navigate = useNavigate();
  const onClick = (e: any) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/theme");
    }, 150);
  };

  return (
    <Link
      onClick={(e) => onClick(e)}
      to="/theme"
      className={cn("fds-card", color)}
    >
      <Heading spacing={true} size="small">
        Innovasjon i offentlig sektor
      </Heading>
      <Paragraph size="small">
        Innovasjon er å fornye eller lage noe nytt som skaper verdi for
        virksomhet, samfunn eller innbyggere. Formen er eksperimenterende og
        løsningen er ikke kjent på forhånd.
      </Paragraph>
    </Link>
  );
};
