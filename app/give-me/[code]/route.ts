export async function GET(request: Request, {params}: {params: {code: number}}) {
    const {code} = params

    if (code < 200 || code > 599) {
        return new Response('Status code must be between 200 and 599', { status: 400 })
    }

    return new Response(`Here is your response with status ${code}`, { status: code })
}
