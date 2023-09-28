import classes from "./UserRow.module.css";
import { Checkbox, Button } from "@digdir/design-system-react";
import { TrashIcon } from "@navikt/aksel-icons";

type UserRowProps = {
  name: string;
  index: number;
  checked: boolean;
  onChanged: Function;
};

export const UserRow = ({ name, index, checked, onChanged }: UserRowProps) => {
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
        <Checkbox
          size="small"
          description=""
          value="value"
          checked={checked}
          onClick={(e: any) => onChanged(name, e.target.checked)}
        />
      </div>
      <div className={classes.img}></div>
      <div className={classes.name}>{name}</div>
      <div>
        <Button variant="quiet" color="danger" icon={<TrashIcon />} />
      </div>
    </div>
  );
};
