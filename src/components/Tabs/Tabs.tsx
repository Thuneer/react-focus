import React from "react";
import cn from "classnames";
import "./Tabs.css";
import { useState } from "react";

const Tabs = (props: any) => {
  const [activeId, setActiveId] = useState(1);

  const OnBtnClicked = (id: number) => {
    setActiveId(id);
    props.sendData(id);
  };

  return (
    <div className={cn("tabs", props.className)}>
      <button
        className={cn("tab", { active: activeId === 1 })}
        onClick={() => OnBtnClicked(1)}
      >
        <span>Innhold</span>
      </button>
      <button
        className={cn("tab", { active: activeId === 2 })}
        onClick={() => OnBtnClicked(2)}
      >
        <span>Logikk</span>
      </button>
    </div>
  );
};

type BodyProps = {
  type: number;
  images?: boolean;
};

const TabsBody = ({ type, images }: BodyProps) => {
  return (
    <div className={cn("body", { "body-images": images })}>
      {type === 1 && (
        <div>
          All that more back full general laid opposite was decorated odd to way
          where view positives them. Your that assignment. Thing me universe has
          with by dragged needs out else. I even that to plainly my class.
          Someone arrange the pass would for them. Found something found somehow
          not on.
        </div>
      )}
      {type === 2 && (
        <div>
          Bad now, blind arrange brought harmonics go the afforded poster just
          always the both the know italic after packed, reflections, three
          should there travelling death, the his know made degree business, back
          labour, to from clothes, it towards hologram best discipline's set
          rather with in the we that perfecting spree.
        </div>
      )}
    </div>
  );
};

export { Tabs, TabsBody };
