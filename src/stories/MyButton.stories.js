import { MyButton } from "../components/MyButton.jsx";

export default {
  title: "MyButton",
  component: MyButton,
  args: {
    children: "Hi There",
  },
  // argTypes: {
  //   size: { control: "select" },
  //   children: {
  //     options: ["Italic", "click Me!"],
  //     mapping: {
  //       Italic: <em>HI!</em>,
  //     },
  //   },
  // },
  argTypes: {
    size: { control: "select" },
    // children: {
    //   options: ["Normal", "Bold", "Italic"],
    //   mapping: {
    //     Bold: <b>Bold</b>,
    //     Italic: <i>Italic</i>,
    //   },
    // },
  },
  parameters: {
    // backgrounds: {
    //   values: [
    //     {
    //       name: "good black",
    //       value: "black",
    //     },
    //     {
    //       name: "good white",
    //       value: "white",
    //     },
    //     {
    //       name: "blue blue",
    //       value: "blue",
    //     },
    //   ],
    // },
  },
};

// export const Primary = () => <MyButton primary />;

// export const Secondary = () => <MyButton />;

// export const Large = () => <MyButton size="large" />;

// export const Small = () => <MyButton size="small" />;

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {};

export const Large = {
  args: {
    size: "large",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};

// Primary꺼 그대로 사용 가능
export const LargePrimary = {
  args: {
    ...Primary.args,
    size: "large",
    children: "I Am Large",
  },
};
