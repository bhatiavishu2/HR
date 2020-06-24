const gql = require('graphql-tag');
const { importSchema } = require('graphql-import');
const { resolve } = require('path');

const buildTypeDefs = async () => {
  const path = resolve(__dirname, './defs/index.graphql');
  debugger
  const schema = await importSchema(path);
  debugger
  return gql(schema);
};

module.exports = {
  buildTypeDefs
};
