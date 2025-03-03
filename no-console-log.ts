const plugin: Deno.lint.Plugin = {
  name: "no-console-log",
  rules: {
    "no-console-log": {
      create(context) {
        return {
          CallExpression(node) {
            const callee = node.callee;
            if (
              callee.type === "MemberExpression" &&
              callee.object.type === "Identifier" &&
              callee.object.name === "console" &&
              callee.property.type === "Identifier" &&
              callee.property.name === "log"
            ) {
              context.report({
                node,
                message: `Unexpected call to \`console.log\``,
              });
            }
          },
        };
      },
    },
  },
};

export default plugin;
