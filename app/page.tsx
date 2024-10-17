import React from "react";

export default function Home() {
  return (
    <div className="px-24 py-12">
      <h1 className="text-4xl mt-4 font-semibold">
        Welcome to a very simple API
      </h1>

      <p className="mt-2 mb-4 text-2xl">The valid endpoints are:</p>

      <ul className="flex flex-col gap-4">
        <EndpointGroup name="OK">
          <Endpoint method="GET" path="/just-say-ok">
            Always returns <ReturnCode code="200" />.
          </Endpoint>

          <Endpoint method="POST" path="/just-say-ok">
            Always returns <ReturnCode code="200" />.
          </Endpoint>
        </EndpointGroup>

        <EndpointGroup name="ECHO">
          <Endpoint method="POST" path="/echo">
            Returns the request body as the response body with a{" "}
            <ReturnCode code="200" />
          </Endpoint>
        </EndpointGroup>

        <EndpointGroup name="ALL THE CODES">
          {HTTP_METHODS.map((method) => (
            <Endpoint key={method} method={method} path="/give-me/{returnCode}">
              Returns the given <code className="bg-slate-200">returnCode</code>{" "}
              as the HTTP status code.
            </Endpoint>
          ))}
        </EndpointGroup>

        <EndpointGroup name="EMPTY ARRAY">
          <Endpoint method="GET" path="/dummy-array">
            Returns an empty json array.
          </Endpoint>
        </EndpointGroup>
      </ul>
    </div>
  );
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
const HTTP_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

type EndpointProps = {
  method: HttpMethod;
  path: string;
  children?: React.ReactNode;
};

function Endpoint({ method, path, children }: EndpointProps) {
  return (
    <li>
      <Method method={method} /> <code className="bg-slate-200">{path}</code>{" "}
      {children}
    </li>
  );
}

function Method({ method }: { method: HttpMethod }) {
  const colors = {
    GET: "bg-green-200",
    POST: "bg-blue-200",
    PUT: "bg-yellow-200",
    PATCH: "bg-orange-200",
    DELETE: "bg-red-200",
  };

  return <code className={colors[method]}>{method}</code>;
}

type ReturnCodeType = "200" | "400" | "500";

function ReturnCode({ code }: { code: ReturnCodeType }) {
  const codes = {
    "200": {
      color: "bg-green-200",
      text: "OK",
    },
    "400": {
      color: "bg-yellow-200",
      text: "Bad Request",
    },
    "500": {
      color: "bg-red-200",
      text: "Internal Server Error",
    },
  };

  return (
    <code className={codes[code].color}>
      {code} {codes[code].text}
    </code>
  );
}

function EndpointGroup({
  children,
  name,
}: {
  children: React.ReactNode;
  name?: string;
}) {
  return (
    <li className="flex flex-col gap-4 border-dashed border-4 p-2">
      {name !== undefined && <h2 className="pl-2 font-bold text-xl">{name}</h2>}
      {children}
    </li>
  );
}
