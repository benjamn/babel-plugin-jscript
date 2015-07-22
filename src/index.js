export default function ({ Plugin, types: t }) {
  return new Plugin("jscript", {
    metadata: {
      group: "builtin-trailing"
    },
    
    visitor: {
      FunctionExpression: {
        exit(node, parent) {
          if (!node.id) return;
          node._ignoreUserWhitespace = true;

          if (t.isReturnStatement(parent)) {
            var parentScopeHasNoBindings = !this.scope.parent ||
              Object.keys(this.scope.parent.bindings).length === 0;

            if (parentScopeHasNoBindings) {
              // If this FunctionExpression is being returned from a scope
              // that has no bindings, then there is no need to wrap it
              // with an IIFE, because it's fine if the function name
              // leaks into that empty scope (as it will in IE8). This
              // clause is mostly to keep the FunctionExpression generated
              // below from being transformed again by this plugin.
              return;
            }
          }

          return t.callExpression(
            t.functionExpression(null, [], t.blockStatement([
              t.returnStatement(node)
            ])),
            []
          );
        }
      }
    }
  });
}
