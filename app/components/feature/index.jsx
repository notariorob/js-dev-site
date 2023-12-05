import React from "react";
import pt from "prop-types";

const Feature = ({ name, description }) => <div className="text-center" data-test="feature">
    <h2 className="text-2xl font-bold">{name}</h2>
    <p>{description}</p>
</div>;

Feature.propTypes = {
    /**
     * The heading of the feature
     */
    name: pt.string.isRequired,
    /**
     * The description of the feature
     */
    description: pt.string.isRequired
}

export default Feature;