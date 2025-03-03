import { assertEquals } from "jsr:@std/assert";
import plugin from "./no-console-log.ts";

Deno.test("no-console-log", () => {
  const diagnostics = Deno.lint.runPlugin(
    plugin,
    "main.ts",
    "console.log('test');",
  );

  assertEquals(diagnostics.length, 1);
  const d = diagnostics[0];
  assertEquals(d.id, "no-console-log/no-console-log");
  assertEquals(d.message, "Unexpected call to `console.log`");
});

Deno.test("allow-console-warn", () => {
  const diagnostics = Deno.lint.runPlugin(
    plugin,
    "main.ts",
    "console.warn('test');",
  );

  assertEquals(diagnostics.length, 0);
});

Deno.test("allow-console-error", () => {
  const diagnostics = Deno.lint.runPlugin(
    plugin,
    "main.ts",
    "console.error('test');",
  );

  assertEquals(diagnostics.length, 0);
});
