Before

```console
$ pnpm i next@15.0.4
$ pnpm next dev
# Goto http://localhost:3000/api/should-have-been-a-number
 ⨯ node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs (587:1) @ get error [as error]
 ⨯ ZodError: [
  {
    "code": "invalid_type",
    "expected": "number",
    "received": "string",
    "path": [
      "id"
    ],
    "message": "Expected number, received string"
  }
]
    at GET (./app/api/[id]/route.js:11:35)
  585 |                 if (this._error)
  586 |                     return this._error;
> 587 |                 const error = new ZodError(ctx.common.issues);
      | ^
  588 |                 this._error = error;
  589 |                 return this._error;
  590 |

# Goto http://localhost:3000/plain
 ⨯ Error: Boom
    at GET (app/api/plain/route.js:2:8)
    at run (webpack://next/dist/src/server/route-modules/app-route/module.ts:529:41)
    at handler (webpack://next/dist/src/server/route-modules/app-route/module.ts:725:18)
    at fn (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/lib/trace/tracer.ts:351:27)
    at NoopContextManager.with (/Users/sebbie/throwaway/my-app/node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/sebbie/throwaway/my-app/node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NoopTracer.startActiveSpan (/Users/sebbie/throwaway/my-app/node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18093)
    at ProxyTracer.startActiveSpan (/Users/sebbie/throwaway/my-app/node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18854)
    at startActiveSpan (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/lib/trace/tracer.ts:304:31)
    at NoopContextManager.with (/Users/sebbie/throwaway/my-app/node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/sebbie/throwaway/my-app/node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at spanContext (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/lib/trace/tracer.ts:303:24)
    at trace (webpack://next/dist/src/server/route-modules/app-route/module.ts:715:26)
    at run (webpack://next/dist/src/server/route-modules/app-route/module.ts:662:32)
    at run (webpack://next/dist/src/server/route-modules/app-route/module.ts:661:34)
    at run (webpack://next/dist/src/server/route-modules/app-route/module.ts:658:60)
    at handle (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:2504:47)
    at doRender (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:3027:27)
    at responseGenerator (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/response-cache/index.ts:67:13)
    at get (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:3039:48)
    at renderToResponseWithComponentsImpl (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:1877:13)
    at fn (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/lib/trace/tracer.ts:279:13)
    at trace (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:1874:23)
    at renderToResponseWithComponents (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:3597:26)
    at async DevServer.renderToResponseImpl (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:3659:23)
    at async DevServer.pipeImpl (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:1698:20)
    at async NextNodeServer.handleCatchallRenderRequest (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/next-server.ts:1034:6)
    at async DevServer.handleRequestImpl (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/base-server.ts:1462:8)
    at async (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/dev/next-dev-server.ts:514:13)
    at async Span.traceAsyncFn (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/trace/trace.ts:143:13)
    at async DevServer.handleRequest (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/dev/next-dev-server.ts:512:19)
    at async invokeRender (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/lib/router-server.ts:284:10)
    at async handleRequest (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/lib/router-server.ts:530:15)
    at async requestHandlerImpl (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/lib/router-server.ts:576:6)
    at async Server.requestListener (node_modules/.pnpm/next@15.0.4_react-dom@19.0.0_react@19.0.0/node_modules/next/src/server/lib/start-server.ts:146:6)
  1 | export async function GET(request, params) {
> 2 |   throw new Error("Boom");
    |        ^
  3 | }
  4 |
```

After

```console
$ pnpm i next@15.1.0
$ pnpm next dev
# Goto http://localhost:3000/api/should-have-been-a-number
 ⨯ Error [ZodError]: [
  {
    "code": "invalid_type",
    "expected": "number",
    "received": "string",
    "path": [
      "id"
    ],
    "message": "Expected number, received string"
  }
]
    at parse (app/api/[id]/route.js:8:32)
   6 |
   7 | export async function GET(request, params) {
>  8 |   const { id } = endpointSchema.parse(await params);
     |                                ^
   9 | }
  10 | {
  issues: [Array],
  addIssue: [Function (anonymous)],
  addIssues: [Function (anonymous)]
}

# Goto http://localhost:3000/plain
 ⨯ Error: Boom
    at GET (app/api/plain/route.js:2:8)
  1 | export async function GET(request, params) {
> 2 |   throw new Error("Boom");
    |        ^
  3 | }
  4 |
```
