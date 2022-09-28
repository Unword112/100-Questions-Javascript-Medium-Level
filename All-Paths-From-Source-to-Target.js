var allPathsSourceTarget = (graph) => {
    const res = [];

  const dfs = (i, stack) => {
    if (stack.includes(i)) return;

    stack.push(i);

    if (i === graph.length - 1) res.push(stack);
    else graph[i].forEach((node) => dfs(node, [...stack]));
  };

  dfs(0, []);
  return res;
};

const root =  [[4,3,1],[3,2,4],[3],[4],[]];

console.log(allPathsSourceTarget(root));