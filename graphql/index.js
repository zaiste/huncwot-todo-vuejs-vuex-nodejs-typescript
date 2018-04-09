const Query = `
type Query {
  version: String
}
`

const typeDefs = [
  Query
];

const resolvers = {
};

module.exports = { typeDefs, resolvers };
