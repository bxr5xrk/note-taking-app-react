import { ComponentMeta, ComponentStory } from "@storybook/react";
import { prepopulatedData } from "../.data";
import NotesList from "../components/NotesList/NotesList";
import Decorator from "./Decorator";

export default {
    title: "Notes/List",
    component: NotesList,
    decorators: [(story) => <Decorator>{story()}</Decorator>],
} as ComponentMeta<typeof NotesList>;

const Template: ComponentStory<typeof NotesList> = (args) => (
    <NotesList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    notes: prepopulatedData,
    type: "active",
    title: "Notes",
};

export const NoOne = Template.bind({});
NoOne.args = {
    notes: [],
    type: "active",
    title: "Notes",
};
