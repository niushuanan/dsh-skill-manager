//#region src/invariant.ts
const PACKAGE_NAME = "@deepseek-ai/dsh-client-ui-skill-manager";
const name = "client-ui-skill-manager-invariant";
const inject = ["invariants"];
const install = () => {};
const apply = (ctx) => Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install));
//#endregion
export { apply, inject, name };
