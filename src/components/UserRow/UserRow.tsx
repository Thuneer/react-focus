import classes from "./UserRow.module.css";
import { Checkbox, Button } from "@digdir/design-system-react";
import { TrashIcon } from "@navikt/aksel-icons";

type UserRowProps = {
  name: string;
  index: number;
};

export const UserRow = ({ name, index }: UserRowProps) => {
  const getRandomColor = (number: number) => {
    var letters = "0123456789ABCDEF",
      color = "#",
      generatedNumber,
      i;
    for (i = 0; i < 6; i++) {
      generatedNumber = Math.floor(Math.random() * 16);
      color += letters[generatedNumber];
    }
    return color;
  };

  return (
    <div className={classes.row}>
      <div>
        <Checkbox size="small" description="" value="value" />
      </div>
      <div
        className={classes.img}
        style={{ backgroundColor: getRandomColor(index) }}
      ></div>
      <div className={classes.name}>{name}</div>
      <div>
        <Button variant="quiet" color="danger" icon={<TrashIcon />} />
      </div>
    </div>
  );
};
