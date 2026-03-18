import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to enforce domain restriction.
 * Allowed users to visit only via www.pravinsoft.in
 */
export function proxy(request: NextRequest) {
    const host = request.headers.get('host');
    const url = request.nextUrl.clone();
    const pathname = url.pathname;

    // 2. Local Development Allow
    if (host?.includes('localhost') || host?.includes('127.0.0.1')) {
        return NextResponse.next();
    }

    // 3. Enforce www.pravinsoft.in in production
    if (process.env.NODE_ENV === 'production' && host !== 'www.pravinsoft.in') {
        url.host = 'www.pravinsoft.in';
        url.protocol = 'https:';
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// Config to match all paths except static files and api
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
