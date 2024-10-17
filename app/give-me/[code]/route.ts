type GiveMeRouteParams = { params: { code: number } };

function handleCode(code: number) {
  if (code < 200 || code > 599) {
    return new Response("Status code must be between 200 and 599", {
      status: 400,
    });
  }

  return new Response(`Here is your response with status ${code}`, {
    status: code,
  });
}

export async function GET(_: Request, { params }: GiveMeRouteParams) {
  return handleCode(params.code);
}

export async function POST(_: Request, { params }: GiveMeRouteParams) {
  return handleCode(params.code);
}

export async function PUT(_: Request, { params }: GiveMeRouteParams) {
  return handleCode(params.code);
}

export async function DELETE(_: Request, { params }: GiveMeRouteParams) {
  return handleCode(params.code);
}

export async function PATCH(_: Request, { params }: GiveMeRouteParams) {
  return handleCode(params.code);
}
