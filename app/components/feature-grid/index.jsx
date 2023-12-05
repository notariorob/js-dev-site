import React from "react";
import pt from "prop-types";
import Feature from "../feature";

const FeatureGrid = ({ name, features, columns }) => <div data-test="feature-grid">
    <h2 className="text-3xl font-bold block text-center pb-2">{name}</h2>
    <div className={`grid grid-cols-${columns}`}>
        {features.map((feature) => <Feature name={feature.name} description={feature.description} key={feature.name} />)}
    </div>
</div>;

FeatureGrid.propTypes = {
    /**
     * The heading of the FeatureGrid
     */
    name: pt.string.isRequired,
    /**
     * The features to be shown in the grid
     */
    features: pt.arrayOf(Feature.propTypes),
    /**
     * The number of colums the grid should have
     */
    columns: pt.number
}

FeatureGrid.defaultProps = {
    columns: 3
}

export default FeatureGrid;