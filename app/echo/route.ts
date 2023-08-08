export async function POST(request: Request) {
    const { pathname } = new URL(request.url)
    const name = pathname.replace('/echo/', '')
    const body = await request.text()
    return new Response(`${name}: ${body}`, { status: 200 })
}
