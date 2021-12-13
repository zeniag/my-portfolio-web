// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import projects from "./documents/projects";
import techStacks from "./documents/techStacks";
import skillSet from "./documents/skillSet";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([projects, techStacks, skillSet]),
});
