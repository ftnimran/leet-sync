class Solution {
  dfs(node, adj, vis) {
    vis[node] = true;

    for (let nei of adj[node]) {
      if (!vis[nei]) {
        this.dfs(nei, adj, vis);
      }
    }
  }

  findMotherVertex(V, edges) {
    let adj = Array.from({ length: V }, () => []);

    for (let [u, v] of edges) {
      adj[u].push(v);
    }

    let vis = Array(V).fill(false);

    let candidate = -1;

    for (let i = 0; i < V; i++) {
      if (!vis[i]) {
        this.dfs(i, adj, vis);

        candidate = i;
      }
    }

    vis.fill(false);

    this.dfs(candidate, adj, vis);

    for (let i = 0; i < V; i++) {
      if (!vis[i]) {
        return -1;
      }
    }

    for (let i = 0; i < candidate; i++) {
      vis.fill(false);

      this.dfs(i, adj, vis);

      let ok = true;

      for (let j = 0; j < V; j++) {
        if (!vis[j]) {
          ok = false;
          break;
        }
      }

      if (ok) return i;
    }

    return candidate;
  }
}
