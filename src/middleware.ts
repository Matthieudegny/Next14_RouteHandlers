// fichier doit etre dans le dossier src
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// Utilisation implicite de config :
// Next.js lit automatiquement l'objet config exporté du fichier middleware. Vous n'avez pas besoin de l'utiliser explicitement dans votre code.
// Fonctionnement interne :
// Next.js utilise cette configuration pour déterminer quand exécuter le middleware. Il agit comme un filtre avant même que votre fonction middleware ne soit appelée.
// Processus :

// Lorsqu'une requête arrive, Next.js vérifie d'abord le matcher défini dans config.
// Si l'URL de la requête correspond au matcher, alors seulement la fonction middleware est exécutée.
// Si l'URL ne correspond pas, le middleware est ignoré et la requête continue normalement.

// export const config = {
//   matcher: "/profile",
// };

export function middleware(request: NextRequest) {
  // redirection
  // autre moyen pour la redirection sans passer par le fichier config
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  }
  // url rewrite
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  // }
  // cookies and headers
  // const themePreference = request.cookies.get("theme");
  // const response = NextResponse.next();
  // if (!themePreference) {
  //   response.cookies.set("theme", "dark");
  // }
  // response.headers.set("custom-header", "custom-value");

  // return response;
}
