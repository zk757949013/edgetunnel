import upstream from "./_worker.js";

export default {
  async fetch(request, env, ctx) {
    return upstream.fetch(request, env, ctx);
  },
};
