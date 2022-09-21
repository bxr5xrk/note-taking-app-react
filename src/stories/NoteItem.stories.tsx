import { ComponentMeta, ComponentStory } from "@storybook/react";
import NoteItem from "../components/NoteItem/NoteItem";
import Decorator from "./Decorator";

export default {
    title: "Notes/Note",
    component: NoteItem,
    decorators: [(story) => <Decorator>{story()}</Decorator>],
} as ComponentMeta<typeof NoteItem>;

const Template: ComponentStory<typeof NoteItem> = (args) => (
    <NoteItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    type: "active",
    title: "some title",
    slug: "some-title",
    content: "some content",
    creationDate: "12.12.2022",
    category: "Idea",
    parsedDates: [],
};

export const LongTitleAndContent = Template.bind({});
LongTitleAndContent.args = {
    type: "active",
    title: "some titleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContent",
    slug: "some-title",
    content:
        "some content titleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContenttitleLongTitleAndContentLongTitleAndContentLongTitleAndContentLongTitleAndContent",
    creationDate: "12.12.2022",
    category: "Idea",
    parsedDates: [],
};

export const WithDates = Template.bind({});
WithDates.args = {
    type: "active",
    title: "some title",
    slug: "some-title",
    content: "some content titl",
    creationDate: "12.12.2022",
    category: "Idea",
    parsedDates: ["12.12.2022", "01.02.2023", "21.09.2022", "14.88.5555"],
};
