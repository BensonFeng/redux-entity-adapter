import React, { memo } from "react";
import { Panel, Button, ButtonToolbar } from "rsuite";

const Comment = ({ id, body, onDelete, onPatch, onUpdate }) => {
  return (
    <Panel header={<h1>{id}</h1>} bordered style={{ margin: 20 }}>
      {body}
      <ButtonToolbar style={{ marginTop: 10 }}>
        <Button size="lg" color="red" onClick={() => onDelete(id)}>
          Delete
        </Button>
        <Button
          size="lg"
          color="cyan"
          //   onClick={() => onPatch(id, { body: 'NEW TEXT' })}
          onClick={() => onUpdate(id, { body: "NEW TEXT" })}
        >
          Patch
        </Button>
      </ButtonToolbar>
    </Panel>
  );
};

export default memo(Comment);
