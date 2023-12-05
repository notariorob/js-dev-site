import FeatureGrid from "../app/components/feature-grid";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/FeatureGrid',
    component: FeatureGrid,
    parameters: {},
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultFeatureGrid = {
    args: {
        name: 'Default feature grid',
        features: [
            {
                name: 'Feature 1',
                description: 'Feature 1 description',
            },
            {
                name: 'Feature 2',
                description: 'Feature 2 description',
            },
            {
                name: 'Feature 3',
                description: 'Feature 3 description',
            },
            {
                name: 'Feature 4',
                description: 'Feature 4 description',
            },
            {
                name: 'Feature 5',
                description: 'Feature 5 description',
            }
        ],
    },
};

export const OneColumnFeatureGrid = {
    args: {
        name: 'One column feature grid',
        features: DefaultFeatureGrid.args.features,
        columns: 1
    },
};


export const FourColumnFeatureGrid = {
    args: {
        name: 'Four column feature grid',
        features: DefaultFeatureGrid.args.features,
        columns: 4
    },
};