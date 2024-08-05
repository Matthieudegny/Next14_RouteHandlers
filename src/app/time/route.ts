// force dynamic, permet de forcer le rechargement de la route à chaque appel ( et non à celui du build )
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
