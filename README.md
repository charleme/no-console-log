no-console-log

A Deno lint plugin that denies `console.log` but allow other console command .

Example of code for this rule:

```ts
console.log("test"); // ❌
console.warn("test"); // ✅
console.error("test"); // ✅
```
