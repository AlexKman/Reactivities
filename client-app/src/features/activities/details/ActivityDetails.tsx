import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface iProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
}

export const ActivityDetails: React.FC<iProps> = ({
  activity,
  setEditMode,
}) => {
  return (
    <div>
      <Card fluid>
        <Image
          src={`/assets/categoryImages/${activity.category}.jpg`}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span className="date">{activity.date}</span>
          </Card.Meta>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
            <Button
              onClick={() => setEditMode(true)}
              basic
              color="blue"
              content="Edit"
            ></Button>
            <Button basic color="grey" content="Cancel"></Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </div>
  );
};
