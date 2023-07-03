/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        {
          name: "good black",
          value: "black",
        },
        {
          name: "good white",
          value: "white",
        },
        {
          name: "blue blue",
          value: "blue",
        },
      ],
    },
  },
};

export default preview;
