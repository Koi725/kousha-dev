// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   // Skip if already includes a locale
//   if (pathname.startsWith('/en') || pathname.startsWith('/fa') || pathname.startsWith('/pt')) {
//     return;
//   }

//   return NextResponse.redirect(new URL('/en', request.url));
// }



import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fa', 'pt'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
